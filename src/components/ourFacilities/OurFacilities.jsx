/* eslint-disable no-unused-vars */
import React from "react";
import pitcher1 from "../../../src/assets/library.svg";
import pitcher2 from "../../../src/assets/computerLab.svg";
import pitcher3 from "../../../src/assets/Administration.svg";
import pitcher4 from "../../../src/assets/Classroom.svg";
import "../../styles/OurFacilities.css";
import { useNavigate } from "react-router-dom";

function OurFacilities() {
  // Array of images for each rectangle
  const rectangles = [
    { pitcher: pitcher1 },
    { pitcher: pitcher2 },
    { pitcher: pitcher3 },
    { pitcher: pitcher4 },
  ];

  const navigation = useNavigate();

  const handleFacilities = () => {
    navigation("/infrastructure");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Reset scroll position to the top
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center our-facility-main"
      style={{}}
    >
      <div className="our-campus-header" onClick={handleFacilities}>
        <h3 className="mb-4">Our Facilities</h3>
        <p>
          Immerse yourself in a conducive learning <br /> environment with our
          top-notch facilities. State-of-the-art <br /> laboratories, extensive
          libraries, and modern <br />classrooms create a setting where curiosity and<br />
          exploration flourish.
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
