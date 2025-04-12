/* eslint-disable no-unused-vars */
import React from "react";
import TabContainer from "./TabContainer";
import CustomePageHeader from "../../customComponent/CustomePageHeader";

function Events() {
  return (
    <div style={{ marginTop: "100px" }}>
      {" "}
      <CustomePageHeader header={"Events"}/>
      <div>
        <TabContainer />
      </div>
    </div>
  );
}

export default Events;
