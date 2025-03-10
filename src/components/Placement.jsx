/* eslint-disable no-unused-vars */
import React from "react";
import placement1 from "../assets/placement1.svg";
import placement2 from "../assets/placement2.svg";

function Placement() {
  return (
    <div>
      {/* Placement Banner Section */}
      <div
        style={{
          backgroundColor: "#F7F8FD",
          width: "100%",
          height: "300px",
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Center vertically
        }}
      >
        <h4 style={{ color: "#000" }}>Placement</h4>
      </div>

      {/* First Content Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 p-3">
            <h3>
              Boarding and international <br />
              schools across the British <br />
              Isles are home to thousands <br />
              of international students <br />
              from around the world
            </h3>
            <p>
              Suspendisse mi tellus, ultrices eget velit et, euismod tincidunt
              purus. Curabitur fringilla et felis vel euismod. Nunc aliquam luctus
              libero, suscipit sollicitudin ipsum. In non elit ligula. Suspendisse
              sit amet convallis nibh, in tempus massa. Nunc luctus ipsum at ex
              varius, quis rhoncus est vestibulum.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 text-center">
            <img src={placement1} alt="Placement" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Second Content Section with Dark Background */}
      <div
        className="d-flex flex-wrap justify-content-center align-items-center p-4"
        style={{ backgroundColor: "#033F73" }}
      >
        <div className="col-lg-6 col-md-12 text-center p-3">
          <img src={placement2} alt="Placement 2" className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-12 text-white p-3">
          <h3>
            International universities <br />
            roadshows to schools across <br />
            the British Isles
          </h3>
          <p>
            Integer accumsan justo et dui tristique condimentum. Sed consectetur
            porta facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nunc non mi id justo tempus lobortis et a orci. Donec
            tincidunt eu enim cursus cursus. Quisque a est commodo, pretium
            tellus non, blandit est. Ut ultricies velit augue, quis facilisis
            ligula euismod in. Sed ut bibendum magna.
          </p>
          <p>
            Aenean dapibus sem tortor, in eleifend est viverra id. Vivamus
            facilisis sapien in mi lacinia porta. Aenean purus lorem, tincidunt
            sit amet dictum et, aliquam sit amet mauris. Quisque interdum diam
            purus, et elementum nisl faucibus ac. Aenean tincidunt purus
            convallis ultricies sodales. Pellentesque lectus neque, tincidunt
            vitae dolor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Placement;
