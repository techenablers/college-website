// import React from "react";
import student from "../../../src/assets/Ellipse 1202.svg"; // Assuming you have a path to this image

function TestimonialCard() {
  const testimonialInformation = [
    {
      profile: student, // Direct reference to the profile image
      name: "Ronald Richards",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      profile: student, // Direct reference to the profile image
      name: "Wade Warren",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      profile: student, // Direct reference to the profile image
      name: "Jacob Jones",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center">
      {testimonialInformation.map((val, index) => (
        <div style={{margin:'20px'}} key={index}> 
          <div
            key={index}
            className="card"
            style={{
              width: "350px ", // Fixed width for the card
              height: "250px", // Auto height based on content
              borderRadius: "25px",
              border: "none",
              padding: "10px 20px", // Increased padding for better spacing
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Added shadow for a better look
              marginBottom: "20px", // Space between cards
            }}
          >
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                {" "}
                {/* Added margin to space out the name and image */}
                <img
                  src={val.profile}
                  alt="Profile Icon"
                  width={50} // Increased image size
                  height={50} // Increased image size
                  style={{ borderRadius: "50%", marginRight: "15px" }} // Make image circular
                />
                <h6 style={{ fontWeight: "600", fontSize: "16px" }}>
                  {val.name}
                </h6>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  marginBottom: "15px",
                }}
              >
                {val.content}
              </p>

              <div className="d-flex justify-content-between">
                <span>ratiing comes here</span>
                <p style={{ fontSize: "12px", color: "#888" }}>
                  06 August 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialCard;
