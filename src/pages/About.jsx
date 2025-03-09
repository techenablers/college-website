/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fax from "../assets/fax.svg";

const About = () => {
  const vissonAndMission = [
    {
      id: 1,
      srcImg: fax,
      content:
        "To be a leading institute in higher education, excelling in technology, management, and research.",
    },
    {
      id: 1,
      srcImg: fax,
      content:
        "To nurture industry-ready professionals with a strong foundation in technical, leadership, and ethical values.",
    },
    {
      id: 1,
      srcImg: fax,
      content: "To promote research, innovation, and skill-based learning.",
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundColor: "#F7F8FD",
          width: "100%",
          height: "300px",
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h4 style={{ color: "#000" }}>About Us</h4>
      </div>

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
              The story of St. Dominic College of Asia (SDCA) is a shining
              example of what a dedicated family is capable of achieving through
              perseverance, hardwork and cooperation. The College traces its
              roots with the establishment of the St. Dominic Medical Center
              (SDMC) in 1992 by founders Don Gregorio and Dona Dominga Andaman.
              Named in honor of Dominga, the SDMC has proven itself capable of
              meeting the medical demands of the community with its modern
              facilities and excellent services.
            </p>
            <p>
              In 2003, 12 years after the realization of the dream hospital in
              Cavite, St. Dominic College of Arts & Sciences was founded. The
              College is the family’s gift to the community and the
              manifestation of their commitment to provide excellent but
              affordable education in Bacoor and neighboring communities.
            </p>
          </div>
        </div>

        {/* Text Only Section */}
        <div>
          <p>
            Initially offering programs in Caregiving and BS Nursing in
            collaboration with the SDMC, St. Dominic has evolved into a
            full-fledged collegiate institution with fourt schools: School of
            Health Science Professions (SHSP), School of Arts, Sciences,
            Criminology & Education (SASCE), School of International Hospitality
            & Tourism Management (SIHTM), and School of Business & Computer
            Studies (SBCS).
          </p>
          <p>
            In 2007, the College embarked in an ambitious long term goal which
            aims to achieve a university status within the next 20 years. The
            plan for “The March Towards Excellence” was presented to the
            academic community and became the blueprint for development.
            Preparations towards accreditation of the academic programs was
            pursued in earnest. Rebranding strategies were also explored to make
            the College more relevant, responsive and congruent with the current
            trends and practices of a highly globalized educational system. In
            2009, St. Dominic College of Arts & Sciences was officially renamed
            St. Dominic College of Asia. The change of name was made to allow
            the College grow and provide more room for expansion in its programs
            and services in the years to come. This change redounds to the
            benefit of the students as it will eventually give them positional
            advantage in the crowded workplace in the competitive world for its
            name reflects the global standards that the College stands for.
          </p>
        </div>

        {/* Image & Text - Reversed for Alternating Layout */}
        <div className="row align-items-center mb-4">
          <div className="col-md-8">
            <p>
              In 2011, Dr. Marita A. Andaman-Rillo, eldest daughter of the
              founders, passed on the presidency of SDCA to the equally dynamic
              and capable youngest Andaman son, Dr. Gregorio A. Andaman, Jr.
              Constantly pushing for continuous change andimprovement, Dr.
              Andaman, in his first year of presidency, launched the
              institution’s battlecry “Revolutionizing Education”, a campaign
              reflective of the Caviteno’s aggresiveness and fighting spirit.
              Highlights of this academic transformation include the launch the
              Basic Education Unit (Preschool, Elementary, and High School), and
              accreditation of Business Administration, Information Technology,
              Education, Psychology, Hospitality Management and Nursing programs
              by the Philippine Association of Colleges and Universities
              Commission on Accreditation (PACUCOA), both in 2012.
            </p>
          </div>
          <div className="col-md-4">
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
          <span>Our Achievements</span>
          <h6>Best Education we are offering</h6>
          <div className="d-flex" style={{ gap: "10px" }}>
            <div className="card">
              <div className="card-body" style={{ padding: "50px 20px" }}>
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "20px",
                    backgroundColor: "#0540F2",
                  }}
                />
                <h5>Learn From Anywhere</h5>
                <p>
                  {" "}
                  Competently unleash competitive initiatives for alternative
                  interfaces. Enthusiastically supply resource eveling platforms
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body" style={{ padding: "50px 20px" }}>
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "20px",
                    backgroundColor: "#0540F2",
                  }}
                />

                <h5>Expert Instructor</h5>
                <p>
                  {" "}
                  Competently unleash competitive initiatives for alternative
                  interfaces. Enthusiastically supply resource eveling platforms
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body" style={{ padding: "50px 20px" }}>
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "20px",
                    backgroundColor: "#0540F2",
                  }}
                />

                <h5>24/7 Live Support</h5>
                <p>
                  {" "}
                  Competently unleash competitive initiatives for alternative
                  interfaces. Enthusiastically supply resource eveling platforms
                </p>
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
            <div
              style={{
                width: "100%",
                height: "500px",
                backgroundColor: "#0540F2",
              }}
            ></div>
          </div>
          <div className="col-md-6">
            <span>Our Vision</span>
            <h4>Know more about our Vision</h4>
            <div className="container my-5">
              {vissonAndMission.map((item) => (
                <div key={item.id} className="d-flex align-items-center my-4">
                  <img
                    src={item.srcImg}
                    alt="Description"
                    className="img-fluid"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      marginRight: "15px",
                    }}
                  />
                  <div>
                    <h6>Vision & Mission</h6>
                    <p className="mb-0">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <span>Vision</span>
            <h4>Shaping Tomorrow’s Leaders</h4>
            <div className="container my-5">
              {vissonAndMission.map((item) => (
                <div key={item.id} className="d-flex align-items-center my-4">
                  <img
                    src={item.srcImg}
                    alt="Description"
                    className="img-fluid"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      marginRight: "15px",
                    }}
                  />
                  <div>
                    <h6>Vision & Mission</h6>
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
                height: "500px",
                backgroundColor: "#0540F2",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
