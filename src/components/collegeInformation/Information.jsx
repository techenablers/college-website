/* eslint-disable no-unused-vars */
import React from "react";
import NoticeBoard from "./NoticeBoard";
import QuickLink from "./QuickLink";
import ImportantDates from "./ImportantDates";
import "../../../src/styles/information.css";

function Information() {
  return (
    <div className="container-fluid p-0">
      <div className="row information-content d-flex justify-content-center mx-0">
        <div className="col-12 col-md-6">
          <NoticeBoard />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column gap-3">
          <span style={{ padding: " 0px 40px" }}>
            <QuickLink />
          </span>
          <span style={{ padding: " 0px 40px" }}>
            <ImportantDates />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Information;
