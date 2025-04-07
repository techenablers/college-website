/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaSkype,
} from "react-icons/fa";
import "../styles/Header.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import NavHeaderCourse from "./NavHeaderCourse";
import AboutDropdown from "./AboutDropdown";
import StudentsCornerDropdown from "./StudentsCornerDropdown";
import SearchForm from "./SearchForm.jsx";
import "../styles/Header.css"

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleCourse = () => {
    setShowDropdown((prev) => !prev);
  };

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

  return (
    <>
      <div className="top-bar d-flex justify-content-between">
        <div
          className="social-bar"
          style={{
            width: "25%",
            height: "35px",
            backgroundColor: "#FA3A35",
            position: "absolute",
            right: "0",
            top: "0",
            mask: "radial-gradient(circle at 0 65%, transparent 35px, #000 36px)",
            WebkitMask:
              "radial-gradient(circle at 0 65%, transparent 35px, #000 36px)",
          }}
        >
          <div
            className="social-icons d-flex flex-row text-center justify-content-center"
            style={{ padding: "5px" }}
          >
            <strong>Follow Us</strong>
            <FaFacebookF /> <FaTwitter /> <FaLinkedinIn /> <FaYoutube />{" "}
            <FaSkype />
          </div>
        </div>

        <div
          className="navbar-container-fluid"
          style={{
            width: "94%",
            height: "65px",
            backgroundColor: "#ffffff",
            position: "absolute",
            right: "0",
            bottom: "0",
            borderTopLeftRadius: "60px",
          }}
        >
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ position: "relative", top: "5px" }}
          >
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="DR.K.S. JR COLLEGE" className="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul
                  className="navbar-nav d-flex flex-row"
                  style={{ marginLeft: "40px", marginRight: "10px" }}
                >
                  <div ref={dropdownRef} className="position-relative">
                    <button
                      className="btn d-flex align-items-center px-3 py-2"
                      style={{
                        border: "1px solid #000",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                        backgroundColor: "transparent",
                        color: "#000",
                      }}
                      onClick={handleCourse}
                    >
                      <i
                        className="fa fa-th-large"
                        aria-hidden="true"
                        style={{ marginRight: "10px" }}
                      ></i>
                      Course
                    </button>
                    {/* Dropdown - NavHeaderCourse */}
                    {showDropdown && (
                      <div
                        className="dropdown-menu show p-3"
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: "0",
                          backgroundColor: "#fff",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
                          zIndex: 1000,
                          width: "100%", // Takes full width of the parent container
                          minWidth: "750px", // Prevents it from being too narrow
                          maxWidth: "800px", // Ensures it doesn't get too wide
                        }}
                      >
                        <NavHeaderCourse />
                      </div>
                    )}
                  </div>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                   <AboutDropdown />
                  </li>

                  <li className="nav-item">
                    <Link to="/career" className="nav-link">
                      Admission
                    </Link>
                  </li>
                  <li className="nav-item">
                  <StudentsCornerDropdown />
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
               <SearchForm/>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
