/* eslint-disable no-unused-vars */
import React from "react";
// import {
//   Navbar,
//   Nav,
//   Container,
//   Button,
//   Form,
//   InputGroup,
// } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaSkype,
  // FaSearch,
} from "react-icons/fa";
import "../styles/Header.css";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      {/* <div className="top-bar d-flex justify-content-between align-items-center px-4 py-2">
        <div className="contact-info">
          <span>256 214 203 215</span> | <span>info@edura.com</span>
        </div>
        <div className="social-icons d-flex align-items-center">
          <span className="me-2">Follow Us</span>
          <FaFacebookF /> <FaTwitter /> <FaLinkedinIn /> <FaYoutube /> <FaSkype />
        </div>
      </div>
 */}
      {/* Main Navbar */}
      {/* <Navbar expand="lg" className="main-navbar py-3">
        <Container className="d-flex align-items-center justify-content-between">
          <Navbar.Brand href="#">
            <img src={logo} alt="DR.K.S. JR COLLEGE" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav className="nav-links">
              <Nav.Link href="#">HOME</Nav.Link>
              <Nav.Link href="#">ABOUT</Nav.Link>
              <Nav.Link href="#">ADMISSIONS</Nav.Link>
              <Nav.Link href="#">STUDENT'S CORNER</Nav.Link>
              <Nav.Link href="#">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex align-items-center gap-3">
            <InputGroup className="search-bar">
              <Form.Control
                type="search"
                placeholder="Search For Our Programmes..."
                aria-label="Search"
                className="search-input"
              />
              <div className="search-icon">
                <FaSearch />
              </div>
            </InputGroup>
            <Button className="apply-now">APPLY NOW</Button>
          </div>
        </Container>
      </Navbar> */}

      <div className="top-bar d-flex  px-4 py-2">
        <div
          style={{
            width: "30%",
            height: "35px",
            backgroundColor: "#FA3A35",
            position: "absolute",
            right: "0",
            top: "0",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 35px, 40px 0)", // Clip the top-left corner only
          }}
        >
          <div className="social-icons d-flex align-items-end justify-content-center" style={{padding: "5px"}}>
            <span className="me-2"><b>Follow Us</b></span>
            <FaFacebookF /> <FaTwitter /> <FaLinkedinIn /> <FaYoutube />{" "}
            <FaSkype />
          </div>
        </div>
        <div
          className=""
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
          {/* <Navbar expand="lg" className=" py-3">
            <Container className="d-flex align-items-center justify-content-between"></Container>
          </Navbar> */}

          <nav className="navbar" style={{ position: "relative", top: "5px" }}>
            <div className="container d-flex justify-content-between">
              <a className="navbar-brand" href="#" style={{ marginRight: "100px" }}>
                <img src={logo} alt="DR.K.S. JR COLLEGE" className="logo" />
              </a>

              <div className="navbar-nav d-flex flex-row">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Features
                </a>
                <a className="nav-link" href="#">
                  Pricing
                </a>
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                ></input>
                <button className="apply-now" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
