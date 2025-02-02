import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage2 from "../assets/images/7hidden.jpg";
import budgetTrip from "../assets/images/budget trip.jpg";
import experience from "../assets/images/experience.jpg";
import gear from "../assets/images/gear.jpg";
import safety from "../assets/images/safety.jpg";
import culture from "../assets/images/culture.jpg";

// Array containing article data
const articles = [
  {
    id: 1,
    title: "7 Hidden Gems You Must Visit This Year",
    image: heroImage2,
    description:
      "Discover the hidden gems around the world that are perfect for travelers seeking unique and less-explored destinations.",
  },
  {
    id: 2,
    title: "Ultimate Budget Tips for Your Next Adventure",
    image: budgetTrip,
    description:
      "Learn the best ways to save money while traveling without compromising on amazing experiences.",
  },
  {
    id: 3,
    title: "Immersive Travel Experiences to Transform Your Perspective",
    image: experience,
    description:
      "Find out how immersive travel can open your eyes to new cultures and change the way you see the world.",
  },
  {
    id: 4,
    title: "Essential Gear Every Traveler Needs for a Smooth Journey",
    image: gear,
    description:
      "Gear up for your travels with this comprehensive guide to must-have items for a hassle-free adventure.",
  },
  {
    id: 5,
    title: "How to Stay Safe While Traveling Solo",
    image: safety,
    description:
      "Solo travel is exciting! Learn how to keep yourself safe and enjoy your trip to the fullest.",
  },
  {
    id: 6,
    title: "Exploring Local Culture: A Traveler's Guide to Immersion",
    image: culture,
    description:
      "Understand how to truly immerse yourself in local culture while traveling.",
  },
];

const BlogPosts = () => {
  // Hook for navigation
  const navigate = useNavigate();

  // Function to handle article click and navigate to the article page
  const handleArticleClick = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <section className="blog-posts-section">
      <div className="blog-posts">
        <h1>Latest Blog Posts</h1>
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-4 col-4" key={article.id}>
              <article
                className="post"
                onClick={() => handleArticleClick(article.id)}
              >
                <img
                  src={article.image}
                  className="d-block w-100"
                  alt={article.title}
                />
                <div className="content">
                  <h2>{article.title}</h2>
                  {/* <p>{article.description}</p> */}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;