import React, { useState } from 'react'
import logo from "../assets/images/logo2.webp";
import { Link, useNavigate } from "react-router-dom";

const Navbar1 = ({ brand }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="navbar1 modern-navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-brand">
                    <img src={logo} alt="BlogSpace Logo" className="navbar-logo" />
                    {brand}
                </a>
                <button
                    className="hamburger-menu"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div className="hamburger-bar"></div>
                    <div className="hamburger-bar"></div>
                    <div className="hamburger-bar"></div>
                </button>
                <ul className={`navbar-links1 ${menuOpen ? "open" : ""}`}>
                    <li>
                        <Link to="/" className="nav-link1">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/writeBlog" className="nav-link1">
                            Write a Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/categories" className="nav-link1">
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link nav-cta">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar1