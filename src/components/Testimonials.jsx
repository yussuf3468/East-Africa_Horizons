import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTestimonials(data.results);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setError("Failed to load testimonials. Please try again later.");
      }
    };

    fetchTestimonials();
  }, []); // Empty dependency array ensures the fetch runs once when the component mounts

  return (
    <section className="testimonials">
      <h1>Words from Wanderers</h1>
      <div className="testimonials-grid">
        {error ? (
          <p>{error}</p>
        ) : testimonials.length > 0 ? (
          testimonials.map((user, index) => (
            <div className="testimonial" key={index}>
              <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
              <h3>
                {user.name.first} {user.name.last}
              </h3>
              <p>
                "Odyssey Travel has transformed my travel experiences with its
                insightful tips and guides."
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          ))
        ) : (
          <p>Loading testimonials...</p>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
