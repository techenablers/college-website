/* eslint-disable no-unused-vars */
import React from "react";
import "./Infrastructure.css";
import library from "../../assets/library.svg";
import Administration from "../../assets/Administration.svg";
import Classroom from "../../assets/Classroom.svg";
import Playground from "../../assets/Playground.svg";
import Staffroom from "../../assets/Staffroom.svg";
import CustomePageHeader from "../../customComponent/CustomePageHeader";

function Infrastructure() {
  const InfrastructureImg = [
    {
      id: 1,
      srctag: Playground,
      heading: "Playground",
      description: "Room for sports and relaxation.",
    },
    {
      id: 1,
      srctag: Administration,
      heading: "Administration Office",
      description: "Hub for all your admin needs.",
    },
    {
      id: 1,
      srctag: Classroom,
      heading: "Classroom",
      description: "Modern spaces for focused learning.",
    },
    {
      id: 1,
      srctag: Staffroom,
      heading: "Staffroom",
      description: "Faculty’s base for student support.",
    },
  ];

  return (
    <div style={{ position: "relative", top: '52px', marginBottom: '160px'}}>
      {/* About Us Section */}
      <CustomePageHeader header={"Infrastructure"}/>

      {/* Library Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src={library} className="img-fluid br" alt="Library" />
          </div>
          <div className="col-md-6">
            <h4>Library</h4>
            <p style={{ textAlign: "justify" }}>
              Dr. R.K.S. Jr. College boasts a well-stocked library with an
              extensive collection of books, journals, and research papers
              covering various subjects, including Arts, Commerce, Computer
              Studies, and Management. The library provides reference and home
              lending services, allowing students to enhance their academic
              knowledge easily.
            </p>
            <p className="mt-2" style={{ textAlign: "justify" }}>
              The library is digitally cataloged, enabling students and faculty
              to locate and access resources efficiently. The library fosters a
              conducive learning environment with a quiet reading zone, computer
              access, and knowledgeable staff. It plays a vital role in academic
              research, competitive exam preparation, and knowledge enhancement,
              making it an invaluable resource for students.
            </p>
          </div>
        </div>
      </div>

      {/* Computer Laboratory Section */}
      <div className="container my-5 computer-lab">
        <div className="row pt-4 px-5 computer-lab-direction">
          <div className="col-md-6 mt-3">
            <h4>Computer Laboratory</h4>
            <p className="mt-5" style={{ textAlign: "justify" }}>
              Dr. R.K.S.Jr. college has well equipped state-of-the-art computer
              laboratory with wide range of systems for the exclusive use of
              students and faculty members. The laboratory hardware is up-graded
              as and when the need arises. The Institute has wide range of
              licensed software. The internet facility is available to staff &
              students. Further details of the lab facilities are available in
              the institute’s office.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={library} className="img-fluid bt" alt="Library" />
          </div>
        </div>
      </div>

      {/* Other Infrastructure Section */}
      <div className="container text-center my-5">
        <span style={{ marginRight: "8px" }}>
          <i
            className="fa fa-book"
            aria-hidden="true"
            style={{ fontSize: "16px" }}
          ></i>{" "}
          Other Infrastructure
        </span>
        <h3>Campus extras that elevate your journey.</h3>
        <div className="row g-3 rowGap mt-5 ">
          {InfrastructureImg.map((item) => (
            <div
              key={item.id}
              className="col-12 col-md-6 col-lg-3 position-relative"
            >
              <img
                src={item.srctag}
                className="img-fluid rounded shadow"
                alt="Infrastructure"
              />
              <div className="position-absolute end-0 m-2 other-infra shadow">
                <div>
                  <h6>{item.heading}</h6>
                  <p>{item.description}</p>
                </div>
                {/* <img src={link} className="img-fluid link-out" alt="New" /> */}
                <div className="link-out">
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="svg-path" d="M14.6123 5.65078V12.6999C14.6123 12.9642 14.5021 13.2065 14.3259 13.3828C14.1276 13.581 13.8853 13.6912 13.621 13.6912C13.0703 13.7132 12.6077 13.2506 12.6297 12.6999L12.6077 8.05189L5.86696 14.7926C5.47045 15.1891 4.85365 15.1891 4.45714 14.7926C4.08266 14.4181 4.06063 13.7793 4.45714 13.3828L11.1978 6.64206L6.57187 6.64206C6.02116 6.66409 5.55856 6.2015 5.58059 5.65078C5.55856 5.10007 6.02116 4.63748 6.57187 4.6595H13.621C14.1717 4.63748 14.6343 5.10007 14.6123 5.65078Z" fill="black"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;
