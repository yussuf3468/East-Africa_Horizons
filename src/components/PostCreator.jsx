import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";

const PostCreator = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user: loggedInUser } = useContext(AuthContext);
  const token = loggedInUser?.token || localStorage.getItem("authToken");

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  // PostCreator.jsx
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);
  
    try {
      const response = await fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Post created:', result);
      } else {
        const error = await response.json();
        console.error('Error creating post:', error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="post-creator">
      <h2>Create a New Post</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Post Title</label>
        <input
          id="title"
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="content">Post Content</label>
        <textarea
          id="content"
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <label htmlFor="image">Upload Image</label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        {image && <p>Selected File: {image.name}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Creating Post..." : "Add Post"}
        </button>
      </form>
    </div>
  );
};

PostCreator.propTypes = {
  onAddPost: PropTypes.func.isRequired,
};

export default PostCreator;