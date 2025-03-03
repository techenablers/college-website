import React from "react";
import Vector from "../../assets/Vector 17.svg";
import apply_now from "../../assets/blog.svg";
import leftapply from "../../assets/left.svg";
import rightapply from "../../assets/right.svg";
import "../../styles/QuickLink.css";

function QuickLink() {
  return (
    <div>
      <h4> Quick Link</h4>
      <div className="d-flex flex-row align-items-center gap-3">
        <img src={Vector} style={{ position: "relative" , width:"200px"}} />
        <img src={leftapply} style={{ position: "relative" }} />
        <img src={rightapply} style={{ position: "relative" }} />
      </div>
      <div>
        <div className="d-flex justify-content-around lign-items-center ">
          <div
            className="quickLink"
          >
            <img src={apply_now} alt="Icon" className="align-middle me-2"/>
            <span><b>Apply Now</b></span>
          </div>
          <div
           className="quickLink"
          >
            <img src={apply_now} alt="Icon" className="align-middle me-2"/>
            <span><b>Apply Now</b></span>
          </div>
        </div>
        <div className="d-flex justify-content-around lign-items-center ">
        <div
          className="quickLink"
        >
        <img src={apply_now} alt="Icon" className="align-middle me-2"/>
        <span><b>Apply Now</b></span>
        </div>
        <div
          className="quickLink"
        >
          <img src={apply_now} alt="Icon" className="align-middle me-2"/>
          <span><b>Apply Now</b></span>
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default QuickLink;
