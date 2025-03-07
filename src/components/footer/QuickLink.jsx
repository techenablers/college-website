/* eslint-disable no-unused-vars */
import React from "react";
import DashDesign from "./DashDesign";

function QuickLink() {
  return (
    <div
      style={{
        color: "#ffffff",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Ensures alignment to the start
        fontSize:'14px'
      }}
    >
      <h5>Quick Link</h5>
      <DashDesign />
      <ul
        style={{
          paddingLeft: "20px", // Ensures proper indentation for bullet points
          margin: 0, // Removes default margin
        }}
      >
        {[
          "Life Coach",
          "Business Coach",
          "Life Couch",
          "Health Couch",
          "Development",
          "Web Development",
          "SEO Optimize",
        ].map((item, index) => (
          <li key={index} style={{ padding: "5px 0" }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuickLink;
