import React from "react";
import DashDesign from "./DashDesign";

function GetInTouch() {
  return (
    <div
      style={{
        color: "#ffffff",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Ensures left alignment
        fontSize:'14px'
      }}
    >
      <h5>Get In Touch</h5>
      <DashDesign />
      <p
        style={{
          margin: 0, // Removes extra space
          paddingTop: "5px", // Adjusts spacing
          lineHeight: "1.5", // Improves readability
        }}
      >
        Fusce varius, dolor tempor interdum tristique <br />
        bibendum service life.
      </p>
    </div>
  );
}

export default GetInTouch;
