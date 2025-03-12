/* eslint-disable no-unused-vars */
import React from "react";
import Ramesh from "../../src/assets/im.svg";
import vector20 from "../assets/Vector20.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";

function OurCoreMember() {

  const handleClick = ()=>{
    console.log('i am clicked');
    
  }
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
        className="d-flex justify-content-center align-items-center"
        style={{
          flexWrap: "wrap",
          gap: "50px",
          width: "100%",
          position: "relative",
          padding: "0 15px",
        }}
      >
        <div
          className="card"
          style={{
            width: "16rem",
            height: "auto",
            position: "relative", // Ensure we can position the vector image and button absolutely
          }}
        >
          <img src={Ramesh} className="card-img-top" alt="Ramesh" />

          <div className="card-body-container" style={{ height: "50px" }}>
            <img
              src={vector20}
              className="card-img-top"
              alt="Vector20"
              style={{
                position: "relative",
                bottom: "45px", // Position it 20px above the bottom edge of the card
                width: "16rem",
                zIndex: 1, // Ensure it appears on top of the Ramesh image
                right: "2px",
              }}
            />
          </div>

          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
              position: "absolute", // Make sure it's over the image
              bottom: "25px", // Adjust this to move the text above the button
              width: "100%", // Ensure the text spans the full width of the container
              zIndex: 2, // Make sure the text is above the image
              textAlign: "center", // Center the text horizontally
              color: "black", // Text color
              fontSize: "18px", // Font size
              fontWeight: "bold", // Bold font weight
            }}
          >
            <span style={{ fontSize: "16px" }}>Dr. Ramesh Kumar Sachdeva</span>
            <span style={{ fontSize: "12px", color: "#B7B7B7" }}>
              Principal
            </span>
          </div>

          <button
            style={{
              position: "absolute", // Position it relative to the card container
              bottom: "-20px", // Move it slightly outside the card
              left: "50%", // Center it horizontally
              transform: "translateX(-50%)", // Offset to truly center the button
              padding: "10px 20px",
              backgroundColor: "#0540F2", // Button color
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
              zIndex: 3, // Ensure the button appears above the image and text
            }}

            onClick={handleClick}
          >
            See More
          </button>
        </div>

        <div
          className="card"
          style={{
            width: "16rem",
            height: "auto",
            position: "relative", // Ensure we can position the vector image absolutely
          }}
        >
          <img src={image2} className="card-img-top" alt="Ramesh" />

          <div className="card-body-container " style={{ height: "50px" }}>
            <img
              src={vector20}
              className="card-img-top"
              alt="Vector20"
              style={{
                position: "relative",
                bottom: "45px", // Position it 20px above the bottom edge of the card
                width: "16rem",
                zIndex: 1, // Ensure it appears on top of the Ramesh image
                right: "2px",
              }}
            />
          </div>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
              position: "absolute", // Make sure it's over the image
              bottom: "25px", // Adjust this if needed to raise/lower the text
              width: "100%", // Ensure the text spans the full width of the container
              zIndex: 2, // Make sure the text is above the image
              textAlign: "center", // Center the text horizontally
              color: "black", // Text color
              fontSize: "18px", // Font size
              fontWeight: "bold", // Bold font weight
            }}
          >
            <span style={{ fontSize: "16PX" }}>Prof.Dr. M.B. Sonawane</span>
            <span style={{ fontSize: "12PX", color: "#B7B7B7" }}>Director</span>
          </div>
          
          <button
            style={{
              position: "absolute", // Position it relative to the card container
              bottom: "-20px", // Move it slightly outside the card
              left: "50%", // Center it horizontally
              transform: "translateX(-50%)", // Offset to truly center the button
              padding: "10px 20px",
              backgroundColor: "#0540F2", // Button color
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
              zIndex: 3, // Ensure the button appears above the image and text
            }}
          >
            See More
          </button>
        </div>
        <div
          className="card"
          style={{
            width: "16rem",
            height: "auto",
            position: "relative", // Ensure we can position the vector image absolutely
          }}
        >
          <img src={image3} className="card-img-top" alt="Ramesh" />

          <div
            className="card-body-container"
            style={{ height: "50px", position: "relative" }}
          >
            <img
              src={vector20}
              className="card-img-top"
              alt="Vector20"
              style={{
                position: "absolute",
                bottom: "0", // Adjusted to position the vector image at the bottom of the card
                width: "16rem",
                zIndex: 1, // Ensure the image is below the text
              }}
            />
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{
                position: "absolute", // Make sure it's over the image
                bottom: "25px", // Adjust this if needed to raise/lower the text
                width: "100%", // Ensure the text spans the full width of the container
                zIndex: 2, // Make sure the text is above the image
                textAlign: "center", // Center the text horizontally
                color: "black", // Text color
                fontSize: "18px", // Font size
                fontWeight: "bold", // Bold font weight
              }}
            >
              <span style={{ fontSize: "16PX" }}>Prof. Nisha Sonawane</span>
              <span style={{ fontSize: "12PX", color: "#B7B7B7" }}>Principal</span>
            </div>
            
          <button
            style={{
              position: "absolute", // Position it relative to the card container
              bottom: "-20px", // Move it slightly outside the card
              left: "50%", // Center it horizontally
              transform: "translateX(-50%)", // Offset to truly center the button
              padding: "10px 20px",
              backgroundColor: "#0540F2", // Button color
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
              zIndex: 3, // Ensure the button appears above the image and text
            }}
          >
            See More
          </button> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCoreMember;
