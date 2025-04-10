/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function CustomCourseCard({
  id,
  imageSrc,
  title,
  description,
  bgColor,
  tagInfo,
  onCardClick,
  duration,
}) {
  const handleCardClick = () => {
    const cardDetails = {
      id,
      title,
      description,
      tagInfo,
      bgColor,
    };
    onCardClick(cardDetails);
  };

  return (
    // <div className="container mt-5" >
      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: "320px",
          height: "425px",
          borderRadius: "15px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleCardClick}
      >
        <span
          className="badge position-absolute"
          style={{
            textAlign: "center",
            backgroundColor: bgColor,
            color: "#ffffff",
            top: "25px",
            left: "20px",
            fontSize: "12px",
          }}
        >
          {tagInfo}
        </span>

        <span className=" d-flex justify-content-center ">
          <img src={imageSrc} alt="My SVG Icon" width={295} height={210} />
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
            {tagInfo}
          </h6>

          <p
            className=""
            style={{
              fontFamily: "sans-serif",
              fontSize: "16PX",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            {title}
          </p>
          <p
            className=""
            style={{
              fontFamily: "sans-serif",
              fontSize: "13PX",
              fontWeight: "400",
              marginBottom: "5px",
              textAlign: "justify",
            }}
          >
            {description}
            <span>(......Read more)</span>
          </p>
        </div>
        {/* Card Footer */}
        <div className="d-flex text-right mb-1" style={{ padding: "5px 10px" }}>
          <span
            style={{
              fontSize: "14px",
              fontFamily: "Inter, sans-serif",
              color: "#534B4F",
              fontWeight: "700",
            }}
          >
            <i
              className="fa-regular fa-clock"
              style={{ marginRight: "5px", color: "#0D5EF4" }}
            ></i>
            Duration: {duration}
          </span>
        </div>
      </div>
    // </div>
  );
}

export default CustomCourseCard;
