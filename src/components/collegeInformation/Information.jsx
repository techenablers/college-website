import React from "react";
import NoticeBoard from "./NoticeBoard";
import QuickLink from "./QuickLink";
import ImportantDates from "./ImportantDates";
import "../../../src/styles/information.css";

function Information() {
  return (
    <div
      className="d-flex align-items-center information-content gap-5"
      style={{ paddingTop: "60px", paddingBottom: "60px", width: "100%" }}
    >
      <div style={{ margin: "20px"}}>
        <NoticeBoard />
      </div>
      <div className="d-flex flex-column gap-5" style={{ margin: "20px" }}>
        <div>
          <QuickLink />
        </div>
        <div>
          <ImportantDates />
        </div>
      </div>
    </div>
  );
}

export default Information;
