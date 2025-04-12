  /* eslint-disable no-unused-vars */
import React from "react";
import arrow from "../../../src/assets/Vector.svg";
import WhatWeOfferUi from "./WhatWeOfferUi";
import "../../../src/styles/OurOfferContent.css";
import laptop from "../../assets/laptop.svg"
import bb from "../../assets/iti.svg"
import cc from "../../assets/science.svg"
import Notebook from "../../assets/Notebook.svg";
import finger from "../../assets/finger.svg";
import bluehat from "../../assets/bluehat.svg";

function EduraCourseinfo() {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center what-we-offer-container">
      {/* First Section */}
      <span className="d-flex flex-column align-items-center mb-4 mb-md-0 text-center">
        <WhatWeOfferUi img={laptop} blurimage = {Notebook}/>
        <h5 className="mt-4">Application Submission</h5>
        <p style={{fontSize:"12px"}}>
          Once admissions open, students can submit their <br />
          application forms to the Admissions Office.
        </p>
      </span>

      <img
        src={arrow}
        alt="My SVG Icon"
        className="my-3 my-md-0 vector-arrow"
      />

      {/* Second Section */}
      <span className="d-flex flex-column align-items-center mb-4 mb-md-0 text-center">
        <WhatWeOfferUi img={bb} blurimage = {finger}/>
        <h5 className="mt-4"> Student Selection</h5>
        <p style={{fontSize:"12px"}}>
          Students will be selected on a first come, first <br /> served basis.
        </p>
      </span>

      <img
        src={arrow}
        alt="My SVG Icon"
        width={150}
        height={100}
        className="my-3 my-md-0 vector-arrow"
      />

      {/* Third Section */}
      <span className="d-flex flex-column align-items-center text-center">
        <WhatWeOfferUi img={cc} blurimage = {bluehat}/>
        <h5 className="mt-4">Final Enrolment</h5>
        <p style={{fontSize:"12px"}}>
          Selected students will complete the admission <br />
          formalities at the college campus.
        </p>
      </span>
    </div>
  );
}

export default EduraCourseinfo;
