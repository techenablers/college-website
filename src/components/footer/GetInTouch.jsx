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
      }}
    >
      <h4>Get In Touch</h4>
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
