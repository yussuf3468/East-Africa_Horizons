require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const { GridFSBucket } = require('mongodb');
const crypto = require('crypto');
const stream = require('stream');

const app = express();

const corsOptions = {
  origin: '*', // Allow all origins for testing
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Connect to MongoDB
let gfs, gridfsBucket;
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connection to MongoDB successful');
    const db = mongoose.connection.db;

    // Initialize GridFS
    gridfsBucket = new GridFSBucket(db, { bucketName: 'uploads' });
    gfs = db.collection('uploads.files'); // Reference to GridFS files collection
  })
  .catch((err) => console.error(`Connection to MongoDB failed: ${err.message}`));

// Multer Storage Setup for GridFS
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to Upload a File
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const fileStream = new stream.PassThrough();
    fileStream.end(req.file.buffer);

    const uploadStream = gridfsBucket.openUploadStream(req.file.originalname, {
      metadata: { contentType: req.file.mimetype },
    });

    fileStream.pipe(uploadStream);

    uploadStream.on('finish', () => {
      res.status(201).json({ message: 'File uploaded successfully', fileId: uploadStream.id });
    });

    uploadStream.on('error', (err) => {
      console.error('Error uploading file:', err);
      res.status(500).json({ message: 'Error uploading file', error: err });
    });
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

// Route to Get a File by ID
app.get('/file/:id', async (req, res) => {
  try {
    const fileId = new mongoose.Types.ObjectId(req.params.id);
    const downloadStream = gridfsBucket.openDownloadStream(fileId);

    res.set('Content-Type', (await gfs.findOne({ _id: fileId })).metadata.contentType);

    downloadStream.pipe(res);

    downloadStream.on('error', (err) => {
      console.error('Error downloading file:', err);
      res.status(404).json({ message: 'File not found', error: err });
    });
  } catch (error) {
    console.error('Error fetching file:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

// Serve static files from the 'dist' directory (Vite's build output)
app.use(express.static(path.join(__dirname, '../dist')));

// Fallback route for React Router
app.get('*', (req, res) => {
  if (!req.path.startsWith('/uploads')) {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
  }
});

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to Authentication with JWT');
});

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
