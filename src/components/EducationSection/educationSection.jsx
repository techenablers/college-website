/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import modren from "../../assets/modren.svg";
import Placement from "../../assets/placement.svg";
import expor from "../../assets/expor.svg";
import "./EducationSection.css";

const EducationSection = () => {
  return (
    <Container fluid className="education-section py-5">
      <Row className="justify-content-center">
        <Col lg={5} md={6} className="text-section">
          <h6 className="text-uppercase text-muted">Why Choose Us</h6>
          <h1 className="SemiBold">
            Transform Education Your Life, Change the World
          </h1>
          <Row className="features mt-4">
            <Col xs={6} className="mb-3">
              <Card className="feature-card">
                <Card.Body>
                  <img src={Placement} />
                  <Card.Title className="SemiBold">
                    Accreditation & Affiliations
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} className="mb-3">
              <Card className="feature-card">
                <Card.Body>
                  <img src={modren} />
                  <Card.Title>Modern Campus & Infrastructure</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} className="mb-3">
              <Card className="feature-card">
                <Card.Body>
                  {/* <i className="icon">👨‍🏫</i> */}
                  <img src={expor} />
                  <Card.Title>Expert Faculty</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} className="mb-3">
              <Card className="feature-card">
                <Card.Body>
                  <img src={Placement} />
                  <Card.Title>Placement Assistance</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={5} md={6} className="image-placeholder">
          <div className="dark-box"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default EducationSection;
