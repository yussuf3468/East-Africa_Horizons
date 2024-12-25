import React from 'react';
import adventure from '../assets/images/adventure.jpg';
import beach from '../assets/images/beach.jpg';
import culture from '../assets/images/cultural.jpg';
import luxury from '../assets/images/luxury.jpg';
import wildlife from '../assets/images/wildlife.jpg';
import mountains from '../assets/images/mountains.jpg';


const Categories = () => {
  const categoryList = [
    { name: 'Adventure', image: adventure },
    { name: 'Beach', image: beach },
    { name: 'Cultural', image: culture },
    { name: 'Luxury', image: luxury },
    { name: 'Wildlife', image: wildlife },
    { name: 'Mountains', image: mountains },
  ];

  return (
    <>
      <nav className="navbar1 modern-navbar">
        <div className="navbar-container">
        <a href="/" className="navbar-brand">
                Categories
              </a>
          <ul className="navbar-links">
            <li><a href="/" className="nav-link1">Home</a></li>
            <li><a href="/about" className="nav-link1">About</a></li>
            <li><a href="/destinations" className="nav-link1">Destinations</a></li>
            <li><a href="/travel-tips" className="nav-link1">Travel Tips</a></li>
            <li><a href="/contact" className="nav-link nav-cta">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="categories-container">
        <h2 className="categories-title">Discover Your Next Journey</h2>
        <p className="categories-subtitle">
          Explore unique destinations tailored to your travel style.
        </p>
        <div className="categories-grid">
          {categoryList.map((category, index) => (
            <div key={index} className="category-card">
              <div
                className="category-image"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="category-overlay">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">
                  Discover {category.name} adventures curated just for you.
                </p>
                <button className="explore-btn">Explore Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
