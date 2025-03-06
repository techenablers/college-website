/* eslint-disable no-unused-vars */
import React from "react";
import pitcher1 from "../../../src/assets/mimi-thian--VHQ0cw2euA-unsplash.svg";
import pitcher2 from "../../../src/assets/priscilla-du-preez-ggeZ9oyI-PE-unsplash.svg";
import pitcher3 from "../../../src/assets/redd-f-PTRzqc_h1r4-unsplash.svg";
import pitcher4 from "../../../src/assets/zachary-keimig-nxJgmZfLcJI-unsplash.svg";
import "../../styles/OurFacilities.css";

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
      className="d-flex justify-content-center align-items-center our-facility-main"
      style={{
      
      }}
    >
      <div className="our-campus-header" style={{}}>
        <h5>Our Facilities</h5>
        <p>
          Immerse yourself in a conducive learning environment with our
          top-notch facilities.
        </p>
      </div>

      {rectangles.map((rectangle, index) => (
        <div
          className="our-facility-img"
          key={index}
          style={{
            backgroundImage: `url(${rectangle.pitcher})`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default OurFacilities;
