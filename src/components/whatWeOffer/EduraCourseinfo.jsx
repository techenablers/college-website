/* eslint-disable no-unused-vars */
import React from "react";
import arrow from "../../../src/assets/Vector.svg";
import WhatWeOfferUi from "./WhatWeOfferUi";
import "../../../src/styles/OurOfferContent.css";
import aa from "../../assets/aa.svg"
import bb from "../../assets/bb.svg"
import cc from "../../assets/cc.svg"

function EduraCourseinfo() {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      {/* First Section */}
      <span className="d-flex flex-column align-items-center mb-4 mb-md-0 text-center">
        <WhatWeOfferUi img={aa}/>
        <h5 className="mt-4">Application Submission</h5>
        <p>
          Once admissions open, students can submit their <br />
          application forms to the Admissions Office.
        </p>
      </span>

      <img
        src={arrow}
        alt="My SVG Icon"
        width={150}
        height={100}
        className="my-3 my-md-0"
      />

      {/* Second Section */}
      <span className="d-flex flex-column align-items-center mb-4 mb-md-0 text-center">
        <WhatWeOfferUi img={bb}/>
        <h5 className="mt-4"> Student Selection</h5>
        <p>
          Students will be selected on a first come, first <br /> served basis.
        </p>
      </span>

      <img
        src={arrow}
        alt="My SVG Icon"
        width={150}
        height={100}
        className="my-3 my-md-0"
      />

      {/* Third Section */}
      <span className="d-flex flex-column align-items-center text-center">
        <WhatWeOfferUi img={cc}/>
        <h5 className="mt-4">Final Enrolment</h5>
        <p>
          Selected students will complete the admission <br />
          formalities at the college campus.
        </p>
      </span>
    </div>
  );
}

export default EduraCourseinfo;
