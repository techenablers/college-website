/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "react-bootstrap";
import "../styles/Banner.css";
import enrollNow from "../assets/enroll-now.svg";
import courses from "../assets/courses.svg";
import logo from "../assets/logo.svg";

const Banner = () => {
  return (
    <div className="banner">
      {/* Left Content Section */}

      <div className="banner-left">
        <img src={logo} alt="DR.K.S. JR COLLEGE" className="logo" />
        <h3 style={{ marginTop: "20px", fontSize: "28px", fontWeight: "400" }}>
          Educating Minds
        </h3>
        <h1 style={{ marginTop: "20px", fontSize: "46px", fontWeight: "400" }}>
          Enriching Lives <br /> Empowering Generations
        </h1>

        <button className="btn btn-primary py-2 px-4">CONTACT US</button>
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
