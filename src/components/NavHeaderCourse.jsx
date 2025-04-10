/* eslint-disable no-unused-vars */
import React from "react";

const courses = [
  {
    heading: "Junior College XI & XII",
    content:
      "Our curriculum is designed to provide a strong academic foundation....",
  },
  {
    heading: "Junior College XI & XII Commerce Stream",
    content:
      "The Commerce stream is an ideal choice for students completing their 10th...",
  },
  {
    heading: "BA (Bachelor of Arts)",
    content: "This program offers a comprehensive and flexible curriculum....",
  },
  {
    heading: "BCom (Bachelor of Commerce)",
    content:
      "This program prepares graduates for diverse career opportunities in ba....",
  },
  {
    heading: "BSc Data Science",
    content:
      "The B.Sc. in Data Science program is designed to equip students with....",
  },
  {
    heading: "BSc IT (Information Technology)",
    content:
      "Designed to meet the demands of the fast-evolving tech industry....",
  },
];

function NavHeaderCourse() {
  return (
    <div
      className="container mt-4"
      style={{
        maxHeight: "80vh", // You can adjust this height as per your layout
        overflowY: "auto",
      }}
    >
      <div className="row g-3">
        {courses.map((course, index) => (
          <div key={index} className="col-12 col-lg-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    backgroundColor: "#E0EAFF",
                    padding: "10px 5px",
                    borderRadius: "4px",
                  }}
                >
                  {course.heading}
                </h5>
                <p
                  className="card-text mt-2"
                  style={{
                    fontSize: "12px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {course.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavHeaderCourse;
