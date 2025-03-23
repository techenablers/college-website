/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

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
      }}
    >
      <h4 style={{ color: "#000" }}>{header}</h4>
    </div>
  );
}

export default CustomePageHeader;
