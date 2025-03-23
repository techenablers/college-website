import React from "react";
import Vector from "../../assets/Vector 17.svg";
import apply_now from "../../assets/blog.svg";
import leftapply from "../../assets/left.svg";
import rightapply from "../../assets/right.svg";
import "../../styles/QuickLink.css";

const links = [
  { id: 1, text: "Apply Now" },
  { id: 2, text: "Answer Key" },
  { id: 3, text: "Answer Key" },
  { id: 4, text: "Result" },
];

function QuickLink() {
  return (
    <div className="container">
      {/* Vector and Arrows */}
        <h4 >Quick Link</h4>
      {/* Quick Links */}
      <div className="row g-2" style={{}}>
        {links.map((link) => (
          <div key={link.id} className="col-6 ">
            <div
              className="quickLink d-flex justify-content-around align-items-center"
              style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)" }}
            >
              <img src={apply_now} alt="Icon" className="align-middle " />
              <span>
                <b>{link.text}</b>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickLink;
