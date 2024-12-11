require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connection to MongoDB successful'))
  .catch((err) => console.error(`Connection to MongoDB failed: ${err.message}`));

app.get('/', (req, res) => {
  res.send('Welcome to Authentication with JWT');
});
const userRoutes = require('./routes/userRoutes.js')
app.use('/', userRoutes)

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
