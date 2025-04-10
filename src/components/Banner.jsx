/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/Banner.css";
import mainBanner from "../assets/Website-Banner.svg"

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <img
        src={mainBanner} 
        alt="Banner"
        className="banner-img"
      />
    </div>
  );
};

export default Banner;
