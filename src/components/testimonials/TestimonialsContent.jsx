/* eslint-disable no-unused-vars */
import React from "react";
import TestimonialCard from "./TestimonialCard";

function TestimonialsContent() {
  return (
    <div className="container">
      <p
        className="d-inline-block"
        style={{
          height: "26px",
          backgroundColor: "#E6E6E6",
          borderRadius: "10px",
          padding: "0 15px",
          lineHeight: "26px",
          marginTop: "20px",
        }}
      >
        <span style={{ marginRight: "8px" }}>
          <i
            className="fa fa-book"
            aria-hidden="true"
            style={{ fontSize: "16px" }}
          ></i>{" "}
          Testimonials
        </span>
      </p>

      <h5>What Our Students Say</h5>

      <TestimonialCard />
      
      <div className="d-flex justify-content-center pb-4" style={{ gap: "15px" }}>
        <button
          style={{
            backgroundColor: "#0540F2",
            color: "white",
            padding: "10px 15px",
            display: "inline-flex",
            cursor: "pointer",
            border: "none",
            borderRadius: "15px",
            position: "relative",
            right: "5px",
          }}
        >
          <i className="fa fa-angle-left" style={{ fontSize: "30px" }}></i>
        </button>
        <button
          style={{
            backgroundColor: "#0540F2",
            color: "white",
            padding: "10px 15px",
            border: "none",
            cursor: "pointer",
            borderRadius: "15px",
          }}
        >
          <i className="fa fa-angle-right" style={{ fontSize: "30px" }}></i>
        </button>
      </div>
    </div>
  );
}

export default TestimonialsContent;
