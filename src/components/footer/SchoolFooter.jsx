/* eslint-disable no-unused-vars */
import React from "react";
import ContactInfo from "./ContactInfo";
import FooterOverView from "./FooterOverView";

function SchoolFooter() {
  return (
    <div
      className=" d-flex justify-content-center aline-item-center flex-column"
      style={{
        width: "100%",
        backgroundColor: "#0B0E2A",
      }}
    >
      <ContactInfo />
      <div style={{ padding: "10px 30px" }}>
        <FooterOverView />
      </div>
    </div>
  );
}

export default SchoolFooter;
