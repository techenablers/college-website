  /* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseForm from "./CourseForm";

function CoursesDetails() {
  return (
    <div style={{ marginTop: "150px" }}>
      {/* Banner Section */}
      <div
        style={{
          backgroundColor: "#F7F8FD",
          width: "100%",
          height: "300px",
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ color: "#000" }}>Course Details</h4>
      </div>

      {/* Course Details Section */}
      <div className="container py-4">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            {/* Image Placeholder */}
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "#9FAAB7",
                borderRadius: "10px",
              }}
            ></div>

            {/* Course Duration - Aligned Closely */}
            <div
              className="d-flex flex-column align-items-start justify-content-center mt-3"
              style={{ gap: "0px" }} // Ensures minimal spacing
            >
              <div className="d-flex justify-content-center text-center align-item-center">
                <i
                  className="fa-regular fa-clock"
                  style={{ color: "#0D5EF4" }}
                ></i>
                <p className="m-0">Course Duration: 4 Years</p>
              </div>
              <h2>Education Software and PHP and JS System Script</h2>
            </div>
          </div>
        </div>
        <div className="card mt-5">
          <div
            style={{
              width: "20%",
              height: "60px",
              borderTop: "4px solid #0D5EF4", // Thick top border
              backgroundColor: "#F7F8FD", // Optional background for visibility
              borderRadius: "5px",
              position: "absolute", // Positioning at top-left
              top: "0",
              left: "0",
            }}
          ></div>
          <div className="card-body" style={{ paddingTop: "80px" }}>
            <div className="row">
              {/* Content Section - 70% Width */}
              <div className="col-lg-8 col-md-8 col-12">
                <div>
                  <h5>Description</h5>
                  <p>
                    Rapidiously develop parallel e-markets via worldwide
                    paradigms. Quickly synergize cutting-edge scenarios and
                    professional results. Assertively deliver cross-media
                    results before client-centric results. Uniquely initiate
                    intuitive communities through process-centric internal or
                    "organic" sources. Energistically reinvent distinctive value
                    via parallel services. Phosfluorescently deploy extensive
                    paradigms vis-a-vis cross-unit manufactured products.
                    Uniquely coordinate impactful services whereas team building
                    e-services. Globally grow multimedia based benefits
                    vis-a-vis client-based niches.
                  </p>
                  <p>
                    Professionally expedite synergistic technology without
                    out-of-the-box human capital. Enthusiastically coordinate
                    state of the art leadership after professional manufactured
                    products. Distinctively enhance future-proof e-services
                    whereas functionalized partnerships. Quickly streamline
                    focused paradigms via orthogonal `outside the box` thinking.
                    Rapidiously administrate 2.0 total linkage for
                    cross-platform channels.
                  </p>
                </div>
                <div>
                  <h5>What Will You Learn?</h5>
                  <p>
                    Quickly synergize cutting-edge scenarios and professional
                    results. Assertively deliver cross-media results before
                    client-centric results. Uniquely initiate intuitive
                    communities through process-centric internal or "organic"
                    sources. Energistically reinvent distinctive value via
                    parallel services extensive paradigms cross-unit
                    manufactured products.
                  </p>
                  <div>
                    <span className="d-block mt-2">
                      <i
                        className="fa-regular fa-clock"
                        style={{ color: "#0D5EF4" }}
                      ></i>
                      manufactured products.
                    </span>
                    <span className="d-block mt-2">
                      <i
                        className="fa-regular fa-clock"
                        style={{ color: "#0D5EF4" }}
                      ></i>
                      manufactured products.
                    </span>
                    <span className="d-block mt-2">
                      <i
                        className="fa-regular fa-clock"
                        style={{ color: "#0D5EF4" }}
                      ></i>
                      manufactured products.
                    </span>
                    <span className="d-block mt-2">
                      <i
                        className="fa-regular fa-clock"
                        style={{ color: "#0D5EF4" }}
                      ></i>
                      manufactured products.
                    </span>
                    <span className="d-block mt-2">
                      <i
                        className="fa-regular fa-clock"
                        style={{ color: "#0D5EF4" }}
                      ></i>
                      manufactured products.
                    </span>
                  </div>
                  <div className="mt-4">
                    <h5>Certification</h5>
                    <p>
                      It is designed to validate the knowledge, skills, and
                      competencies of individuals in a specific area of study or
                      professional field. The certification program is
                      meticulously designed to ensure that candidates have
                      acquired a comprehensive understanding of the subject
                      matter. It encompasses both theoretical knowledge and
                      practical application, allowing candidates to demonstrate
                      their expertise in real-world scenarios.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Section - 30% Width */}
              <div className="col-lg-4 col-md-4 col-12">
                <div>
                  <CourseForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesDetails;
