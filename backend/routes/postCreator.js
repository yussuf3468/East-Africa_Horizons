const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { verifyToken } = require('../middlewares/authMiddleware');
const Post = require('../modules/post');

const router = express.Router();

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Multer upload configuration
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    console.log("File MIME Type:", file.mimetype); // Debug log
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Only JPEG, PNG, and GIF files are allowed.'));
    }
    cb(null, true);
  },
});

// Middleware to serve static files
router.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Route to create a new post with image upload
router.post('/', verifyToken, upload.single('image'), async (req, res) => {
  try {
    console.log("File received:", req.file);  // Log file details
    console.log("Body received:", req.body);  // Log body details

    if (!req.file) {
      return res.status(400).json({ message: 'Invalid file type or no file uploaded.' });
    }

    const { title, content } = req.body;
    const image = `/uploads/${req.file.filename}`;

    if (!title || !content) {
      return res.status(400).json({ message: 'Please fill in all fields.' });
    }

    const newPost = new Post({
      title,
      content,
      image,
      author: req.user.username,
      createdAt: new Date(),
    });

    await newPost.save();

    return res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    if (error.message.includes('Only JPEG')) {
      return res.status(400).json({ message: error.message });
    }
    console.error("Error creating post:", error);
    return res.status(500).json({ message: 'Internal server error' });
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