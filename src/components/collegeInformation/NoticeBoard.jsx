import React from "react";
import calander from "../../../src/assets/Group 1000015001.svg";
import eye from "../../../src/assets/Group 1000015000.svg";

function NoticeBoard() {
  const notice = [
    {
      calander: calander,
      info: "Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value ",
      view: eye,
    },
    {
      calander: calander,
      info: "Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value ",
      view: eye,
    },
    {
      calander: calander,
      info: "Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value ",
      view: eye,
    },
    {
      calander: calander,
      info: "Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value ",
      view: eye,
    },
    {
      calander: calander,
      info: "Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value ",
      view: eye,
    },
    {
      calander: calander,
      info: "Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value ",
      view: eye,
    },
  ];

  return (
    <div
      style={{
        height: "700PX",
        backgroundColor: "#ffffff",
        overflowY: "auto",
        padding: "25px",
        borderRadius: "5px",
         scrollbarWidth: "thin"
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h4>Notice Board</h4>
        <p>see All</p>
      </div>
      <hr />
      {notice.map((val, indx) => (
        <>
          <div
            key={indx}
            className="d-flex justify-content-between align-items-center"
            style={{ margin: 0 }}
          >
            <img src={val.calander} />
            <p style={{marginLeft:'12px', marginRight:'12px'}}>{val.info}</p>
            <img src={eye} />
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}

export default NoticeBoard;
