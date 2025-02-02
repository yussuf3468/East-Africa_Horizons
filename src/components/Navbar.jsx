import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome for icons
import '../index.scss'; // Your custom styles
import { AuthContext } from '../context/AuthContext'; // User authentication context

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext); // Access user and update method from context
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Logout handler: Clears auth token and updates user state
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token from local storage
    setUser(null); // Clear user data from context
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <header className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">East Africa Horizons</Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="custom-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Navigation Links and Buttons */}
        <nav className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/writeBlog" className="nav-link1">
                Write a Blog
              </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Authentication buttons */}
          <div className="nav-actions">
            {user ? (
              <>
                {/* Display logged-in user's username */}
                <strong className="nav-item welcome-message">
                  Welcome, <strong className="username">{user.username}</strong>
                </strong>
                {/* Logout button */}
                <button className="btn btn-danger ms-3 logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Sign Up and Login buttons for unauthenticated users */}
                <Link to="/login" className="btn btn-outline">Login</Link>
                <Link to="/register" className="btn btn-primary">Sign Up</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;