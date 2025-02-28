/* eslint-disable no-unused-vars */
import React from "react";
import arrow from "../../../src/assets/Vector.svg";
import WhatWeOfferUi from "./WhatWeOfferUi";
import "../../../src/styles/OurOfferContent.css";

function EduraCourseinfo() {
  return (
    <div className="d-flex ">
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <WhatWeOfferUi />
        <h5>Choose Any Courses</h5>
        <p>
          Standards in leadership skills synergize optimal <br /> expertise
          rather than innovative leadership <br /> skills and better learning.{" "}
        </p>
      </span>
      {/* <ScoopeContent/> */}
      <img src={arrow} alt="My SVG Icon" width={150} height={100} />
      <span>
        <WhatWeOfferUi />
        <h5>Choose Any Courses</h5>
        <p>
          Standards in leadership skills synergize optimal <br /> expertise
          rather than innovative leadership <br /> skills and better learning.{" "}
        </p>
      </span>

      <img src={arrow} alt="My SVG Icon" width={150} height={100} />
      <span>
        <WhatWeOfferUi />
        <h5>Choose Any Courses</h5>
        <p>
          Standards in leadership skills synergize optimal <br /> expertise
          rather than innovative leadership <br /> skills and better learning.{" "}
        </p>
      </span>
    </div>
  );
}

export default EduraCourseinfo;
