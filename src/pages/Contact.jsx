/* eslint-disable no-unused-vars */
import React from "react";
import map from "../assets/map.svg";
import EnquiryForm from "../components/EnquiryForm";
import ContactDetails from "../components/ContactDetails";

const Contact = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#F7F8FD",
          width: "100%",
          height: "300px",
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h4 style={{ color: "#000" }}>Contact Page</h4>
      </div>
      <div style={{ textAlign: "center", marginTop: "5px" }}>
        <img
          src={map}
          style={{
            width: "80%", // 50% width ensures 25% white space on each side
            maxWidth: "100%", // Ensures responsiveness
            height: "auto", // Maintain aspect ratio
          }}
        />
      </div>

      <div
        className="d-flex flex-wrap justify-content-center align-item-center"
        style={{ gap: "40px", paddingBottom:'150px' }}
      >
        <div>
          <ContactDetails />
        </div>
        <div>
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
