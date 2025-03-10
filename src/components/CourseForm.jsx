/* eslint-disable no-unused-vars */
import React from "react";
import science from "../assets/science.svg";

function CourseForm() {
  return (
    <div
      className="p-3 border rounded"
     
    >
      <div className="text-center mb-3">
        <img src={science} alt="Form Header" className="img-fluid rounded" />
      </div>

      {/* Form Starts Here */}
      <form  style={{ borderBottom: "2px soild #0540F2" }}>
        {/* Input 1 */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>

        {/* Input 2 */}
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        {/* Input 3 */}
        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Dropdown */}
        <div className="mb-3">
          <select className="form-select">
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        {/* Additional Input */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Additional Information"
          />
        </div>

        <p>
          Professionally expedite synergistic technology without out-of-the-box
          human capital.
        </p>

        {/* Submit Button */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
