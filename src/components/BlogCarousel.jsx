import React from "react";
import heroImage2 from "../assets/images/7hidden.jpg";
import budgetTrip from "../assets/images/budget trip.jpg";
import experience from "../assets/images/experience.jpg";
import gear from "../assets/images/gear.jpg";
import safety from "../assets/images/safety.jpg";
import culture from "../assets/images/culture.jpg";

const BlogPosts = () => {
  const slides = [
    [
      {
        imgSrc: heroImage2,
        title: "7 Hidden Gems You Must Visit This Year",
      },
      {
        imgSrc: budgetTrip,
        title: "Ultimate Budget Tips for Your Next Adventure",
      },
      {
        imgSrc: experience,
        title: "Immersive Travel Experiences to Transform Your Perspective",
      },
    ],
    [
      {
        imgSrc: gear,
        title: "Essential Gear Every Traveler Needs for a Smooth Journey",
      },
      {
        imgSrc: safety,
        title: "How to Stay Safe While Traveling Solo",
      },
      {
        imgSrc: culture,
        title: "Exploring Local Culture: A Traveler's Guide to Immersion",
      },
    ],
  ];

  return (
    <section className="blog-posts">
      <h1>
        Latest Blog Posts <span></span>
      </h1>
      <div id="blogCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Carousel Inner */}
        <div className="carousel-inner">
          {slides.map((slide, slideIndex) => (
            <div
              className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
              key={slideIndex}
            >
              <div className="row">
                {slide.map((post, index) => (
                  <div className="col-md-4 col-4" key={index}>
                    <article className="post">
                      <img
                        src={post.imgSrc}
                        className="d-block w-100"
                        alt="Blog post image"
                      />
                      <div className="content">
                        <h2>{post.title}</h2>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#blogCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#blogCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default BlogPosts;
