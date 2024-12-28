import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../index.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo2.webp";
import post1 from "../assets/images/blogpost-2.jpg";
import post2 from "../assets/images/blogpost-3.jpg";
import post3 from "../assets/images/blogpost-4.jpg";
import Navbar1 from "./Navbar1";

const BlogPage = () => {
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
        const response = await fetch("http://localhost:8080/posts");
        const data = await response.json();
        setAllPosts(data);

        if (loggedInUser) {
          const userSpecificPosts = data.filter(
            (post) => post.author === loggedInUser.username
          );
          setUserPosts(userSpecificPosts);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
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
          const response = await fetch(`http://localhost:8080/comments/${post._id}`);
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

    const comment = {
      postId,
      username: loggedInUser.username,
      text: newComments[postId] || "",
    };

    try {
      const response = await fetch("http://localhost:8080/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
      });

      const savedComment = await response.json();
      setComments((prev) => ({
        ...prev,
        [postId]: [...(Array.isArray(prev[postId]) ? prev[postId] : []), savedComment],
      }));
      setNewComments((prev) => ({ ...prev, [postId]: "" }));
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const initialBlogPosts = [
    {
      id: 1,
      title: "7 Hidden Gems You Must Visit This Year",
      image: post1,
      content: "The world is full of undiscovered treasures just waiting to be explored. From remote islands to secret towns, here are seven hidden gems you must visit this year."
    },
    {
      id: 2,
      title: "How to Travel on a Budget",
      image: post2,
      content: "Traveling doesn't have to break the bank. Learn how to make the most of your trips without overspending."
    },
    {
      id: 3,
      title: "10 Most Instagrammable Spots",
      image: post3,
      content: "Capture memories and up your Instagram game with these visually stunning travel destinations."
    }
  ];

  return (
    <div className="blog-page">

      <Navbar1 brand={'Blogspace'}/>

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
            <article key={post._id} className="featured">
              <h1>{post.title}</h1>
              <img src={`http://localhost:8080${post.image}`} alt={post.title} className="featured-image" />
              <p className="description">{post.content}</p>
              <p className="author">By {post.author || "Anonymous"}</p>

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
                  onChange={(e) => setNewComments({ ...newComments, [post._id]: e.target.value })}
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
