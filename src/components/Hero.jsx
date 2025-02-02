// Hero.jsx
import React from 'react';
import hero5 from '../assets/images/hero5.jpg'

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${hero5})`, // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Discover East Africa</h1>
        <p className="hero-subtitle">
          Unforgettable adventures and breathtaking landscapes await.
        </p>
        <button className="btn btn-primary">Explore Now</button>
      </div>
    </section>
  );
};

export default Hero;
