import React from "react";
import '../index.scss';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Fill out the form below or reach us via our social channels.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <form>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your full name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email address" required />
            </div>
            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Type your message here" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: contact@odysseyTravel.com</p>
          <p>Phone: +254769237867</p>
          <p>Address: 123 Dream Street, Nairobi City, Kenya</p>

          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn twitter">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
