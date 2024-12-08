import React from "react";
import frame1 from "../assets/images/frames (1).jpg";
import frame2 from "../assets/images/frames (2).jpg";
import frame3 from "../assets/images/frames (3).jpg";
import frame5 from "../assets/images/frames (5).jpg";
import frame6 from "../assets/images/frames (6).jpg";
import frame7 from "../assets/images/frames (7).jpg";
import frame8 from "../assets/images/frames (8).jpg";
import frame9 from "../assets/images/frames (9).jpg";
import frame10 from "../assets/images/frames (10).jpg";
import frame11 from "../assets/images/frames (11).jpg";
import frame12 from "../assets/images/frames (12).jpg";

const Frames = () => {
  return (
    <section className="Journey">
      <h1>Journey in Frames</h1>
      <div className="image-container">
        <div className="image-item">
          <img src={frame1} alt="Image 1" />
        </div>
        <div className="image-item">
          <img src={frame11} alt="Image 6" />
          <img src={frame6} alt="Image 2" />
        </div>
        <div className="image-item">
          <img src={frame3} alt="Image 3" />
        </div>
        <div className="image-item">
          <img src={frame2} alt="Image 4" />
        </div>
        <div className="image-item">
          <img src={frame5} alt="Image 5" />
        </div>
        <div className="image-item">
          <img src={frame7} alt="Image 6" />
        </div>
        <div className="image-item">
          <img src={frame8} alt="Image 6" />
        </div>
        <div className="image-item">
          <img src={frame9} alt="Image 6" />
          <img src={frame12} alt="Image 6" />
        </div>
        <div className="image-item">
          <img src={frame10} alt="Image 6" />
        </div>
      </div>
    </section>
  );
};

export default Frames;
