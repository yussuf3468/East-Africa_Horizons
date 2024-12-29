import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import '../src/index.scss';
import Navbar from './components/Navbar';
import Destinations from './components/Destinations';
import BlogPosts from './components/BlogCarousel';
import Frames from './components/Frames';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BlogPage from './components/BlogPage';
import Contact from './components/Contact';
import Categories from './components/Categories';
import PostCreator from './components/PostCreator';
import { AuthContext } from './context/AuthContext';

function App() {
  const navigate = useNavigate();
  const { user: loggedInUser } = useContext(AuthContext);
  const token = loggedInUser?.token || localStorage.getItem('authToken');

  const handleAddPost = async (formData) => {
    console.log('FormData entries in App:');
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`, // Only include Authorization header
        },
        body: formData,
      });

      const responseBody = await response.json();
      console.log('Response Status:', response.status);
      console.log('Response Body:', responseBody);

      if (!response.ok) {
        throw new Error(responseBody?.message || 'Failed to create post');
      }

      alert('Post successfully created!');
      navigate('/blog'); // Navigate to the blog page after success
    } catch (error) {
      console.error('Error adding post:', error.message);
      alert(`An error occurred: ${error.message}`);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
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
      <Route path="/writeBlog" element={<PostCreator onAddPost={handleAddPost} />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;