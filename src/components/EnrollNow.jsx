/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function EnrollNow({ show, onClose }) {
  return (
    <div
    className={`modal fade ${show ? "show d-block" : ""}`}
    tabIndex="-1"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
  >
      <div className="modal-dialog modal-dialog-centered" style={{padding:'50px', position:'relative', top:'10px'}}>
        <div className="modal-content" style={{padding:'15px 10px'}}>
          <div className="modal-header" style={{ borderBottom: "none",padding:'5px 16px' }}>
            <h3 className="modal-title" id="enrollNowModalLabel" >
            We’re here to help!
            </h3>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">
            <h6 className="text-muted mb-3">
              Please contact us in case of any query.
            </h6>

            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>

              <div className="mb-3">
                <select className="form-select">
                  <option value="">Select Course</option>
                  <option value="react">React</option>
                  <option value="node">Node.js</option>
                  <option value="express">Express.js</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrollNow;
