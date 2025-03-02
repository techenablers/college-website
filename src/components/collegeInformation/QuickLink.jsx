import React from "react";
import Vector from "../../assets/Vector 17.svg";

function QuickLink() {
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-start">
        <h4> Quick Link</h4>

        <img src={Vector} style={{ position: "relative" }} />
      </div>
      <div>
        <div className="d-flex justify-content-around lign-items-center ">
          <div
            style={{
              width: "150px",
              height: "50px",
              borderRadius: "20px",
              backgroundColor: "#ffffff",
            }}
          ></div>
          <div
            style={{
              width: "150px",
              height: "50px",
              borderRadius: "20px",
              backgroundColor: "#ffffff",
            }}
          ></div>
        </div>
        <div className="d-flex justify-content-around lign-items-center ">
        <div
          style={{
            width: "150px",
            height: "50px",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
          }}
        ></div>
        <div
          style={{
            width: "150px",
            height: "50px",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
          }}
        ></div>
        </div>
       
      </div>
    </div>
  );
}

export default QuickLink;
