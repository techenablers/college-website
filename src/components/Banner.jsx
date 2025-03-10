/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/Banner.css';
import enrollNow from '../assets/enroll-now.svg';
import courses from '../assets/courses.svg';

const Banner = () => {
  return (
    <div className="banner">
      {/* Left Content Section */}
      <div className="banner-left">
        <h2>Make Sustainable Futures,</h2>
        <h1>Best Digital Online Education!</h1>
        <p>
          Through our initiatives, we aim to bridge educational gaps, improve learning outcomes, and foster a love for lifelong learning. 
        </p>
        <Button className="cta-button">CONTACT US</Button>
      </div>

      {/* Fixed Enroll Now Button */}
      <div className="enroll-now">
        <a href="#enroll">
          <img src={enrollNow} alt="Enroll Now" />
        </a>
      </div>
      <div className="our-courses">
        <a href="#courses">
          <img src={courses} alt="Our Courses" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
