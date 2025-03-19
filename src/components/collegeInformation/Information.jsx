/* eslint-disable no-unused-vars */
import React from "react";
import NoticeBoard from "./NoticeBoard";
import QuickLink from "./QuickLink";
import ImportantDates from "./ImportantDates";
import "../../../src/styles/information.css";

function Information() {
  return (
    <div
      className="row information-content d-flex justify-content-center"
      style={{ rowGap: "3px", padding: "40px 150px", boxSizing: "border-box" , backgroundColor:'red'}}
    > 
      <div className="col-12 col-md-6">
        <NoticeBoard />
      </div>
      <div className="col-12 col-md-6 d-flex flex-column gap-3">
        <QuickLink />
        <ImportantDates />
      </div>
    </div>
  );
}

export default Information;
