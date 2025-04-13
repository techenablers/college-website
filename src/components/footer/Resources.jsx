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
        <h6>About</h6>
        {isMobile && (
          <span className={`arrow-icon ${isOpen ? "open" : ""}`}>▼</span>
        )}
      </div>

      {/* DashDesign visibility condition */}
      {(!isMobile || (isMobile && isOpen)) && <DashDesign />}

      {/* Links List */}
      <ul className={`resources-list mt-2 ${isOpen ? "show" : ""}`}>
        {[
          {
            label: "History, Vision & Mission",
            url: "/about/history-vision-mission",
          },
          { label: "Leader’s Desk", url: "/about/leaders-desk" },
          { label: "Infrastructure", url: "/about/infrastructure" },
          { label: "Careers", url: "/about/careers" },
        ].map((item, index) => (
          <li key={index} style={{ marginTop: "2px" }}>
            <a
              href={item.url}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
