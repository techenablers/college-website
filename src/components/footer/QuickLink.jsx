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
          <span className={`arrow-icon ${isOpen ? "open" : ""}`}>▼</span>
        )}
      </div>

      {/* DashDesign visibility condition */}
      {(!isMobile || (isMobile && isOpen)) && <DashDesign />}

      {/* Links List */}
      <ul className={`quick-link-list mt-2 ${isOpen ? "show" : ""}`}>
        {[
          { label: "Junior College XI & XII Arts Stream", url: "/course-details/1" },
          {
            label: "Junior College XI & XII Commerce Stream",
            url: "/course-details/2",  
          },
          { label: "BA (Bachelor of Arts)", url: "/course-details/3" },
          { label: "BCom (Bachelor of Commerce)", url: "course-details/4" },
          { label: "BSc Data Science", url: "/course-details/5" },
          { label: "BSc IT (Information Technology)", url: "/course-details/6" },
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

export default QuickLink;
