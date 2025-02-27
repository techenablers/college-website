import React from "react";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h3>Make Sustainable Futures,</h3>
        <h1>Best Digital Online Education!</h1>
        <p>
          Through our initiatives, we aim to bridge the educational gap, improve learning outcomes, 
          and foster a love for lifelong learning.
        </p>
        <Button className="contact-btn">Contact Us</Button>
      </div>
      <div className="banner-image">
        <img src="https://www.onlinemanipal.com/wp-content/uploads/2024/07/home-banner-better-future-desk.jpg" alt="Student" />
      </div>
      <div className="enroll-now d-none d-md-block">ENROLL NOW</div>
    </div>
  );
};

export default Banner;
