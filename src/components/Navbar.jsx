import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome for icons
import '../index.scss'; // Custom styles
import Hero from './Hero'; // Hero component
import { AuthContext } from '../context/AuthContext'; // User authentication context

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext); // Access user and update method from context
  const navigate = useNavigate();

  // Logout handler: Clears auth token and updates user state
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token from local storage
    setUser(null); // Clear user data from context
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <div className="hero-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Logo */}
          <h1 className="logo">
            <span>O</span>dyssey Travel
          </h1>

          {/* Mobile navigation toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Authentication buttons */}
            <div className="d-flex align-items-center">
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
                  <Link to="/register" className="btn btn-primary me-3">
                    Sign Up 👋
                  </Link>
                  <Link to="/login" className="btn btn-secondary">
                    <i className="fas fa-user-circle text-white"></i> Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <Hero />
    </div>
  );
};

export default Navbar;
