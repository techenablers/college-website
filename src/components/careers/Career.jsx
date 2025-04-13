/* eslint-disable no-unused-vars */
import React from "react";
import groupStd from "../../assets/career-bg.svg";
import VerticalNavBar from "./CareerNav";

function Career() {
  return (
    <div style={{ backgroundColor: "#F7F9FC", marginTop: "100px" }}>
      <div
        style={{
          background: `url(${groupStd})`,
          backgroundSize: "cover",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>Careers</h4>
      </div>
      <div>
        <VerticalNavBar />
      </div>
    </div>
  );
}

export default Career;
