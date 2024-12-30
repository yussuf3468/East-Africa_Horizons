import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../index.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo2.webp";
import post1 from "../assets/images/blogpost-2.jpg";
import post2 from "../assets/images/blogpost-3.jpg";
import post3 from "../assets/images/blogpost-4.jpg";
import post4 from "../assets/images/frames (9).jpg";
import post5 from "../assets/images/frames (10).jpg";
import post6 from "../assets/images/frames (11).jpg";
import post7 from "../assets/images/frames (12).jpg";
import post8 from "../assets/images/blog-post-8.jpg";
import Navbar1 from "./Navbar1";

const BlogPage = () => {

  const initialBlogPosts = [
    {
      id: 1,
      title: "7 Hidden Gems You Must Visit This Year",
      image: post4,
      content: "The world is full of undiscovered treasures just waiting to be explored. From remote islands to secret towns, here are seven hidden gems you must visit this year.",
    },
    {
      id: 2,
      title: "How to Travel on a Budget",
      image: post2,
      content: "Traveling doesn't have to break the bank. Learn how to make the most of your trips without overspending.",
    },
    {
      id: 3,
      title: "10 Most Instagrammable Spots",
      image: post3,
      content: "Capture memories and up your Instagram game with these visually stunning travel destinations.",
    },
    {
      id: 4,
      title: "5 Travel Hacks for Beginners",
      image: post1,
      content: "Travel smarter with these five beginner-friendly hacks that will make your journey seamless.",
    },
    {
      id: 5,
      title: "The Best Cities for Digital Nomads",
      image: post5,
      content: "Work and travel seamlessly with our guide to the best cities for digital nomads.",
    },
    {
      id: 6,
      title: "Why Solo Travel is Worth Trying",
      image: post6,
      content: "Discover yourself and the world as you embrace the freedom and adventure of solo travel.",
    },
    {
      id: 7,
      title: "Top 5 Beaches You Can't Miss",
      image: post7,
      content: "Sun, sand, and sea—explore our curated list of the most breathtaking beaches.",
    },
    {
      id: 8,
      title: "Unusual Foods to Try While Traveling",
      image: post8,
      content: "Expand your palate and experience culture through these unique dishes from around the globe.",
    },
  ];

  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState({});
  const [newComments, setNewComments] = useState({});
  const { user: loggedInUser } = useContext(AuthContext);
  const [userPosts, setUserPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [showWriteBlog, setShowWriteBlog] = useState(false);

  const navigate = useNavigate();

  // Fetch all posts from the backend
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
        const data = await response.json();
        // Add a source identifier to initialBlogPosts
        const enrichedInitialPosts = initialBlogPosts.map((post) => ({
          ...post,
          source: "initial",
        }));
        // Add a source identifier to server posts
        const enrichedServerPosts = data.map((post) => ({
          ...post,
          source: "server",
        }));
        // Combine posts
        const combinedPosts = [...enrichedServerPosts, ...enrichedInitialPosts];
        setAllPosts(combinedPosts);

        if (loggedInUser) {
          const userSpecificPosts = enrichedServerPosts.filter(
            (post) => post.author === loggedInUser.username
          );
          setUserPosts(userSpecificPosts);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        // Fall back to enriched initialBlogPosts
        const enrichedInitialPosts = initialBlogPosts.map((post) => ({
          ...post,
          source: "initial",
        }));
        setAllPosts(enrichedInitialPosts);
      }
    };

    fetchAllPosts();
  }, [loggedInUser]);

  // Fetch random author details
  useEffect(() => {
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
  }, []);

  // Fetch comments for each post
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsData = {};
        for (const post of allPosts) {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/comments/${post._id}`);
          const data = await response.json();
          commentsData[post._id] = Array.isArray(data) ? data : [];
        }

        setComments(commentsData);
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };

    if (allPosts.length) fetchComments();
  }, [allPosts]);

  // Handle adding a new comment
  const handleAddComment = async (postId) => {
    if (!loggedInUser) {
      alert("You need to be logged in to comment!");
      return;
    }

    const commentText = newComments[postId] || "";

    if (!commentText.trim()) {
      alert("Comment cannot be empty!");
      return;
    }

    const comment = {
      postId: postId.toString(), // Ensure this matches the backend schema
      username: loggedInUser.username, // Ensure this is not null
      text: newComments[postId] || "",
    };


    console.log("Submitting comment:", comment);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
      });

      const savedComment = await response.json();
      console.log("Saved comment:", savedComment);

      setComments((prev) => ({
        ...prev,
        [postId]: [...(Array.isArray(prev[postId]) ? prev[postId] : []), savedComment],
      }));
      setNewComments((prev) => ({ ...prev, [postId]: "" })); // Clear the textarea
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };



  return (
    <div className="blog-page">

      <Navbar1 brand={'Blogspace'} />

      <div className="container">
        <main className="blog-main">
          {showWriteBlog && loggedInUser && (
            <section id="write-blog">
              <h2>Write a Blog</h2>
              {/* <PostCreator onAddPost={handleAddPost} /> */}
            </section>
          )}

          {/* Display All Posts */}
          {allPosts.map((post) => (
            <article key={`${post.id || post._id}`} className="featured">
              <h1>{post.title}</h1>
              <img
                src={`${import.meta.env.VITE_API_URL}/posts/file/${post.image}`}
                alt={post.title}
                className="featured-image"
              />
              <p className="description">{post.content}</p>
              <p className="author">By {post.author || "Anonymous"}</p>

              {/* Comments Section */}
              <div className="comments-section">
                <h3>Comments</h3>
                <ul>
                  {(Array.isArray(comments[post._id]) ? comments[post._id] : []).map((comment, index) => (
                    <li key={`${post._id}-comment-${index}`}>
                      <strong>{comment.username}:</strong> {comment.text}
                    </li>
                  ))}
                </ul>
                <textarea
                  value={newComments[post._id] || ""}
                  onChange={(e) => {
                    const updatedValue = e.target.value;
                    setNewComments({ ...newComments, [post._id]: updatedValue });
                  }}
                  placeholder="Add a comment..."
                />
                <button onClick={() => handleAddComment(post._id)}>Post Comment</button>
              </div>
            </article>
          ))}

        </main>

        <aside className="blog-sidebar">
          {author && (
            <div className="author">
              <img src={author.image} alt={author.name} className="author-image" />
              <h3>{author.name}</h3>
              <p>{author.bio}</p>
            </div>
          )}

          {/* Display Popular Posts */}
          <section className="popular-posts">
            <h3>Popular Posts</h3>
            {initialBlogPosts.map((post) => (
              <article key={post.id} className="popular-post">
                <h4>{post.title}</h4>
                <img src={post.image} alt={post.title} className="popular-post-image" />
                <p>{post.content}</p>
                <Link to={`/post/${post.id}`} className="read-more-link">Read More</Link>
              </article>
            ))}
          </section>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;
