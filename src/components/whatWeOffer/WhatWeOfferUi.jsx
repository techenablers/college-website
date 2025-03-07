/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../../../src/styles/WhatWeOfferUi.css";
import vector from "../../assets/vector.svg";

function WhatWeOfferUi({ img }) {
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <div
        className="scooped-blue-circle"
        style={{
          backgroundImage: `url(${vector})`,
        }}
      ></div>
      <div
        className="scooped-square"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="scooped-ball"></div>
      </div>
    </div>
  );
}

export default WhatWeOfferUi;
