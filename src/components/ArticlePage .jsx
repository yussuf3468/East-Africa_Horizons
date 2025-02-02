import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import heroImage2 from "../assets/images/7hidden.jpg";
import budgetTrip from "../assets/images/budget trip.jpg";
import experience from "../assets/images/experience.jpg";
import gear from "../assets/images/gear.jpg";
import safety from "../assets/images/safety.jpg";
import culture from "../assets/images/culture.jpg";

const articles = [
  {
    id: 1,
    title: "7 Hidden Gems You Must Visit This Year",
    image: heroImage2,
    description:
      "Discover the hidden gems around the world that are perfect for travelers seeking unique and less-explored destinations. From the serene beaches of Palawan in the Philippines to the mystical landscapes of Cappadocia in Turkey, these hidden gems offer unparalleled beauty and tranquility. Each destination provides a unique experience, whether it's exploring ancient ruins, indulging in local delicacies, or simply soaking in the natural beauty. These places are often overlooked by the mainstream tourism industry, making them ideal for those seeking a more authentic and intimate travel experience. So pack your bags, and get ready to uncover the secrets of these extraordinary locations.",
  },
  {
    id: 2,
    title: "Ultimate Budget Tips for Your Next Adventure",
    image: budgetTrip,
    description:
      "Learn the best ways to save money while traveling without compromising on amazing experiences. Traveling on a budget doesn't mean you have to miss out on the fun. From finding the best deals on flights and accommodations to discovering budget-friendly activities and dining options, this guide covers it all. Learn how to make the most of your travel budget by planning ahead, being flexible with your travel dates, and taking advantage of local resources. With these tips, you can enjoy a memorable trip without breaking the bank. Whether you're a seasoned traveler or a newbie, these budget tips will help you have an unforgettable adventure without sacrificing quality.",
  },
  {
    id: 3,
    title: "Immersive Travel Experiences to Transform Your Perspective",
    image: experience,
    description:
      "Find out how immersive travel can open your eyes to new cultures and change the way you see the world. Immersive travel is about more than just visiting a new place; it's about experiencing it on a deeper level. By engaging with the local culture, trying new foods, and participating in traditional activities, you can gain a better understanding of the world around you. Immersive travel allows you to see things from a different perspective and can lead to personal growth and transformation. Whether it's through volunteering, homestays, or cultural exchanges, these experiences can leave a lasting impact and create meaningful connections with the people and places you visit.",
  },
  {
    id: 4,
    title: "Essential Gear Every Traveler Needs for a Smooth Journey",
    image: gear,
    description:
      "Gear up for your travels with this comprehensive guide to must-have items for a hassle-free adventure. Having the right gear can make all the difference when it comes to a smooth and enjoyable trip. From durable luggage and comfortable clothing to essential gadgets and accessories, this guide covers everything you need to pack. Learn about the latest travel gear innovations and how to choose the best products for your needs. Whether you're going on a weekend getaway or a long-term adventure, having the right gear ensures you're prepared for any situation. Don't leave home without these travel essentials.",
  },
  {
    id: 5,
    title: "How to Stay Safe While Traveling Solo",
    image: safety,
    description:
      "Solo travel is exciting! Learn how to keep yourself safe and enjoy your trip to the fullest. Traveling alone can be a liberating and empowering experience, but it's important to take precautions to ensure your safety. This guide offers practical tips for staying safe while exploring on your own. From choosing safe accommodations and staying aware of your surroundings to keeping in touch with loved ones and trusting your instincts, these tips will help you navigate your solo adventure with confidence. By being prepared and taking the necessary precautions, you can enjoy the freedom and independence of solo travel while staying safe.",
  },
  {
    id: 6,
    title: "Exploring Local Culture: A Traveler's Guide to Immersion",
    image: culture,
    description:
      "Understand how to truly immerse yourself in local culture while traveling. Immersing yourself in the local culture is one of the most rewarding aspects of travel. This guide offers tips on how to connect with the local community, learn about their traditions, and experience their way of life. From learning the local language and participating in cultural events to trying local cuisine and respecting customs, these tips will help you have an authentic and enriching travel experience. By embracing the local culture, you can gain a deeper appreciation for the destination and create lasting memories.",
  },
];

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const article = articles.find((article) => article.id === parseInt(id));
  const relatedArticles = articles.filter((art) => art.id !== parseInt(id));

  const handleArticleClick = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="article-page">
      <h1 className="article-title">{article.title}</h1>
      <img src={article.image} alt={article.title} className="article-image" />
      <p className="article-description">{article.description}</p>
    </div>
  );
};

export default ArticlePage;
