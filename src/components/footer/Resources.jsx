/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import DashDesign from "./DashDesign";
import "../../styles/ResourcesFooter.css"; // For improved styling

function Resources() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(!isMobile); // Open by default for desktop

  // Detect screen size for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleLinks = () => setIsOpen(!isOpen);

  return (
    <div className="resources">
      {/* Title with Dropdown Arrow only for Mobile */}
      <div
        className="resources-header"
        onClick={isMobile ? toggleLinks : undefined}
      >
        <h5>Resources</h5>
        {isMobile && (
          <span className={`arrow-icon ${isOpen ? "open" : ""}`}>
            ▼
          </span>
        )}
      </div>

      {/* DashDesign visibility condition */}
      {(!isMobile || (isMobile && isOpen)) && <DashDesign />}

      {/* Links List */}
      <ul className={`resources-list ${isOpen ? "show" : ""}`}>
        {[
          "Community",
          "Sports",
          "Video Guides",
          "Health Couch",
          "Documentation",
          "Security",
          "Template",
        ].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
