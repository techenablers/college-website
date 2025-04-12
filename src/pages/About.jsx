/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fax from "../assets/fax.svg";
import itManagement from "../assets/itManagement.svg";
import apply_now from "../assets/blog.svg";
import mission1 from "../assets/mission1.svg";
import mission2 from "../assets/mission2.svg";
import mission3 from "../assets/mission3.svg";
import vission1 from "../assets/vission1.svg";
import vission2 from "../assets/vission2.svg";
import vission3 from "../assets/vission3.svg";
import CustomePageHeader from "../customComponent/CustomePageHeader";

const About = () => {
  const vissonAndMission = [
    {
      id: 1,
      srcImg: vission1,
      content:
        "To be a leading institute in higher education, excelling in technology, management, and research.",
    },
    {
      id: 2,
      srcImg: vission2,
      content:
        "To nurture industry-ready professionals with a strong foundation in technical, leadership, and ethical values.",
    },
    {
      id: 3,
      srcImg: vission3,
      content: "To promote research, innovation, and skill-based learning.",
    },
  ];

  const mission = [
    {
      id: 1,
      srcImg: mission1,
      content:
        "Deliver high-quality education with a blend of traditional and modern learning methodologies. and research.",
    },
    {
      id: 2,
      srcImg: mission2,
      content:
        "Foster academic excellence, professional development, and employability skills., leadership, and ethical values.",
    },
    {
      id: 3,
      srcImg: mission3,
      content:
        "Provide a dynamic, inclusive learning environment to enhance critical thinking and problem-solving abilities.",
    },
  ];

  return (
    <div>
      <CustomePageHeader header={"About"}/>

      <div className="container my-4">
        {/* Our Story Section */}
        <div
          className="text-center text-white py-3"
          style={{
            backgroundColor: "#0540F2",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          Our Story
        </div>

        {/* Image and Text Section */}
        <div className="row align-items-center mb-4">
          <div className="col-md-4">
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#3C3C3C",
              }}
            ></div>
          </div>
          <div className="col-md-8">
            <p>
              The Data Systems Research Foundation (DSRF) is a premier
              educational institution and a non-profit trust established in 1983
              by DSS Systems and Software Technology Ltd., a leading software
              company in Pune. Recognized by the Government of Maharashtra and
              affiliated with Savitribai Phule Pune University, DSRF is
              committed to providing quality education in Information Technology
              (IT), Management, Commerce, and Arts. The institution emphasizes
              industry-oriented learning, research, and innovation, ensuring
              students are well-prepared for dynamic career opportunities.
            </p>
          </div>
        </div>

        {/* Text Only Section */}
        <div>
          <p>
            Ranked among the top institutes for the Master in Computer
            Management (MCM) course, DSRF has successfully trained over 2,500
            students who have secured rewarding careers in the IT industry,
            corporate sector, and entrepreneurship. The institute fosters
            holistic student development by integrating academic excellence,
            industry exposure, skill-based learning, and personality development
            programs.
          </p>
        </div>

        {/* Image & Text - Reversed for Alternating Layout */}
        <div className="row align-items-center mb-4">
          <div className="col-md-7">
            <p>
              To make education affordable and accessible, DSRF offers Earn &
              Learn programs, B.C. Scholarships, Freeships, and exclusive fee
              concessions for women students. The RKS College, an integral part
              of DSRF, continues to uphold high academic standards while
              expanding its curriculum to meet global education and industry
              demands.
            </p>
          </div>
          <div className="col-md-5">
            <div
              style={{
                width: "100%",
                height: "250px",
                backgroundColor: "#3C3C3C",
              }}
            ></div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="text-center my-4">
          <strong style={{ color: "#0540F2", fontSize: "10PX" }}>
            Why Choose Us?
          </strong>
          <h6>Your Path to Excellence Starts Here</h6>
          <div className="d-flex" style={{ gap: "10px" }}>
            <div className="card">
              <div className="card-body" style={{ padding: "50px 20px" }}>
                <img
                  src={apply_now}
                  alt="Icon"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "20px",
                    // backgroundColor: "#0540F2",
                    fill: "#0540F2",
                  }}
                />

                <h5>IT & Management</h5>
                <p>
                  {" "}
                  Top-Ranked Institute for IT & Management <br />
                  Courses
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body" style={{ padding: "50px 20px" }}>
                <img
                  src={apply_now}
                  alt="Icon"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "20px",
                    // backgroundColor: "#0540F2",
                    fill: "#0540F2",
                  }}
                />

                <h5>Total Career Boost</h5>
                <p>
                  {" "}
                  100% Placement Assistance & Career Support <br /> Scholarships
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body" style={{ padding: "50px 20px" }}>
                <img
                  src={apply_now}
                  alt="Icon"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "20px",
                    // backgroundColor: "#0540F2",
                    fill: "#0540F2",
                  }}
                />

                <h5>Financial Edge</h5>
                <p> Financial Aid & Concessions for Women</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div
          className="text-center text-white py-3"
          style={{
            backgroundColor: "#0540F2",
            borderRadius: "5px",
            margin: "20px 0",
          }}
        >
          “Your Vision of the future, is our Mission today.”
        </div>

        {/* History Section */}
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <span>Our Vision</span>
            <h4>Shaping Tomorrow’s Leaders</h4>
            <div className="container my-5">
              {vissonAndMission.map((item) => (
                <div key={item.id} className="d-flex align-items-center my-4">
                  <img
                    src={item.srcImg}
                    alt="Description"
                    className="img-fluid"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      marginRight: "30px",
                    }}
                  />
                  <div>
                    <p className="mb-0">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div
              style={{
                width: "100%",
                height: "400px",
                backgroundColor: "#D2E6E4",
                borderRadius: "20PX",
              }}
            ></div>
          </div>
        </div>

        <div className="row align-items-center mb-4 mt-3">
          <div className="col-md-6">
            <div
              style={{
                width: "100%",
                height: "400px",
                backgroundColor: "#D2E6E4",
                borderRadius: "20PX",
              }}
            ></div>
          </div>

          <div className="col-md-6">
            <span>Mission</span>
            <h4>Empowering Success</h4>
            <div className="container my-5">
              {mission.map((item) => (
                <div key={item.id} className="d-flex align-items-center my-4">
                  <img
                    src={item.srcImg}
                    alt="Description"
                    className="img-fluid"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      marginRight: "15px",
                    }}
                  />
                  <div>
                    <p className="mb-0">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
