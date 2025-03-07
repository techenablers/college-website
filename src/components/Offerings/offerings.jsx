/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/TestominalCard.css";

function TestimonialCard() {
  const testimonialInformation = [
    {
      name: "Pramod Barke",
      content:
        "Excellent classes, teachers are very sincere and friendly and give attention to every student.",
    },
    {
      name: "Wade Warren",
      content: "All teachers are enthusiastic and ready to help.",
    },
    {
      name: "Shubham Pathare",
      content:
        "My sincere appreciation and gratitude to my teachers for their efforts in imparting quality education.",
    },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {testimonialInformation.map((val, index) => (
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
            <div className="card-body d-flex flex-column justify-content-between">
              <div className="d-flex flex-column justify-content-start align-items-start mb-3">
                <h6 style={{ fontWeight: "600", fontSize: "16px" }}>
                  {val.name}
                </h6>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    // marginBottom: "15px",
                    marginTop: "25px",
                    textAlign: "start",
                  }}
                >
                  {val.content}
                </p>
              </div>

              <div className="">
                <span className="text-start d-block">
                  {" "}
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-secondary"></i>{" "}
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
