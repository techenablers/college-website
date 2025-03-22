/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/ContactInfo.css"; // For additional styling

function ContactInfo() {
  return (
    <div className="contact-info-container">
      <div className="contact-item">
        <strong>Call us any time:</strong>
        <span>+256 214 203 215</span>
      </div>

      <div className="divider"></div>

      <div className="contact-item">
        <strong>Email us 24/7 hours:</strong>
        <span>info@edura.com</span>
      </div>

      <div className="divider"></div>

      <div className="contact-item">
        <strong>Our university location:</strong>
        <span>ABCD location</span>
      </div>
    </div>
  );
}

export default ContactInfo;
