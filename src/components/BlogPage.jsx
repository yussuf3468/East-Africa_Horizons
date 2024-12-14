import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Update the path as needed
import "../index.scss";
import post1 from "../assets/images/blogpost-2.jpg";
import post2 from "../assets/images/blogpost-3.jpg";
import post3 from "../assets/images/blogpost-4.jpg";
import post4 from "../assets/images/frames (9).jpg";
import post5 from "../assets/images/frames (10).jpg";
import post6 from "../assets/images/frames (11).jpg";
import post7 from "../assets/images/frames (12).jpg";
import post8 from "../assets/images/blog-post-8.jpg";
import logo from "../assets/images/logo1.png"

const BlogPage = () => {
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState({});
  const [newComments, setNewComments] = useState({});
  const { user: loggedInUser } = useContext(AuthContext); // Consume AuthContext for the logged-in user

  const blogPosts = [
    {
      id: 1,
      title: "7 Hidden Gems You Must Visit This Year",
      image: post1,
      content: `The world is full of undiscovered treasures just waiting to be explored. 
      From remote islands to secret towns, here are seven hidden gems you must visit this year.`,
    },
    {
      id: 2,
      title: "How to Travel on a Budget",
      image: post2,
      content: `Traveling doesn't have to break the bank. Learn how to make the most of your trips without overspending.`,
    },
    {
      id: 3,
      title: "10 Most Instagrammable Spots",
      image: post3,
      content: `Capture memories and up your Instagram game with these visually stunning travel destinations.`,
    },
    {
      id: 4,
      title: "5 Travel Hacks for Beginners",
      image: post4,
      content: `Travel smarter with these five beginner-friendly hacks that will make your journey seamless.`,
    },
    {
      id: 5,
      title: "The Best Cities for Digital Nomads",
      image: post5,
      content: `Work and travel seamlessly with our guide to the best cities for digital nomads.`,
    },
    {
      id: 6,
      title: "Why Solo Travel is Worth Trying",
      image: post6,
      content: `Discover yourself and the world as you embrace the freedom and adventure of solo travel.`,
    },
    {
      id: 7,
      title: "Top 5 Beaches You Can't Miss",
      image: post7,
      content: `Sun, sand, and sea—explore our curated list of the most breathtaking beaches.`,
    },
    {
      id: 8,
      title: "Unusual Foods to Try While Traveling",
      image: post8,
      content: `Expand your palate and experience culture through these unique dishes from around the globe.`,
    },
  ];

  useEffect(() => {
    // Fetch author info
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        const user = data.results[0];
        setAuthor({
          name: `${user.name.first} ${user.name.last}`,
          image: user.picture.large,
          bio: `Hi, I'm ${user.name.first}. I'm passionate about blogging, storytelling, and connecting with readers.`,
        });
      })
      .catch((err) => console.error("Error fetching author:", err));

    // Fetch comments for each blog post
    blogPosts.forEach((post) => {
      fetch(`http://localhost:8080/comments/${post.id}`)
        .then((res) => res.json())
        .then((data) => setComments((prev) => ({ ...prev, [post.id]: data })))
        .catch((err) =>
          console.error(`Error fetching comments for post ${post.id}:`, err)
        );
    });
  }, []);

  const handleNewCommentChange = (postId, value) => {
    setNewComments((prev) => ({
      ...prev,
      [postId]: value,
    }));
  };

  const handleAddComment = (postId) => {
    if (!loggedInUser) {
      alert("You need to be logged in to comment!");
      return;
    }

    const comment = {
      postId,
      username: loggedInUser.username, // Use the username from AuthContext
      text: newComments[postId] || "",
    };

    fetch("http://localhost:8080/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        setComments((prev) => ({
          ...prev,
          [postId]: [...(prev[postId] || []), data],
        }));
        setNewComments((prev) => ({
          ...prev,
          [postId]: "",
        }));
      })
      .catch((err) => console.error("Error adding comment:", err));
  };

  return (
    <div className="blog-page">
      {/* Navbar */}
      {/* Navbar */}
      <nav className="navbar1 modern-navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="BlogSpace Logo" className="navbar-logo" />
            Blogspace
          </a>
          <ul className="navbar-links">
            <li><a href="/" className="nav-link1">Home</a></li>
            <li><a href="/about" className="nav-link1">About</a></li>
            <li><a href="/destinations" className="nav-link1">Destinations</a></li>
            <li><a href="/travel-tips" className="nav-link1">Travel Tips</a></li>
            <li><a href="/contact" className="nav-link nav-cta">Contact</a></li>
          </ul>
        </div>
      </nav>



      {/* Main Blog Section */}
      <div className="container">
        <main className="blog-main">
          {blogPosts.map((post) => (
            <article key={post.id} className="featured">
              <h1>{post.title}</h1>
              <img src={post.image} alt={post.title} className="featured-image" />
              <p className="description">{post.content}</p>

              {/* Comments Section */}
              <div className="comments-section">
                <h3>Comments</h3>
                <ul>
                  {(comments[post.id] || []).map((comment, index) => {
                    const formattedTimestamp = new Date(comment.timestamp).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    });

                    return (
                      <li key={index}>
                        <div className="comment-icon">{comment.username.charAt(0)}</div>
                        <div className="comment-content">
                          <strong>{comment.username}:</strong> <span>{comment.text}</span>
                          <i>{formattedTimestamp}</i>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <textarea
                  value={newComments[post.id] || ""}
                  onChange={(e) => handleNewCommentChange(post.id, e.target.value)}
                  placeholder="Add a comment..."
                />
                <button onClick={() => handleAddComment(post.id)}>Post Comment</button>
              </div>
            </article>
          ))}
        </main>

        {/* Sidebar Section */}
        <aside className="blog-sidebar">
          {author && (
            <div className="author">
              <img src={author.image} alt={author.name} className="author-image" />
              <h3>{author.name}</h3>
              <p>{author.bio}</p>
            </div>
          )}

          {/* Popular Posts */}
          <div className="popular-posts">
            <h3>Popular Posts</h3>
            <div className="popular-post">
              <img src={post3} alt="Popular Post" className="popular-post-image" />
              <h4>10 Most Instagrammable Spots</h4>
            </div>
            <div className="popular-post">
              <img src={post4} alt="Popular Post" className="popular-post-image" />
              <h4>5 Travel Hacks for Beginners</h4>
            </div>
            <div className="popular-post">
              <img src={post5} alt="Popular Post" className="popular-post-image" />
              <h4>The Best Cities for Digital
                Nomads</h4> </div> <div className="popular-post"> <img src={post6} alt="Popular Post" className="popular-post-image" /> <h4>Why Solo Travel is Worth Trying</h4> </div> </div> </aside> </div> </div>);
};

export default BlogPage;