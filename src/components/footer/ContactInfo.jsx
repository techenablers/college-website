/* eslint-disable no-unused-vars */
import React from "react";

function ContactInfo() {
  return (
    <div className="d-flex justify-content-around align-items-center" style={{padding:'0.5rem 10rem',color:"#ffffff"}}>
      <div
        className="contact-item"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <strong>Call us any time:</strong>
        <span style={{ marginTop: "5px" }}>+256 214 203 215</span>
      </div>
      <div
        style={{
          borderLeft: "2px solid #ffffff",
          height: "30px",
          margin: "0 10px",
        }}
      ></div>
      <div
        className="contact-item"
        style={{
          display: "flex",
          flexDirection: "column", // Stack the content vertically
          alignItems: "center",
        }}
      >
        <strong>Email us 24/7 hours:</strong>
        <span style={{ marginTop: "5px" }}>info@edura.com</span>
      </div>
      <div
        style={{
          borderLeft: "2px solid #ffffff",
          height: "30px",
          margin: "0 10px",
        }}
      ></div>
      <div
        className="contact-item"
        style={{
          display: "flex",
          flexDirection: "column", // Stack the content vertically
          alignItems: "center",
        }}
      >
        <strong>Our university location:</strong>
        <span style={{ marginTop: "5px" }}>ABCD location</span>
      </div>
    </div>
  );
}

export default ContactInfo;
