/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseForm from "../components/CourseForm";
import "../styles/CustomCourseCard.css";
import CustomePageHeader from "./CustomePageHeader";

function CustomCourseDetails({ years, courseHeading }) {
  return (
    <div style={{ marginTop: "150px" }}>
      <CustomePageHeader header="Course Details " />
      {/* BannerSection */}
      <div className="container py-4">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            {/* Image Placeholder,  image should come here */}
            <div className="course-banner"></div>
            <div className="d-flex flex-column align-items-start justify-content-center mt-3">
              <div className="d-flex justify-content-center align-item-center mb-3">
                <i
                  className="fa-regular fa-clock"
                  style={{ color: "#0D5EF4" }}
                ></i>
                <p className="m-0">Course Duration: {years} Years</p>
              </div>
              <h2>{courseHeading}</h2>
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
          {/* content */}
          <div className="card-body" style={{ paddingTop: "80px" }}>
            <div className="row">
              {/* Content Section - 70% Width */}
              <div className="col-lg-8 col-md-8 col-12">
                <div>
                  <h5>Description</h5>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
                <div>
                  <h4>What Will You Learn?</h4>
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

export default CustomCourseDetails;
