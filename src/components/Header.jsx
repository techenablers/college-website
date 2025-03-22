/* eslint-disable no-unused-vars */
import React from "react";
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

const Header = () => {
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
            WebkitMask: "radial-gradient(circle at 0 65%, transparent 35px, #000 36px)",
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
            width: "100%",
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
                  style={{ marginLeft: "60px", marginRight: "10px" }}
                >
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Admission
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/Student's-Corner" className="nav-link">
                      Student&apos;s Corner
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Search for Our Programmes..."
                    aria-label="Search"
                    style={{ width: "250px" }}
                  />
                  <button
                    className="btn btn-outline-primary"
                    type="submit"
                    style={{ width: "150px" }}
                  >
                    Apply Now
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
