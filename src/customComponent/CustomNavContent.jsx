/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomNavContent() {
  const cardDetails = [
    {
      button1: "Pune/Chennai",
      button2: "Full-time",
      button3: "1-2 Years of Experience",
      content1:
        "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
    },
    {
      button1: "Remote",
      button2: "Part-time",
      button3: "3+ Years of Experience",
      content1:
        "We are expanding our remote team and seeking skilled developers with strong problem-solving abilities and excellent communication skills.",
    },
    {
      button1: "Bangalore",
      button2: "Contract",
      button3: "5+ Years of Experience",
      content1:
        "We are seeking senior developers with extensive experience in Full-Stack development to work with our growing Bangalore team.",
    },
  ];

  return (
    <div className="container-fluid mt-5">
      <div className="d-flex flex-column gap-3">
        {cardDetails.map((val, index) => (
          <div
            key={index}
            className="card shadow-sm border-0 rounded-3 mx-auto"
            style={{ width: "100%", maxWidth: "70%", padding: "10px" }} // Full width on mobile, 60% max width for larger screens
          >
            <div className="card-body p-4">
              <h4>Full-Stack Developers </h4>
              {/* Button Section - Aligned to Left */}
              <div className="mb-1">
                <button
                  className="btn  btn-sm"
                  style={{ marginRight: "5px",border:"1px solid black", borderRadius:'20px' }}
                >
                  {val.button1}
                </button>
                <button
                  className="btn  btn-sm"
                  style={{ marginRight: "5px",border:"1px solid black", borderRadius:'20px' }}
                >
                  {val.button2}
                </button>
                <button
                  className="btn btn-sm "
                  style={{ marginRight: "5px",border:"1px solid black", borderRadius:'20px' }}
                >
                  {val.button3}
                </button>
              </div>

              {/* Content Section */}
              <p className="text-muted mb-3">{val.content1}</p>

              {/* Arrow Button */}
              <div className="text-end">
                <button className="btn btn-outline-primary">
                Apply here:career@abcd.com <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomNavContent;
