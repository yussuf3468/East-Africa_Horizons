import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import '../index.scss';

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { setUser } = useContext(AuthContext); // Access the context to set user
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(import.meta.env.VITE_API_URL)
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "An error occurred.");
        return;
      }

      // Handle successful login
      if (data.token) {
        alert(`Welcome, ${formData.username}!`);
        localStorage.setItem('authToken', data.token); // Store the token
        setUser({ username: formData.username, token: data.token }); // Set user in context with token
        navigate("/"); // Redirect to the main page
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container1">
      <div className="form-card1">
        <h2>Login Here</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Email or Phone"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </div>
          <button id="submit" type="submit" className="btn">
            Login
          </button>
        </form>
        <p className="login-link">
          Don&apos;t Have an account? <Link to="/register">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
