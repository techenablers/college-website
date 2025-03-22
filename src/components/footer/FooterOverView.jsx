/* eslint-disable no-unused-vars */
import React from "react";
import CollegeInfoInFooter from "./CollegeInfoInFooter";
import QuickLink from "./QuickLink";
import Resources from "./Resources";
import GetInTouch from "./GetInTouch";
import "../../styles/FooterContainer.css";

function FooterOverView() {
  return (
    <div
      className="d-flex flex-column"
      style={{
        backgroundColor: "#1E2C46",
        width: "100%",
        padding: "35px 30px",
      }}
    >
      <div className="d-flex flex-wrap footer-container" style={{gap:'5px'}}>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <CollegeInfoInFooter />
        </div>
        <div className="col-12 col-md-2 d-flex justify-content-center">
          <QuickLink />
        </div>
        <div className="col-12 col-md-2 d-flex justify-content-center">
          <Resources />
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <GetInTouch />
        </div>
      </div>

      <hr
        style={{ width: "100%", marginTop: "20px", borderColor: "#ffffff" }}
      />

      {/*   <div
        className="d-flex justify-content-between align-items-center"
        style={{ color: "#ffffff", padding: "0px 20px" }}
      >
        <span>Copyright@ DSRF. All Rights Reserved.</span>
        <span>Privacy Policy &nbsp; &nbsp; &nbsp; Terms of Use</span>
      </div> */}
    </div>
  );
}

export default FooterOverView;
