/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import book from "../assets/book.svg";
import satran from "../assets/SATRAN.svg";
import bulb from "../assets/bulb.svg";
import setsquare from "../assets/setsquare.svg";
import "../styles/CustomePageHeader.css";

function CustomePageHeader({ header }) {
  return (
    <div
      style={{
        backgroundColor: "#F7F8FD",
        width: "100%",
        height: "300px",
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative", // important for absolute children
      }}
    >
      <img
        className="hide-on-mobile"
        src={satran}
        alt="Satran"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "100px", // adjust as needed
          height: "auto",
        }}
      />

      <img
        className="hide-on-mobile"
        src={book}
        alt="Book Icon"
        style={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: "80px",
          height: "auto",
        }}
      />

      <img
        className="hide-on-mobile"
        src={bulb}
        alt="Bulb"
        style={{
          position: "absolute",
          top: "10%",
          right: "25%",
          width: "50px", // adjust as needed
          height: "auto",
        }}
      />

      <img
        className="hide-on-mobile"
        src={setsquare}
        alt="Set Square"
        style={{
          position: "absolute",
          bottom: "15%",
          right: "6%",
          width: "60px", // adjust as needed
          height: "auto",
        }}
      />

      {/* Header Text */}
      <h4 style={{ color: "#000", zIndex: 1 }}>{header}</h4>
    </div>
  );
}

export default CustomePageHeader;
