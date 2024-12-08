import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.scss';
import Hero from './Hero';


const Navbar = () => {
  return (
    <div className='hero-container'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <p className="logo">
            <span>O</span>dyssey Travel
          </p>
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
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button className="btn btn-primary me-3">Sign Up 👋</button>
              <button className="btn btn-outline-secondary">
                <i className="fas fa-search text-white"></i>
              </button>
              <button className="btn btn-outline-secondary ms-2">
                <i className="fas fa-user-circle text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Hero/>
    </div>
  );
};

export default Navbar;
