/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentWelfare = () => {
  return (
    <div
      style={{
        backgroundColor: "#F7F8FD",
        marginTop: "100px",
      }}
      className="container-fluid p-0"
    >
      {/* Header Section */}
      <header
        className="text-center py-5"
        style={{ backgroundColor: "#F0F0F5" }}
      >
        
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Student Welfare
        </h1>

        {/* Breadcrumb */}
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Home &gt; Student Welfare
        </p>
      </header>

      {/* Education System Section */}
      <section className="d-flex align-items-center p-5">
        <div className="container my-5">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="src/assets/StudentWelfare_BuildingImage.svg"
                alt="College Building"
                className="img-fluid rounded shadow"
              />
            </div>
            {/* Text Section */}
            <div className="col-md-6 px-3 px-md-4">
              <h2 className="fw-bold">
                Our Education System{" "}
                <span className="text-primary">Inspires</span> You More.
              </h2>
              <p>
                At [College Name], student welfare is at the heart of our
                institution. We are committed to fostering an environment where
                students feel safe, supported, and empowered to reach their full
                potential.
              </p>
              <p>
                Our welfare initiatives focus on academic guidance, mental
                well-being, anti-ragging policies, and gender-sensitive campus
                initiatives. We believe that a positive and secure campus
                experience plays a crucial role in shaping future leaders.
              </p>
              <h5 className="mt-3">Ensuring a Safe, Respectful Campus</h5>
              <p>
                We uphold a culture of discipline and respect by implementing
                strict policies against ragging, discrimination, and harassment.
                Our student welfare programs aim to create a nurturing
                environment where every student feels valued and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Ragging Section */}
      <section
        style={{ backgroundColor: "#F2F2F2" }}
        className="text-center py-5"
      >
        <div className="container my-5 text-center">
          {/* Section Header */}
          <div className="mb-4">
            <span className="badge bg-light text-dark fw-semibold py-2 px-3 shadow-sm">
              📄 ANTI-RAGGING
            </span>
            <h2 className="fw-bold mt-3">Anti-Ragging Measures</h2>
            <p className="text-muted">
              We have a zero-tolerance policy against ragging and bullying.
              Strict disciplinary actions are taken against any form of
              misconduct to maintain a harmonious campus.
            </p>
          </div>

          {/* Three-Column Card Layout */}
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div
                className="p-4 text-white rounded-3"
                style={{ backgroundColor: "#0540F2" }}
              >
                <h4 className="fw-bold">01</h4>
                <h5 className="fw-bold">Zero-Tolerance Policy</h5>
                <p>
                  A safe and secure learning space where harassment and
                  intimidation are strictly prohibited.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div
                className="p-4 rounded-3"
                style={{ backgroundColor: "#E5E5E5" }}
              >
                <h4 className="fw-bold text-dark">02</h4>
                <h5 className="fw-bold text-dark">Anti-Ragging Committee</h5>
                <p className="text-dark">
                  A dedicated committee actively monitors, investigates, and
                  takes prompt action against ragging cases.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div
                className="p-4 text-white rounded-3"
                style={{ backgroundColor: "#0540F2" }}
              >
                <h4 className="fw-bold">03</h4>
                <h5 className="fw-bold">Awareness Sessions</h5>
                <p>
                  Regular awareness programs educate students on the harmful
                  impact of ragging and the importance of mutual respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education System Section 2*/}
      <section className="d-flex align-items-center p-5">
        <div className="container my-5">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-6 px-3 px-md-4">
              <h2 className="fw-bold">
                <span style={{ color: "#1138F7" }}>POSH</span> (Prevention of
                Sexual Harassment) Guidelines
              </h2>
              <p>
                We are dedicated to fostering a gender-sensitive and
                harassment-free environment. The Internal Complaints Committee
                (ICC) at [College Name] ensures that every student and faculty
                member has a safe and inclusive space for learning and working.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center">
                  <span
                    style={{
                      color: "#0540F2",
                      fontSize: "1.5rem",
                      marginRight: "8px",
                    }}
                  >
                    ✔
                  </span>
                  Strict Anti-Harassment Policy to prevent and address all forms
                  of sexual misconduct.
                </li>
                <li className="d-flex align-items-center">
                  <span
                    style={{
                      color: "#0540F2",
                      fontSize: "1.5rem",
                      marginRight: "8px",
                    }}
                  >
                    ✔
                  </span>
                  Confidential Reporting System where students can safely raise
                  concerns.
                </li>
                <li className="d-flex align-items-center">
                  <span
                    style={{
                      color: "#0540F2",
                      fontSize: "1.5rem",
                      marginRight: "8px",
                    }}
                  >
                    ✔
                  </span>
                  Workshops & Sensitization Programs to educate students and
                  staff about gender equality and rights.
                </li>
              </ul>
              <a href="#" className="text-primary fw-bold">
                Click here to view POSH Guidelines
              </a>
            </div>
            {/* Image Section */}
            <div className="col-md-6 mb-4 mt-4 mb-md-0">
              <img
                src="src/assets/StudentWelfare_BuildingImage.svg"
                alt="College Building"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* General Guidelines Section */}
      <section
        className="d-flex align-items-center p-5"
        style={{ backgroundColor: "#033F73" }}
      >
        <div className="container my-5">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-6 text-white px-3 px-md-4">
              <h2 className="fw-bold">
                <span className="text-white">General </span>
                <span style={{ color: "#D4AF37" }}>Guidelines</span>
              </h2>
              <p>
                Our Student Welfare department provides continuous support to
                students in various aspects, including mental well-being, career
                guidance, and personal development. Our welfare policies aim to
                create a healthy, respectful, and inclusive campus environment.
              </p>
              <p>
                For any queries or assistance, please contact our Student
                Welfare Office.
              </p>
              {/* Contact Information */}
              <div className="d-flex align-items-center mt-3">
                <img
                  src="src/assets/email-icon.svg"
                  alt="Email"
                  className="me-2"
                  width="24"
                />
                <span className="fw-bold">info@rkscollegekharadi.com</span>
              </div>
              <div className="d-flex align-items-center mt-2">
                <img
                  src="src/assets/phone-icon.svg"
                  alt="Phone"
                  className="me-2"
                  width="24"
                />
                <span className="fw-bold">Call us: +91 99758 81150</span>
              </div>
            </div>
            {/* Image Section */}
            <div className="col-md-6 pt-4">
              <img
                src="src/assets/StudentWelfare_StudentSitting.svg"
                alt="Students Sitting"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentWelfare;
