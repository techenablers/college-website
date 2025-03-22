/* eslint-disable no-unused-vars */
import React from "react";
import ContactInfo from "./ContactInfo";
import FooterOverView from "./FooterOverView";

function SchoolFooter() {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        width: "100%",
        backgroundColor: "#0B0E2A",
        padding: "20px 15px",
      }}
    >
      <div className="w-100">
        <ContactInfo />
      </div>

      <div className="w-100" style={{ padding: "10px 30px" }}>
        <FooterOverView />
      </div>
    </div>
  );
}

export default SchoolFooter;
