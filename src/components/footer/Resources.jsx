import React from "react";
import DashDesign from "./DashDesign";

function Resources() {
  return (
    <div
      style={{
        color: "#ffffff",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Ensures left alignment
        fontSize:'14PX'
      }}
    >
      <h5>Resources</h5>
      <DashDesign />
      <ul
        style={{
          paddingLeft: "20px", // Ensures proper indentation for bullet points
          margin: 0, // Removes default margin
        }}
      >
        {[
          "Community",
          "Sports",
          "Video Guides",
          "Health Couch",
          "Documentation",
          "Security",
          "Template",
        ].map((item, index) => (
          <li key={index} style={{ padding: "5px 0" }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
