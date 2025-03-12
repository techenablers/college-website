/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EnquiryForm = () => {
  return (
    <div className="container">
      <div className="p-5 rounded" style={{ backgroundColor: "#BBD1F6" }}>
        <h3 className="text-left mb-3 mt-3">Enquiry Form</h3>
        <div
          style={{
            width: "80px", // Larger dash
            height: "3px", // Dash height
            backgroundColor: "#0540F2",
            marginBottom: "10px",
            marginTop:'10px'
          }}
        ></div>
        <p className="text-left mb-4" style={{fontSize:'12px'}}>
          Dear Student, Thank you for your interest. Please fill out the form
           with your details, <br />and we will contact you soon.
        </p>
        <form>
          <div className="row ">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-md-6 mb-3">
              <select className="form-select" id="course">
                <option value="">Choose a course</option>
                <option value="web">Web Development</option>
                <option value="data">Data Science</option>
                <option value="design">UI/UX Design</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
