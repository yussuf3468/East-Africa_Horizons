import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.scss';
import Hero from './Hero';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <div className="hero-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <h1 className="logo">
            <span>O</span>dyssey Travel
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
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
            <div className="d-flex align-items-center">
              {user ? (
                <>
                  <strong className="nav-item welcome-message">
                    Welcome, <strong className="username">{user.username}</strong>
                  </strong>
                  <button className="btn btn-danger ms-3 logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
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
      <Hero />
    </div>
  );
};

export default Navbar;
