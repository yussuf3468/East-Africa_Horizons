import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";

const PostCreator = ({ onSubmit, post = {} }) => {
  const [title, setTitle] = useState(post.title || "");
  const [content, setContent] = useState(post.content || "");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user: loggedInUser } = useContext(AuthContext);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!loggedInUser) {
      alert("You need to be logged in to proceed!");
      return;
    }

    if (!title || !content) {
      setError("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    setLoading(true);
    try {
      await onSubmit(formData, post._id); // Pass FormData and post ID to parent
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
      <h2>{post._id ? "Edit Post" : "Create a New Post"}</h2>
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
        />
        {image && <p>Selected File: {image.name}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : post._id ? "Update Post" : "Add Post"}
        </button>
      </form>
    </div>
  );
};

PostCreator.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  post: PropTypes.object,
};

export default PostCreator;
