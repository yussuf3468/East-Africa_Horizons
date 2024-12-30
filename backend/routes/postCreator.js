const express = require('express');
const multer = require('multer');
const stream = require('stream');
const { GridFSBucket } = require('mongodb');
const { verifyToken } = require('../middlewares/authMiddleware');
const Post = require('../modules/post');
const mongoose = require('mongoose');

const router = express.Router();

let gridfsBucket;

// Middleware to initialize GridFSBucket
router.use((req, res, next) => {
  if (!gridfsBucket) {
    const db = mongoose.connection.db;
    gridfsBucket = new GridFSBucket(db, { bucketName: 'uploads' });
  }
  next();
});

// Multer storage setup for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Only JPEG, PNG, and GIF files are allowed.'));
    }
    cb(null, true);
  },
});

// Route to create a new post with image upload
router.post('/', verifyToken, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Invalid file type or no file uploaded.' });
    }

    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Please fill in all fields.' });
    }

    // Stream file buffer to GridFS
    const fileStream = new stream.PassThrough();
    fileStream.end(req.file.buffer);

    const uploadStream = gridfsBucket.openUploadStream(req.file.originalname, {
      metadata: { contentType: req.file.mimetype },
    });

    fileStream.pipe(uploadStream);

    uploadStream.on('finish', async () => {
      // Create a new post with the GridFS file ID
      const newPost = new Post({
        title,
        content,
        image: uploadStream.id, // Store the file ID
        author: req.user.username,
        createdAt: new Date(),
      });

      await newPost.save();

      return res.status(201).json({ message: 'Post created successfully', post: newPost });
    });

    uploadStream.on('error', (err) => {
      console.error('Error uploading file:', err);
      res.status(500).json({ message: 'Error uploading file', error: err });
    });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

// Route to fetch a specific file from GridFS
router.get('/file/:id', async (req, res) => {
  try {
    const fileId = new mongoose.Types.ObjectId(req.params.id);

    // Find the file's metadata (optional, but useful for MIME type)
    const fileMetadata = await mongoose.connection.db.collection('uploads.files').findOne({ _id: fileId });

    if (!fileMetadata) {
      return res.status(404).json({ message: 'File not found' });
    }

    res.set('Content-Type', fileMetadata.metadata.contentType);

    // Stream the file to the client
    const downloadStream = gridfsBucket.openDownloadStream(fileId);
    downloadStream.pipe(res);

    downloadStream.on('error', (err) => {
      console.error('Error streaming file:', err);
      res.status(404).json({ message: 'File not found', error: err });
    });
  } catch (error) {
    console.error('Error fetching file:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

// Route to fetch all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find(); // Fetch all posts from the database
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
});

module.exports = router;
