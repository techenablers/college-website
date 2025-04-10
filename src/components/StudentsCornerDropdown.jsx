import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function StudentsCornerDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent navigation when clicking the arrow
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
        {/* Normal nav link */}
        <Link to="" className="nav-link">
        Student&apos;s Corner
        </Link>

        {/* Dropdown toggle icon (arrow) */}
        
        <i
          className="fa fa-angle-down"
          role="button"
          tabIndex="0"
          aria-hidden="true"
          onClick={toggleDropdown}
          style={{ color: "#000" }}
        ></i>
      </div>

      {/* Dropdown items */}
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
            <Link to="/Student's-Corner/welfare" className="dropdown-item">
              Student Welfare
            </Link>
          </li>
          <li>
            <Link to="/Student's-Corner/events" className="dropdown-item">
              Events
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
}

export default StudentsCornerDropdown;
