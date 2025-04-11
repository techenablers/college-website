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
                    <p className="mx-2 mb-0">
                      Course Duration: {selectedCourse.header?.years || "N/A"}{" "}
                      Year
                    </p>
                  </div>
                  <h2>
                    {selectedCourse.header?.heading || "No Heading Provided"}
                  </h2>
                </div>
              </div>
            </div>

            <div className="card mt-5" style={{borderColor: "white"}}>
              <div
                className="card-header"
                style={{
                  width: "20%",
                  height: "60px",
                  borderTop: "4px solid #0D5EF4",
                  backgroundColor: "#F7F8FD",
                  borderRadius: "5px",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.4364 0.902368C12.9246 0.926779 13.3396 1.09766 13.6814 1.41502C13.9987 1.75678 14.1696 2.17178 14.194 2.66002V18.4789C14.1696 18.9427 13.9743 19.2723 13.6082 19.4676C13.242 19.6873 12.8514 19.6995 12.4364 19.5042L7.16342 16.4283L1.89047 19.5042C1.47546 19.6995 1.08487 19.6995 0.718697 19.5042C0.352519 19.2845 0.157224 18.9427 0.132812 18.4789V2.66002C0.157224 2.17178 0.328107 1.75678 0.645461 1.41502C0.987227 1.09766 1.40223 0.926779 1.89047 0.902368H12.4364ZM12.4364 17.4536V2.87973C12.4364 2.73326 12.3509 2.66002 12.1801 2.66002H2.07355C1.97591 2.66002 1.91488 2.73326 1.89047 2.87973V17.4536L7.16342 14.3777L12.4364 17.4536Z" fill="#0D5EF4" />
                </svg>
                <p className="overview-text m-0">OVERVIEW</p>
              </div>

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
                          <span key={index} className="d-flex mt-2 justify-content-start gap-2 flex-row align-items-start">
                            <div>
                              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.566406 11.4382C0.594306 9.42941 1.08254 7.62991 2.03112 6.03965C2.97969 4.4215 4.26306 3.13813 5.88121 2.18956C7.47147 1.24098 9.27097 0.752744 11.2797 0.724845C13.2885 0.752744 15.088 1.24098 16.6782 2.18956C18.2964 3.13813 19.5797 4.4215 20.5283 6.03965C21.4769 7.62991 21.9651 9.42941 21.993 11.4382C21.9651 13.4469 21.4769 15.2464 20.5283 16.8367C19.5797 18.4548 18.2964 19.7382 16.6782 20.6868C15.088 21.6353 13.2885 22.1236 11.2797 22.1515C9.27097 22.1236 7.47147 21.6353 5.88121 20.6868C4.26306 19.7382 2.97969 18.4548 2.03112 16.8367C1.08254 15.2464 0.594306 13.4469 0.566406 11.4382ZM16.1342 9.59681C16.3574 9.34571 16.469 9.06672 16.469 8.75983C16.469 8.45294 16.3574 8.17395 16.1342 7.92285C15.8831 7.69966 15.6041 7.58806 15.2972 7.58806C14.9903 7.58806 14.7113 7.69966 14.4602 7.92285L9.94056 12.4425L8.09921 10.6012C7.84811 10.378 7.56912 10.2664 7.26223 10.2664C6.95534 10.2664 6.67634 10.378 6.42525 10.6012C6.20206 10.8523 6.09046 11.1313 6.09046 11.4382C6.09046 11.7451 6.20206 12.024 6.42525 12.2751L9.10358 14.9535C9.35467 15.1767 9.63366 15.2883 9.94056 15.2883C10.2474 15.2883 10.5264 15.1767 10.7775 14.9535L16.1342 9.59681Z" fill="#0D5EF4"/>
                              </svg>
                            </div>
                            {point}
                          </span>
                        )
                      )}
                    </div>

                    <div className="my-4">
                      <h5>Subjects Offered</h5>
                      <p style={{color: "#4D5765"}}>{selectedCourse.subjectOffered || "Not specified"}</p>
                      <button type="submit" className="btn btn-primary">
                        Apply Now
                      </button>
                    </div>

                    <div>
                      <h4>Career Prospects</h4>
                      <p style={{color: "#4D5765"}}>
                        {selectedCourse.Career?.description ||
                          "Details not provided"}
                      </p>
                      {Object.values(selectedCourse.Career?.learnt || {}).map(
                        (point, index) => (
                          <span key={index} className="d-flex mt-2 justify-content-start gap-2 flex-row align-items-start">
                            <div>
                              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.566406 11.4382C0.594306 9.42941 1.08254 7.62991 2.03112 6.03965C2.97969 4.4215 4.26306 3.13813 5.88121 2.18956C7.47147 1.24098 9.27097 0.752744 11.2797 0.724845C13.2885 0.752744 15.088 1.24098 16.6782 2.18956C18.2964 3.13813 19.5797 4.4215 20.5283 6.03965C21.4769 7.62991 21.9651 9.42941 21.993 11.4382C21.9651 13.4469 21.4769 15.2464 20.5283 16.8367C19.5797 18.4548 18.2964 19.7382 16.6782 20.6868C15.088 21.6353 13.2885 22.1236 11.2797 22.1515C9.27097 22.1236 7.47147 21.6353 5.88121 20.6868C4.26306 19.7382 2.97969 18.4548 2.03112 16.8367C1.08254 15.2464 0.594306 13.4469 0.566406 11.4382ZM16.1342 9.59681C16.3574 9.34571 16.469 9.06672 16.469 8.75983C16.469 8.45294 16.3574 8.17395 16.1342 7.92285C15.8831 7.69966 15.6041 7.58806 15.2972 7.58806C14.9903 7.58806 14.7113 7.69966 14.4602 7.92285L9.94056 12.4425L8.09921 10.6012C7.84811 10.378 7.56912 10.2664 7.26223 10.2664C6.95534 10.2664 6.67634 10.378 6.42525 10.6012C6.20206 10.8523 6.09046 11.1313 6.09046 11.4382C6.09046 11.7451 6.20206 12.024 6.42525 12.2751L9.10358 14.9535C9.35467 15.1767 9.63366 15.2883 9.94056 15.2883C10.2474 15.2883 10.5264 15.1767 10.7775 14.9535L16.1342 9.59681Z" fill="#0D5EF4"/>
                              </svg>
                            </div>
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
