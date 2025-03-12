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
      <div className="top-bar d-flex px-4 py-2 justify-content-between">
        <div
          className="social-bar"
          style={{
            width: "30%",
            height: "35px",
            backgroundColor: "#FA3A35",
            position: "absolute",
            right: "0",
            top: "0",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 35px, 40px 0)",
          }}
        >
          <div
            className="social-icons d-flex align-items-end justify-content-center"
            style={{ padding: "5px" }}
          >
            <span className="me-2">
              <b>Follow Us</b>
            </span>
            <FaFacebookF /> <FaTwitter /> <FaLinkedinIn /> <FaYoutube />{" "}
            <FaSkype />
          </div>
        </div>

        <div
          className="navbar-container"
          style={{
            width: "90%",
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
              {/* our course */}
              {/* <button
                  style={{
                    backgroundColor: "#fff",
                    color: "black",
                    padding: "10px 20px",
                    border: "1px solid black",
                    cursor: "pointer",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px", 
                  }}
                >
                  <i className="fa fa-th-large" style={{ fontSize: "16px" }}></i>
                  Our Courses
                </button> */}
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
                    <a className="nav-link disabled" aria-disabled="true">
                      Student&apos;s Corner
                    </a>
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
