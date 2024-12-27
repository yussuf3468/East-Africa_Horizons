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
  setError(null);

  if (!loggedInUser) {
    alert("You need to be logged in to create a post!");
    return;
  }

  if (!title || !content || !(image instanceof File)) {
    setError("Please fill in all fields and upload a valid image.");
    return;
  }

  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("image", image);

  console.log("FormData entries in PostCreator:");
  formData.forEach((value, key) => {
    console.log(`${key}:`, value);
  });

  setLoading(true);

  try {
    await onAddPost(formData); // Pass FormData to parent component
    setLoading(false);
    setTitle("");
    setContent("");
    setImage(null);
  } catch (err) {
    setLoading(false);
    setError(err.message);
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