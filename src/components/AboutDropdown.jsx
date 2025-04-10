import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function AboutDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent navigation
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li className="nav-item dropdown position-relative" ref={dropdownRef}>
      <div className="d-flex align-items-center flex-row">
        {/* Link text navigates normally */}
        <Link to="/about" className="nav-link">
          About
        </Link>

        <i
          className="fa fa-angle-down"
          role="button"
          tabIndex="0"
          aria-hidden="true"
          onClick={toggleDropdown}
          style={{ color: "#000" }}
        ></i>
      </div>

      {/* Dropdown menu */}
      {showDropdown && (
        <ul
          className="dropdown-menu show"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 999,
          }}
        >
          <li>
            <Link to="/about/history-vision-mission" className="dropdown-item">
              History, Vision & Mission
            </Link>
          </li>
          <li>
            <Link to="/about/leaders-desk" className="dropdown-item">
              Leader’s Desk
            </Link>
          </li>
          <li>
            <Link to="/about/infrastructure" className="dropdown-item">
              Infrastructure
            </Link>
          </li>
          <li>
            <Link to="/about/careers" className="dropdown-item">
              Careers
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
}

export default AboutDropdown;

/* .dropdown-toggle::after {
  margin-left: 0.25rem;
} */
