import React from "react";
import { Navbar, Nav, Container, Button, Form, InputGroup } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaSkype, FaSearch } from "react-icons/fa";
import "../styles/Header.css";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar d-flex justify-content-between align-items-center px-4 py-2">
        <div className="contact-info">
          <span>256 214 203 215</span> | <span>info@edura.com</span>
        </div>
        <div className="social-icons d-flex align-items-center">
          <span className="me-2">Follow Us</span>
          <FaFacebookF /> <FaTwitter /> <FaLinkedinIn /> <FaYoutube /> <FaSkype />
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" className="main-navbar py-3">
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
            {/* Search Bar with Icon Inside */}
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
      </Navbar>
    </>
  );
};

export default Header;
