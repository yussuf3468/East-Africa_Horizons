import React from 'react';
import adventure from '../assets/images/adventure.jpg';
import beach from '../assets/images/beach.jpg';
import culture from '../assets/images/cultural.jpg';
import luxury from '../assets/images/luxury.jpg';
import wildlife from '../assets/images/wildlife.jpg';
import mountains from '../assets/images/mountains.jpg';
import Navbar from './Navbar';


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
