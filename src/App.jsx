import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import '../src/index.scss';
import Navbar from './components/Navbar';
import Destinations from './components/Destinations';
import BlogPosts from './components/BlogCarousel';
import Frames from './components/Frames';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register'; // Import the Register component

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BlogPage from './components/BlogPage';

function App() {
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
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  );
}

export default App;
