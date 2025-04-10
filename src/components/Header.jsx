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
import AboutDropdown from "./AboutDropdown";
import StudentsCornerDropdown from "./StudentsCornerDropdown";
import SearchForm from "./SearchForm.jsx";
import "../styles/Header.css";
import NavbarCourseButton from "./NavbarCourseButton.jsx";

const Header = () => {
  return (
    <>
      <div className="top-bar d-flex justify-content-between">
        <div className="social-bar">
          <div className="social-icons d-flex flex-row text-center justify-content-center">
            <strong>Follow Us</strong>
            <FaFacebookF /> <FaTwitter /> <FaLinkedinIn /> <FaYoutube />
            <FaSkype />
          </div>
        </div>
        <div className="navbar-container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand ms-3" href="#">
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
                <ul className="navbar-nav d-flex flex-row">
                  <NavbarCourseButton />
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
                    <StudentsCornerDropdown />
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
                <SearchForm />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Header;
