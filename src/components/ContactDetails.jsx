import React from "react";
import fax from "../assets/fax.svg";
import location from "../assets/location.svg";
import map from "../assets/map.svg";
import phoneCall from "../assets/phoneCall.svg";

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
    { icon: "fa-solid fa-user", header: "FAX", details: "020 - 27012728" },
  ];

  return (
    <div>
      {contactInDeatil.map((val, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-item-center"
          style={{
            width: "320px",
            height: "90px",
            border: "1px solid black",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Strong dropped shadow
            marginTop: "15px",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
            <div>
              <i className={val.icon}></i>
            </div>
            <div>
              <h6>{val.header}</h6>
              <p>{val.details}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default ContactDetails;
