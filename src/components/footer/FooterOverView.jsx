import React from "react";
import CollegeInfoInFooter from "./CollegeInfoInFooter";
import QuickLink from "./QuickLink";
import Resources from "./Resources";
import GetInTouch from "./GetInTouch";

function FooterOverView() {
  return (
    <div
      className="d-flex flex-column"
      style={{ backgroundColor: "#1E2C46", width: "100%", padding: "30px" }}
    >
      <div
        className="d-flex justify-content-around align-items-top"
        style={{ gap: "20px" }}
      >
        <CollegeInfoInFooter />
        <QuickLink />
        <Resources />
        <GetInTouch />
      </div>
      <hr
        style={{ width: "100%", marginTop: "20px", borderColor: "#ffffff" }}
      />

      <div
        className="d-flex justify-content-between align-items-center"
        style={{ color: "#ffffff", padding: "0px 20px" }}
      >
        <span>Copyright@ DSRF. All Rights Reserved.</span>
        <span>Privacy Policy &nbsp; &nbsp; &nbsp; Terms of Use</span>
      </div>
    </div>
  );
}

export default FooterOverView;
