require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Import path module

const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connection to MongoDB successful'))
  .catch((err) => console.error(`Connection to MongoDB failed: ${err.message}`));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to Authentication with JWT');
});

// User Routes
const userRoutes = require('./routes/userRoutes.js');
app.use('/', userRoutes);

// Post Routes
const postRoutes = require('./routes/postCreator.js');
app.use('/posts', postRoutes); // Correct path for posts routes

// Serve static files from the 'dist' directory (Vite's build output)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));

  // Fallback route to serve the index.html file for React Router
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
  });
}

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));