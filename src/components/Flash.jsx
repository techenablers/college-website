/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/Flash.css";
import star from "../assets/star.svg";

const Flash = () => {
  return (
    <div className="horizontal-banner">
      <img src={star} alt="Star" />
      <p>
        2025 Final Year Semester Exam Results are Out! 🎉 |{" "}
        <i
          className="fa fa-bullhorn"
          aria-hidden="true"
          style={{ marginLeft: "20px", marginRight: "10px" }}
        ></i>{" "}
        1st Year Admit Cards Now Available!
      </p>
    </div>
  );
};

export default Flash;

// 📢
