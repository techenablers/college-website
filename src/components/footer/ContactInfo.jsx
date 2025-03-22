/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/ContactInfo.css"; // For additional styling

function ContactInfo() {
  return (
    <div className="contact-info-container">
      <div className="contact-item">
        <strong>Call us any time:</strong>
        <span>+91 99758 81150</span>
      </div>

      <div className="divider"></div>

      <div className="contact-item">
        <strong>Email us 24/7 hours:</strong>
        <span>info@rkscollegekharadi.com</span>
      </div>

      <div className="divider"></div>

      <div className="contact-item">
        <strong>Our university location:</strong>
        <span>
          Plot No P-1, Sr. No. 15, Kharadi Knowledge Park, <br /> Near Zensar IT
          Company, Kharadi, Pune 411 014
        </span>
      </div>
    </div>
  );
}

export default ContactInfo;
