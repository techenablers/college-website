import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomNavContent() {
  const cardDetails = [
    {
      button1: "Pune/Chennai",
      button2: "Full-time",
      button3: "1-2 Years of Experience",
      content1:
        "Due to growing workload, we are looking for experienced and talented Full-Stack Developers...",
    },
    {
      button1: "Remote",
      button2: "Part-time",
      button3: "3+ Years of Experience",
      content1:
        "We are expanding our remote team and seeking skilled developers with strong problem-solving abilities...",
    },
    {
      button1: "Bangalore",
      button2: "Contract",
      button3: "5+ Years of Experience",
      content1:
        "We are seeking senior developers with extensive experience in Full-Stack development...",
    },
    {
      button1: "Hyderabad",
      button2: "Internship",
      button3: "Freshers",
      content1:
        "We are looking for interns to work with our engineering team on exciting real-world projects...",
    },
    {
      button1: "Mumbai",
      button2: "Freelance",
      button3: "2+ Years of Experience",
      content1:
        "We’re seeking freelancers to collaborate on a series of upcoming web application projects...",
    },
    {
      button1: "Delhi",
      button2: "Full-time",
      button3: "4+ Years of Experience",
      content1:
        "Looking for skilled Full-Stack Engineers to join our product team and scale our backend systems...",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(5);
  const showAll = () => setVisibleCount(cardDetails.length);

  return (
    <div className="container-fluid mt-5">
      <div className="d-flex flex-column gap-3">
        {cardDetails.slice(0, visibleCount).map((val, index) => (
          <div
            key={index}
            className="card shadow-sm border-0 rounded-3 mx-auto"
            style={{
              width: "100%",
              maxWidth: "70%",
              padding: "10px",
            }}
          >
            <div className="card-body p-4">
              <h4>Full-Stack Developers </h4>
              {/* Button Section */}
              <div className="mb-1">
                {[val.button1, val.button2, val.button3].map((btn, i) => (
                  <button
                    key={i}
                    className="btn btn-sm"
                    style={{
                      marginRight: "5px",
                      border: "1px solid black",
                      borderRadius: "20px",
                    }}
                  >
                    {btn}
                  </button>
                ))}
              </div>
              {/* Content Section */}
              <p className="text-muted mb-3">{val.content1}</p>

              {/* Arrow Button */}
              <div className="text-end">
                <button className="btn btn-outline-primary">
                  Apply here
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Show More Button */}
        {visibleCount < cardDetails.length && (
          <div className="text-center mt-3">
            <button className="btn btn-outline-primary" onClick={showAll}>
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomNavContent;
