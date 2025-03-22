/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import DashDesign from "./DashDesign";
import "../../styles/GetInTouchFooter.css"; // For improved styling

function GetInTouch() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(!isMobile); // Open by default for desktop

  // Detect screen size for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleContent = () => setIsOpen(!isOpen);

  return (
    <div className="get-in-touch">
      {/* Title with Dropdown Arrow for Mobile */}
      <div
        className="get-in-touch-header"
        onClick={isMobile ? toggleContent : undefined}
      >
        <h5>Get In Touch</h5>
        {isMobile && (
          <span className={`arrow-icon ${isOpen ? "open" : ""}`}>
            ▼
          </span>
        )}
      </div>

      {/* DashDesign visibility condition */}
      {(!isMobile || (isMobile && isOpen)) && <DashDesign />}

      {/* Contact Information */}
      <p className={`get-in-touch-text ${isOpen ? "show" : ""}`}>
        Fusce varius, dolor tempor interdum tristique <br />
        bibendum service life.
      </p>
    </div>
  );
}

export default GetInTouch;
