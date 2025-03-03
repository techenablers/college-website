import React from "react";
import Ramesh from "../../src/assets/im.svg";
import vector20 from "../assets/Vector20.svg";

function OurCoreMember() {
  return (
    <div
      className=""
      style={{
        backgroundColor: "#fff",
        width: "100%",
        height: "auto",
        padding: "40px 0px ",
        display: "flex", // Use flexbox to center or adjust child items
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        flexDirection: "column",
      }}
    >
      <p
        className="d-inline-block"
        style={{
          height: "26px",
          backgroundColor: "#E6E6E6",
          borderRadius: "10px",
          padding: "0 15px",
          lineHeight: "26px",
          marginTop: "20px", // Added margin for better spacing
        }}
      >
        <span style={{ marginRight: "8px" }}>
          <i
            className="fa fa-book"
            aria-hidden="true"
            style={{ fontSize: "16px" }}
          ></i>{" "}
          Members
        </span>
      </p>

      <h5>Our Core Members</h5>

      <div
        className="card"
        style={{
          width: "16rem",
          height: "auto",
          position: "relative", // Ensure we can position the vector image absolutely
        }}
      >
        <img src={Ramesh} className="card-img-top" alt="Ramesh" />

        <div className="card-body-container " style={{height:"50px"}}>
          <img
            src={vector20}
            className="card-img-top"
            alt="Vector20"
            style={{
              position: "relative",
              bottom: "45px", // Position it 20px above the bottom edge of the card
              width: "16rem",
              zIndex: 1, // Ensure it appears on top of the Ramesh image
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default OurCoreMember;
