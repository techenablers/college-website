// import React from 'react'
import myIcon from "../../src/assets/image.svg";

// eslint-disable-next-line react/prop-types
function CustomCourseCard({ imageSrc, title, description, bgColor , tagInfo}) {
    console.log('1',imageSrc, title, description);
    console.log('i am coming');
    
    
 return (
    <div className="container mt-5">
      <div
        className="card"
        style={{
          width: "320px",
          height: "425px",
          borderRadius: "15PX",
          border: "none",
        }}
      >
        <span
          className="badge position-absolute"
          style={{
            textAlign: "center",
            backgroundColor: bgColor,
            color: '#ffffff',
            top: "25px",
            left: "20px",
            fontSize: "12px",
          }}
        >
          {tagInfo}
        </span>

        <span className=" d-flex justify-content-center ">
          <img src={myIcon} alt="My SVG Icon" width={295} height={210} />
        </span>
        {/* Card Body */}
        <div
          className="card-body"
          style={{ padding: "0px 9px", textAlign: "start" }}
        >
          <h6
            style={{
              height: "35px",
              backgroundColor: "#DEEDFD",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "5px",
            }}
            className="d-flex justify-content-start align-items-center"
          >
            <span style={{ marginRight: "8px" }}>
              <i
                className="fa fa-graduation-cap"
                aria-hidden="true"
                style={{ fontSize: "20px" }}
              ></i>
            </span>{" "}
            B-Tech
          </h6>

          <p
            className=""
            style={{
              fontFamily: "sans-serif",
              fontSize: "18PX",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Foundation course to under stand about softwere
          </p>
          <p
            className=""
            style={{
              fontFamily: "sans-serif",
              fontSize: "16PX",
              fontWeight: "400",
              marginBottom: "5px",
            }}
          >
            Standards in leadership skills syneze optimal rather than......
            <span>(Read more)</span>
          </p>
        </div>
        {/* Card Footer */}
        <div
          className="d-flex justify-content-between"
          style={{ padding: "5px 10px" }}
        >
          <span
            style={{
              fontSize: "14px",
              fontFamily: "Inter, sans-serif",
              color: "#534B4F",
              fontWeight: "700",
            }}
          >
            Duraction: 4years
          </span>
          <span
            style={{
              fontSize: "14px",
              fontFamily: "Inter, sans-serif",
              color: "#534B4F",
              fontWeight: "700",
            }}
          >
            {" "}
            23 subjects
          </span>
        </div>
      </div>
    </div>
  );
}

export default CustomCourseCard