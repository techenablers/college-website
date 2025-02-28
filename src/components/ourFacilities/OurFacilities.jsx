import React from "react";
import pitcher1 from "../../../src/assets/mimi-thian--VHQ0cw2euA-unsplash.svg";
import pitcher2 from "../../../src/assets/priscilla-du-preez-ggeZ9oyI-PE-unsplash.svg";
import pitcher3 from "../../../src/assets/redd-f-PTRzqc_h1r4-unsplash.svg";
import pitcher4 from "../../../src/assets/zachary-keimig-nxJgmZfLcJI-unsplash.svg";

function OurFacilities() {
  // Array of images for each rectangle
  const rectangles = [
    { pitcher: pitcher1 },
    { pitcher: pitcher2 },
    { pitcher: pitcher3 },
    { pitcher: pitcher4 },
  ];

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        flexWrap: "wrap",
        gap: "20px",
        width: "100%",
        position: "relative",
        padding: "0 15px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "20%",
          height: "170px",
          backgroundColor: "#020E22",
          zIndex: 1,
          borderRadius: "4px",
          transform: "translate(-50%, -50%)", // Adjust to truly center it
          textAlign: "center",
          display: "flex", // Use flexbox to align content
          flexDirection: "column", // Stack the content vertically
          justifyContent: "center", // Vertically center the content
          alignItems: "center", // Horizontally center the content
          padding: "10px", // Optional: Add some padding inside the box
          color: "#ffffff",
        }}
      >
        <h5>Our Facilities</h5>
        <p>
          Immerse yourself in a conducive learning environment with our
          top-notch facilities.
        </p>
      </div>

      {rectangles.map((rectangle, index) => (
        <div
          key={index}
          style={{
            flex: "1 1 45%",
            width: "45%",
            height: "300px",
            backgroundImage: `url(${rectangle.pitcher})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            position: "relative",
          }}
        ></div>
      ))}
    </div>
  );
}

export default OurFacilities;
