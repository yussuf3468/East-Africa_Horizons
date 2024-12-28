const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  postId: String, // Use String to match the frontend's postId
  username: String, // User's name
  text: String, // Comment text
  timestamp: { type: Date, default: Date.now }, // Time of the comment
});

module.exports = mongoose.model('Comment', commentSchema);
