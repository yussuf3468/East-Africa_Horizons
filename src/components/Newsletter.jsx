import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <h1 className="newsletter-heading">Join the Odyssey Adventure!</h1>
        <p className="newsletter-description">
          Subscribe to our newsletter and get the latest travel guides, tips,
          and exclusive offers delivered straight to your inbox. Let’s embark
          on this journey together!
        </p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
