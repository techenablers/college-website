/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import NavHeaderCourse from "./NavHeaderCourse";
import "../styles/header.css";
import "../styles/NavbarCoursepage.css";

function NavbarCourseButton() {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCourse = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div
      ref={dropdownRef}
      className="position-relative course-button-container"
    >
      <button
        className="btn d-flex flex-row align-items-center px-2 py-1 course-button"
        onClick={handleCourse}
      >
        <i className="fas fa-th-large me-2" style={{ color: "#0540F2" }}></i>
        Our Courses
      </button>
      {/* Dropdown - NavHeaderCourse */}
      {showDropdown && (
        <div className="dropdown-menu-course show ">
          <NavHeaderCourse />
        </div>
      )}
    </div>
  );
}

export default NavbarCourseButton;
