import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "../src/index.scss";
import Navbar from "./components/Navbar";
import BlogPage from "./components/BlogPage";
import PostCreator from "./components/PostCreator";
import { AuthContext } from "./context/AuthContext";
import NotFound from "./components/NotFound";

function App() {
  const navigate = useNavigate();
  const { user: loggedInUser } = useContext(AuthContext);
  const token = loggedInUser?.token || localStorage.getItem("authToken");
  const [editingPost, setEditingPost] = useState(null);

  const handleAddOrUpdatePost = async (formData, postId) => {
    const url = postId
      ? `${import.meta.env.VITE_API_URL}/posts/${postId}`
      : `${import.meta.env.VITE_API_URL}/posts`;
    const method = postId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const responseBody = await response.json();

      if (!response.ok) {
        throw new Error(responseBody?.message || "Failed to submit post");
      }

      alert(`Post successfully ${postId ? "updated" : "created"}!`);
      setEditingPost(null); // Reset editingPost after success
      navigate("/blog"); // Navigate to the blog page
    } catch (error) {
      console.error("Error submitting post:", error.message);
      alert(`An error occurred: ${error.message}`);
    }
  };

  const handleDeletePost = async (postId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody?.message || "Failed to delete post");
      }

      alert("Post successfully deleted!");
      navigate("/blog"); // Refresh the blog page after deletion
    } catch (error) {
      console.error("Error deleting post:", error.message);
      alert(`An error occurred: ${error.message}`);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route
        path="/writeBlog"
        element={
          <PostCreator
            onSubmit={handleAddOrUpdatePost}
            post={editingPost} // Pass the editing post if available
          />
        }
      />
      <Route
        path="/blog"
        element={
          <BlogPage
            onEdit={(post) => setEditingPost(post)} // Set the post to be edited
            onDelete={handleDeletePost} // Handle deletion
          />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
