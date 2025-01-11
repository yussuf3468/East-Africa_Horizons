import React from 'react';
import '../index.scss';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-section text-center">
    <h1>
      Journey Beyond<br />
      Th<span>e</span> Map
    </h1>
    <h4>Your Guide to Global Exploration</h4>
    <Link to="/blog">
    <button>Explore Now <i className="fa-solid fa-chevron-right"></i></button>
    </Link>
  </div>
  );
};

export default Hero;
