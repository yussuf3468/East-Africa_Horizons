import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import '../src/index.scss'; // Global styles
import Navbar from './components/Navbar';
import Destinations from './components/Destinations';
import BlogPosts from './components/BlogCarousel';
import Frames from './components/Frames';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap scripts
import BlogPage from './components/BlogPage';
import Contact from './components/Contact';
import Categories from './components/Categories';
import PostCreator from './components/PostCreator';
import { AuthContext } from './context/AuthContext';
import NotFound from './components/NotFound'; // 404 Page component
import Hero from './components/Hero';
import ArticlePage from './components/ArticlePage ';

function App() {
  const navigate = useNavigate();
  const { user: loggedInUser } = useContext(AuthContext); // Fetch the logged-in user's context
  const token = loggedInUser?.token || localStorage.getItem("authToken"); // Get token for API authentication
  const [editingPost, setEditingPost] = useState(null); // State for tracking post being edited

  // Function to handle adding or updating a post
  const handleAddOrUpdatePost = async (formData, postId) => {
    const url = postId
      ? `${import.meta.env.VITE_API_URL}/posts/${postId}` // API URL for updating a post
      : `${import.meta.env.VITE_API_URL}/posts`; // API URL for creating a new post
    const method = postId ? "PUT" : "POST"; // HTTP method based on action

    try {
      const response = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` }, // Attach the token in headers
        body: formData, // Send form data (including images)
      });

      const responseBody = await response.json();

      if (!response.ok) {
        throw new Error(responseBody?.message || "Failed to submit post");
      }

      alert(`Post successfully ${postId ? "updated" : "created"}!`);
      setEditingPost(null); // Clear editing state
      navigate("/blog"); // Redirect to the blog page
    } catch (error) {
      console.error("Error submitting post:", error.message);
      alert(`An error occurred: ${error.message}`);
    }
  };

  // Function to handle post deletion
  const handleDeletePost = async (postId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return; // Exit if user cancels deletion

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }, // Attach the token in headers
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
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Destinations />
              <BlogPosts />
              <Frames />
              <Testimonials />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/writeBlog"
          element={
            <PostCreator
              onSubmit={handleAddOrUpdatePost}
              post={editingPost}
            />
          }
        />
        <Route
          path="/blog"
          element={
            <BlogPage
              onEdit={(post) => setEditingPost(post)}
              onDelete={handleDeletePost}
            />
          }
        />
        <Route path="/article/:id" element={<ArticlePage />} /> {/* New Route */}
      </Routes>
    </>
  );
}

export default App;
