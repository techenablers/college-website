import React from "react";
import { Navbar, Nav, Container, Button, Form, InputGroup } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaSkype, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar d-flex justify-content-between align-items-center px-4 py-2">
        <div className="contact-info text-white">
          256 214 203 215 | <a href="mailto:info@edura.com" className="text-white">info@edura.com</a>
        </div>
        <div className="social-icons">
          <span className="text-white me-2 d-none d-md-inline">Follow Us:</span>
          <FaFacebookF className="icon" />
          <FaTwitter className="icon" />
          <FaLinkedinIn className="icon" />
          <FaYoutube className="icon" />
          <FaSkype className="icon" />
        </div>
      </div>

      {/* Navbar */}
      <Navbar expand="lg" className="navbar-container">
        <Container>
          <Navbar.Brand href="#">
            <img src="../assets/react.svg" alt="DRKS JR COLLEGE" className="logo-img" />
          </Navbar.Brand>
          <Button className="courses-btn d-none d-md-inline">Our Courses</Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">HOME</Nav.Link>
              <Nav.Link href="#">ABOUT</Nav.Link>
              <Nav.Link href="#">ADMISSIONS</Nav.Link>
              <Nav.Link href="#">STUDENT'S CORNER</Nav.Link>
              <Nav.Link href="#">CONTACT</Nav.Link>
            </Nav>
            <Form className="search-form d-none d-lg-flex">
              <InputGroup>
                <Form.Control type="text" placeholder="Search For Our Programmes..." />
                <Button variant="outline-secondary"><FaSearch /></Button>
              </InputGroup>
            </Form>
            <Button className="apply-btn">APPLY NOW</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
