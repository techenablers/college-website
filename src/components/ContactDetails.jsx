/* eslint-disable no-unused-vars */
import React from "react";
/* import fax from "../assets/fax.svg";
import location from "../assets/location.svg";
import map from "../assets/map.svg";
import phoneCall from "../assets/phoneCall.svg"; */

function ContactDetails() {
  const contactInDeatil = [
    {
      icon: "fa-solid fa-location-dot",
      header: "Address",
      details:
        "Plot No P-1, Sr. No. 15, Kharadi Knowledge Park, Near Reliance Mart, Near Zensar IT Company, Behind MSEB Exchange Office, Kharadi, Pune 411 014",
    },
    {
      icon: "fa-solid fa-phone",
      header: "Phone Number",
      details:
        "Mobile: 9975881150 / 9158500088 9822746812 / 9822886958 LANDLINE- 020 - 27012726",
    },
    {
      icon: "fa-solid fa-envelope",
      header: "EMAIL ID",
      details: "info@rkscollegekharadi.com dsrfpune@gmail.com / dsrf@dss.co.in",
    },
    { icon: "fa-solid fa-user", 
      header: "FAX", 
      details: "020 - 27012728" 
    },
  ];

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
      {contactInDeatil.map((val, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            width: "420px",
            height: "100px",
            border: "1px solid black",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Strong dropped shadow
            borderRadius: "5px",
            padding: "10px",
            alignItems: "center"
          }}
        >
            <div>
              <i className={val.icon}></i>
            </div>
            <div style={{display: "flex", flexDirection:"column", paddingTop: "10px", marginLeft: "10px",}}>
              <h6>{val.header}</h6>
              <p style={{fontSize: "14px", wordWrap: "break-word" , overflowWrap: "break-word", textAlign: "left"}}>{val.details}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default ContactDetails;
