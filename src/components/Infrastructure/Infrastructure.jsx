/* eslint-disable no-unused-vars */
import React from "react";
import "./Infrastructure.css"
import library from "../../assets/library.svg";
import Administration from "../../assets/Administration.svg";
import Classroom from "../../assets/Classroom.svg";
import Playground from "../../assets/Playground.svg";
import Staffroom from "../../assets/Staffroom.svg";
import link from "../../assets/link_out.svg";

function Infrastructure() {
  const InfrastructureImg = [
    { id: 1, srctag: Playground, heading: "Playground", description: "Room for sports and relaxation." },
    { id: 1, srctag: Administration, heading: "Administration Office", description: "Hub for all your admin needs." },
    { id: 1, srctag: Classroom, heading: "Classroom", description: "Modern spaces for focused learning." },
    { id: 1, srctag: Staffroom, heading: "Staffroom", description: "Faculty’s base for student support." },
  ];

  return (
    <div>
      {/* About Us Section */}
      <div className="bg-light w-100 py-5 d-flex justify-content-center mt-5">
        <h4 className="text-dark">Infrastructure</h4>
      </div>

      {/* Library Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src={library} className="img-fluid br" alt="Library" />
          </div>
          <div className="col-md-6">
            <h4>Library</h4>
            <p>
              Dr. R.K.S. Jr. College boasts a well-stocked library with an
              extensive collection of books, journals, and research papers
              covering various subjects, including Arts, Commerce, Computer
              Studies, and Management. The library provides reference and home
              lending services, allowing students to enhance their academic
              knowledge easily.
            </p>
            <p>
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
          <div className="col-md-6">
            <h4>Computer Laboratory</h4>
            <p>
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
        <h6>Other Infrastructure</h6>
        <h3>Campus extras that elevate your journey.</h3>
        <div className="row g-3 rowGap">
          {InfrastructureImg.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-3 position-relative">
              <img
                src={item.srctag}
                className="img-fluid rounded shadow"
                alt="Infrastructure"
              />
              <div
                className="position-absolute end-0 m-2 other-infra shadow"
              >
                <div>
                  <h6>{item.heading}</h6>
                  <p>
                    {item.description}
                  </p>
                </div>
                <img src={link} className="img-fluid link-out" alt="New" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;
