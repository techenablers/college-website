/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/TestominalCard.css";

function TestimonialCard({ testimonials }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {testimonials.map((val, index) => (
        <div
          className="testimonial-card"
          key={index}
          style={{
            margin: "20px",
            width: "300px", // Fixed width for the card
            flex: "1 1 300px", // Ensures the cards can wrap if needed
          }}
        >
          <div
            className="card"
            style={{
              height: "250px", // Auto height based on content
              borderRadius: "25px",
              border: "none",
              padding: "10px 20px", // Increased padding for better spacing
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Added shadow for a better look
              marginBottom: "20px", // Space between cards
              width: "300px",
            }}
          >
            <div className="card-body d-flex flex-column">
              <div className="d-flex flex-column justify-content-start align-items-start  mb-3">
                <h6 style={{ fontWeight: "600", fontSize: "16px" }}>
                  {val.name}
                </h6>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    marginTop: "25px",
                    textAlign: "start",
                  }}
                >
                  {val.content}
                </p>
              </div>

              <div className="mt-auto">
                <span className="text-start d-block">
                  <i className="fa fa-star text-warning me-1"></i>
                  <i className="fa fa-star text-warning me-1"></i>
                  <i className="fa fa-star text-warning me-1"></i>
                  <i className="fa fa-star text-warning me-1"></i>
                  <i className="fa fa-star text-warning me-1"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialCard;
