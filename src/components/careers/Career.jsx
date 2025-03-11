/* eslint-disable no-unused-vars */
import React from "react";
import groupStd from "../../assets/groupStd.svg";
import VerticalNavBar from "./CareerNav";

function Career() {
  return (
    <div style={{ backgroundColor: "#F7F9FC", marginTop: "150px" }}>
      <div
        style={{
          background: `linear-gradient(90deg, #0D5EF4 70%, rgba(115, 115, 115, 0.9) 100%), url(${groupStd})`,
          backgroundSize: "cover",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "300px",
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ color: "#fff" }}>Careers</h4>
      </div>
      <div>
        <VerticalNavBar />
      </div>
    </div>
  );
}

export default Career;
