/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import DashDesign from "./DashDesign";
import "../../styles/QuickLinkFooter.css";

function QuickLink() {
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
    <div className="quick-link">
      {/* Title with Dropdown Arrow only for Mobile */}
      <div
        className="quick-link-header"
        onClick={isMobile ? toggleLinks : undefined}
      >
        <h6>Quick Link</h6>
        {isMobile && (
          <span
            className={`arrow-icon ${isOpen ? "open" : ""}`}
          >
            ▼
          </span>
        )}
      </div>

      {/* DashDesign visibility condition */}
      {(!isMobile || (isMobile && isOpen)) && <DashDesign />}

      {/* Links List */}
      <ul className={`quick-link-list mt-2 ${isOpen ? "show" : ""}`}>
        {[
          "Junior College XI & XII Arts Stream",
          "Junior College XI & XII Commerce Stream",
          "BA (Bachelor of Arts)",
          "BCom (Bachelor of Commerce)",
          "BSc Data Science",
          "BSc IT (Information Technology)",
        ].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuickLink;
