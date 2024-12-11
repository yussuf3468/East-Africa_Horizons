import React from "react";
import heroImage2 from '../assets/images/7hidden.jpg'
import budgetTrip from '../assets/images/budget trip.jpg'
import experience from '../assets/images/experience.jpg'
import gear from '../assets/images/gear.jpg'
import safety from '../assets/images/safety.jpg'
import culture from '../assets/images/culture.jpg'



const BlogPosts = () => {
  return (
    <section className="blog-posts">
      <h1>
        Latest Blog Posts <span></span>
      </h1>
      <div id="blogCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Carousel Inner */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4 col-4">
                <article className="post">
                  <a href="blog.html?id=1">
                    <img
                      src={heroImage2}
                      className="d-block w-100"
                      alt="Blog post image"
                    />
                  </a>
                  <div className="content">
                    <h2>7 Hidden Gems You Must Visit This Year</h2>
                  </div>
                </article>
              </div>
              <div className="col-md-4 col-4">
                <article className="post">
                  <a href="blog.html?id=2">
                    <img
                      src={budgetTrip}
                      className="d-block w-100"
                      alt="Blog post image"
                    />
                  </a>
                  <div className="content">
                    <h2>Ultimate Budget Tips for Your Next Adventure</h2>
                  </div>
                </article>
              </div>
              <div className="col-md-4 col-4">
                <article className="post">
                  <a href="blog.html?id=3">
                    <img
                      src={experience}
                      className="d-block w-100"
                      alt="Blog post image"
                    />
                  </a>
                  <div className="content">
                    <h2>Immersive Travel Experiences to Transform Your Perspective</h2>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4 col-4">
                <article className="post">
                  <a href="blog.html?id=4">
                    <img
                      src={gear}
                      className="d-block w-100"
                      alt="Blog post image"
                    />
                  </a>
                  <div className="content">
                    <h2>Essential Gear Every Traveler Needs for a Smooth Journey</h2>
                  </div>
                </article>
              </div>
              <div className="col-md-4 col-4">
                <article className="post">
                  <a href="blog.html?id=5">
                    <img
                      src={safety}
                      className="d-block w-100"
                      alt="Blog post image"
                    />
                  </a>
                  <div className="content">
                    <h2>How to Stay Safe While Traveling Solo</h2>
                  </div>
                </article>
              </div>
              <div className="col-md-4 col-4">
                <article className="post">
                  <img
                    src={culture}
                    className="d-block w-100"
                    alt="Blog post image"
                  />
                  <div className="content">
                    <h2>Exploring Local Culture: A Traveler's Guide to Immersion</h2>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#blogCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#blogCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>
  );
};

export default BlogPosts;