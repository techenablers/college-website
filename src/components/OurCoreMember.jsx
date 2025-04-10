/* eslint-disable no-unused-vars */
import React from "react";
import Ramesh from "../../src/assets/im.svg";
import vector20 from "../assets/Vector20.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import { useNavigate } from "react-router-dom";
import "../styles/OurCoreMember.css";

function OurCoreMember() {
  const coreMemberDetails = [
    {
      id: 1,
      menmberPhoto: Ramesh,
      memberName: "Dr. Ramesh Kumar Sachdeva",
      designation: "Founder",
    },
    {
      id: 2,
      menmberPhoto: image2,
      memberName: "Prof.Dr. M.B. Sonawane",
      designation: "Director",
    },
    {
      id: 3,
      menmberPhoto: image3,
      memberName: "Prof. Nisha Sonawane",
      designation: "Principal",
    },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/core-member-details");
  };

  return (
    <div className="core-member-info">
      <p className="d-inline-block member-info-header">
        <span style={{ marginRight: "8px" }}>
          <i
            className="fa fa-book"
            aria-hidden="true"
            style={{ fontSize: "16px" }}
          ></i>{" "}
          Members
        </span>
      </p>

      <h3 className="mb-5">Our Core Members</h3>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          flexWrap: "wrap",
          gap: "80px",
          width: "100%",
          position: "relative",
          padding: "0 15px",
        }}
      >
        <div className="d-flex flex-wrap gap-5 justify-content-center">
          {coreMemberDetails.map((member) => (
            <div
              key={member.id}
              className="card"
              style={{
                width: "16rem",
                height: "auto",
                position: "relative",
              }}
            >
              <img
                src={member.menmberPhoto}
                className="card-img-top"
                alt={member.memberName}
              />

              <div className="card-body-container" style={{ height: "50px" }}>
                <img
                  src={vector20}
                  className="card-img-top"
                  alt="Vector20"
                  style={{
                    position: "relative",
                    bottom: "45px",
                    width: "16rem",
                    zIndex: 1,
                    right: "2px",
                  }}
                />
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center core-member-card">
                <span style={{ fontSize: "16px" }}>{member.memberName}</span>
                <span style={{ fontSize: "12px", color: "#B7B7B7" }}>
                  {member.designation}
                </span>
              </div>

              <button className="read-more" onClick={handleClick}>
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurCoreMember;
