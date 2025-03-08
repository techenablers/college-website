import React from "react";
import TabContainer from "./TabContainer";

function Events() {
  return (
    <div style={{ marginTop: "100px" }}>
      {" "}
      <div
        style={{
          backgroundColor: "#F7F8FD",
          width: "100%",
          height: "300px",
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h4 style={{ color: "#000" }}>Events Page</h4>
      </div>
      <div>
        <TabContainer />
      </div>
    </div>
  );
}

export default Events;
