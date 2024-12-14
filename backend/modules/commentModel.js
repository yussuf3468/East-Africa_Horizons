const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  postId: Number, // To associate the comment with a blog post
  username: String, // User's name
  text: String, // Comment text
  timestamp: { type: Date, default: Date.now }, // Time of the comment
});

module.exports = mongoose.model('Comment', commentSchema);