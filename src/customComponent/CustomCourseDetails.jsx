/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseForm from "../components/CourseForm";
import "../styles/CustomCourseCard.css";
import CustomePageHeader from "./CustomePageHeader";

function CustomCourseDetails({ selectedCourse }) {
  console.log(selectedCourse.myIcon);

  return (
    <div style={{ marginTop: "150px" }}>
      <CustomePageHeader header="Course Details" />

      <div className="container py-4">
        {selectedCourse && (
          <>
            <div className="card shadow-sm mb-5">
              <div className="card-body text-center">
                <div>
                  <img
                    src={Object.values(selectedCourse.imgbanner || {})[0]}
                    alt="Course Icon"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="d-flex flex-column align-items-start justify-content-center mt-3">
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <i
                      className="fa-regular fa-clock"
                      style={{ color: "#0D5EF4" }}
                    ></i>
                    <p className="m-0">
                      Course Duration: {selectedCourse.header?.years || "N/A"}{" "}
                      Years
                    </p>
                  </div>
                  <h2>
                    {selectedCourse.header?.heading || "No Heading Provided"}
                  </h2>
                </div>
              </div>
            </div>

            <div className="card mt-5">
              <div
                style={{
                  width: "20%",
                  height: "60px",
                  borderTop: "4px solid #0D5EF4",
                  backgroundColor: "#F7F8FD",
                  borderRadius: "5px",
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
              ></div>

              <div className="card-body" style={{ paddingTop: "80px" }}>
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-12">
                    <div>
                      <h5>Description</h5>
                      <p>{selectedCourse.description?.description1 || ""}</p>
                      <p>{selectedCourse.description?.description2 || ""}</p>
                      <p>{selectedCourse.description?.description3 || ""}</p>
                    </div>

                    <div>
                      <h4>What Will You Learn?</h4>
                      {Object.values(selectedCourse.learnt || {}).map(
                        (point, index) => (
                          <span key={index} className="d-block mt-2">
                            <i
                              className="fa-regular fa-clock"
                              style={{ color: "#0D5EF4" }}
                            ></i>
                            {point}
                          </span>
                        )
                      )}
                    </div>

                    <div className="mt-4">
                      <h5>Subjects Offered</h5>
                      <p>{selectedCourse.subjectOffered || "Not specified"}</p>
                      <button type="submit" className="btn btn-primary">
                        Download Now
                      </button>
                    </div>

                    <div>
                      <h4>Career Prospects</h4>
                      <p>
                        {selectedCourse.Career?.description ||
                          "Details not provided"}
                      </p>
                      {Object.values(selectedCourse.Career?.learnt || {}).map(
                        (point, index) => (
                          <span key={index} className="d-block mt-2">
                            <i
                              className="fa-regular fa-clock"
                              style={{ color: "#0D5EF4" }}
                            ></i>
                            {point}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-12">
                    <CourseForm />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CustomCourseDetails;
