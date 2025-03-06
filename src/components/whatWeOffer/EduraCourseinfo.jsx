/* eslint-disable no-unused-vars */
import React from "react";
import arrow from "../../../src/assets/Vector.svg";
import WhatWeOfferUi from "./WhatWeOfferUi";
import "../../../src/styles/OurOfferContent.css";

function EduraCourseinfo() {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      {/* First Section */}
      <span className="d-flex flex-column align-items-center mb-4 mb-md-0 text-center">
        <WhatWeOfferUi />
        <h5>Choose Any Courses</h5>
        <p>
          Standards in leadership skills synergize optimal <br /> expertise
          rather than innovative leadership <br /> skills and better learning.
        </p>
      </span>
      
      <img src={arrow} alt="My SVG Icon" width={150} height={100} className="my-3 my-md-0" />

      {/* Second Section */}
      <span className="d-flex flex-column align-items-center mb-4 mb-md-0 text-center">
        <WhatWeOfferUi />
        <h5>Choose Any Courses</h5>
        <p>
          Standards in leadership skills synergize optimal <br /> expertise
          rather than innovative leadership <br /> skills and better learning.
        </p>
      </span>

      <img src={arrow} alt="My SVG Icon" width={150} height={100} className="my-3 my-md-0" />

      {/* Third Section */}
      <span className="d-flex flex-column align-items-center text-center">
        <WhatWeOfferUi />
        <h5>Choose Any Courses</h5>
        <p>
          Standards in leadership skills synergize optimal <br /> expertise
          rather than innovative leadership <br /> skills and better learning.
        </p>
      </span>
    </div>
  );
}

export default EduraCourseinfo;
