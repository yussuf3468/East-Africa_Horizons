// Import dependencies
const mongoose = require('mongoose');

// Define Post schema
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create Post model
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
