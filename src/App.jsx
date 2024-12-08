import React from 'react'
import '../src/index.scss'
import Navbar from './components/Navbar'
import Destinations from './components/Destinations'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BlogPosts from './components/BlogCarousel'
import Frames from './components/Frames';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Destinations/>
      <BlogPosts/>
      <Frames/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App