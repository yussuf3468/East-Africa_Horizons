const express = require('express');
const bcrypt = require('bcrypt'); // hash passwords
const jwt = require('jsonwebtoken');
const User = require('../modules/userModel'); // user template/schema
const router = express.Router();

// User Registration Endpoint
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username is already taken' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error registering the user', error: err.message });
  }
});

// User Login Endpoint
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Compare the passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate a JWT
    const token = jwt.sign(
      { id: user._id, username: user.username }, // payload
      process.env.JWT_SECRET,
      { expiresIn: '3h' } // token expiration
    );

    res.status(200).json({ success: true, message: 'Login is successful', token, username: user.username });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error logging in the user', error: err.message });
  }
});


module.exports = router;
