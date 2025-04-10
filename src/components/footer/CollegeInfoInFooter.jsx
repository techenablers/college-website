/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/logo1.svg";
import you from "../../assets/you.svg";
import sky from "../../assets/sky.svg";
import linin from "../../assets/in.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import "../../styles/CollegeInfoInFooter.css"; // For additional styling

function CollegeInfoInFooter() {
  const footerSocialMediaIcons = [
    {
      faceBook: facebook,
      twitter: twitter,
      linkedIn: linin,
      youtube: you,
      skype: sky,
    },
  ];

  const icons = footerSocialMediaIcons[0];

  return (
    <div className="college-footer-container">
      <img
        src={logo}
        className="college-logo"
        alt="college logo"
        style={{backgroundColor:'#fff', padding:"8px"}}
      />
      <div className="social-media-section">
        <h5>Follow Us On:</h5>
        <div className="social-icons">
          {Object.keys(icons).map((key) => (
            <div className="icon-container" key={key}>
              <img
                src={icons[key]}
                alt={key}
                className="icon-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollegeInfoInFooter;
