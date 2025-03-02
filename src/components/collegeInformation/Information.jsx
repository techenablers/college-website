import React from "react";
import NoticeBoard from "./NoticeBoard";
import QuickLink from "./QuickLink";
import ImportantDates from "./ImportantDates";
import "../../../src/styles/information.css";

function Information() {
  return (
    <div
      className="d-flex justify-content-around align-items-center information-content"
      style={{ paddingTop: "60px", paddingBottom: "60px", width: "100%" }}
    >
      <div style={{ marginBottom: "20px" }}>
        <NoticeBoard />
      </div>
      <div className="d-flex flex-column " style={{ marginBottom: "20px" }}>
        <div style={{}}>
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
