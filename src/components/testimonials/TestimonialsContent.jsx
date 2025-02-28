// import React from "react";
import TestimonialCard from "./TestimonialCard";

function TestimonialsContent() {
  return (
    <div>
      <p
        className="d-inline-block"
        style={{
          height: "26px",
          backgroundColor: "#E6E6E6",
          borderRadius: "10px",
          padding: "0 15px",
          lineHeight: "26px",
          marginTop: "20px", // Added margin for better spacing
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

      <h5> What Our Student Say</h5>

      <TestimonialCard />
      <span className="d-flex justify-content-center pb-4">
        <buttons
          style={{
            backgroundColor: "#0540F2",
            color: "white",
            padding: "12px 20px",
            display: "inlineFlex",
            cursor: "pointer",
            border: "none",
            borderRadius: "15px",
            position: "relative",
            right: "5px",
          }}
        >
          <i className="fa fa-angle-left" style={{ fontSize: "30PX" }}></i>
        </buttons>
        <buttons
          style={{
            backgroundColor: "#0540F2",
            color: "white",
            padding: "12px 20px",
            border: "none",
            cursor: "pointer",
            borderRadius: "15px",
          }}
        >
          <i className="fa fa-angle-right" style={{ fontSize: "30PX" }}></i>
        </buttons>
      </span>
    </div>
  );
}

export default TestimonialsContent;
