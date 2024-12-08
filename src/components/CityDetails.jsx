import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/styles/components/_city-details.scss";

const CityDetails = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();

  const cityHistories = {
    paris: {
      title: "Paris, France",
      history: "Paris is known as the City of Light and the capital of France. It has a rich history of art, culture, and romance, and is home to iconic landmarks such as the Eiffel Tower and Notre Dame Cathedral.",
    },
    tokyo: {
      title: "Tokyo, Japan",
      history: "Tokyo, the capital of Japan, is a bustling metropolis known for its modern skyscrapers, historical temples, and vibrant pop culture.",
    },
    // Add other cities...
  };

  const city = cityHistories[cityName];

  return city ? (
    <div className="city-details">
      <h1>{city.title}</h1>
      <p>{city.history}</p>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  ) : (
    <div className="city-details">
      <h1>City Not Found</h1>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default CityDetails;
