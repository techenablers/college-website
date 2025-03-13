/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import modren from "../../assets/modren.svg";
import Placement from "../../assets/placement.svg";
import Affiliations from "../../assets/Affiliations.svg";
import expor from "../../assets/expor.svg";
import educationSectionImage from "../../assets/educationSectionImage.svg";
import "./EducationSection.css";

const EducationSection = () => {


  const handlePlacementClick = () => {
 
  };

  return (
    <Container fluid className="education-section py-5">
      <Row className="justify-content-center">
        <Col lg={5} md={12} className="text-section">
          <h6 className="text-uppercase text-muted">Why Choose Us</h6>
          <h1 className="SemiBold">
            Transform Education Your Life, Change the World
          </h1>
          <Row className="features mt-4">
            <Col xs={12} sm={6} md={6} className="mb-3">
              <Card className="feature-card">
                <Card.Body>
                  <img src={Affiliations} width={45} height={45} />
                  <Card.Title className="SemiBold">
                    Accreditation & Affiliations
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} className="mb-3">
              <Card className="feature-card">
                <Card.Body>
                  <img src={modren} />
                  <Card.Title>Modern Campus & Infrastructure</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} className="mb-3">
              <Card className="feature-card">
                <Card.Body>
                  <img src={expor} />
                  <Card.Title>Expert Faculty</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} className="mb-3">
              <Card className="feature-card" onClick={handlePlacementClick}>
                <Card.Body>
                  <img src={Placement} />
                  <Card.Title>Placement Assistance</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={5} md={12} className="image-placeholder">
          <img src={educationSectionImage} />
        </Col>
      </Row>
    </Container>
  );
};

export default EducationSection;

const featuresData = [
  { img: Affiliations, title: "Accreditation & Affiliations" },
  { img: modren, title: "Modern Campus & Infrastructure" },
  { img: expor, title: "Expert Faculty" },
  { img: Placement, title: "Placement Assistance" },
];

<Container fluid className="education-section py-5">
  <Row className="justify-content-center">
    <Col lg={5} md={12} className="text-section">
      <h6 className="text-uppercase text-muted">Why Choose Us</h6>
      <h1 className="SemiBold">
        Transform Education Your Life, Change the World
      </h1>

      <Row className="features mt-4">
        {featuresData.map((feature, index) => (
          <Col key={index} xs={12} sm={6} md={6} className="mb-3">
            <Card className="feature-card">
              <Card.Body className="d-flex align-items-center">
                <img
                  src={feature.img}
                  width={45}
                  height={45}
                  className="me-3"
                />
                <Card.Title className="SemiBold">{feature.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>

    <Col lg={5} md={12} className="image-placeholder">
      <img src={educationSectionImage} />
    </Col>
  </Row>
</Container>;
