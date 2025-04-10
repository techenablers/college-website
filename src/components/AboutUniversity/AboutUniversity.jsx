/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUniversity.css";
import AboutUniversityImage from "../../assets/AboutUniversity.svg";

const AboutUniversity = () => {
  return (
    <section className="about-university py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div
              style={{
                width: "100%",
                height: "auto",
                overflow: "hidden",
                borderRadius: "0.375rem",
              }}
            >
              <img
                src={AboutUniversityImage}
                alt="About University"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // ensures it fills the space nicely
                  borderRadius: "0.375rem",
                }}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-md-6">
            <p className="course-header">
              <span>
                <i
                  className="fa fa-university"
                  aria-hidden="true"
                  style={{ fontSize: "16px" }}
                ></i>{" "}
                About Our Institute
              </span>
            </p>
            <h2 className="fw-bold">
              About Data Systems Research Foundation (DSRF) & Dr. RKS College
            </h2>
            <p style={{ textAlign: "justify" }}>
              Established in 1983, Data Systems Research Foundation (DSRF) is a
              prestigious non-profit educational trust founded by DSS Systems
              and Software Technology Ltd., Pune, a well-respected name in the
              software industry. Affiliated with the Savitribai Phule Pune
              University, DSRF provides high-quality education that blends
              academic knowledge with real-world applications. The institute is
              committed to fostering a professional outlook in students through
              a practical and industry-relevant curriculum. With a mission to
              bridge the gap between education and employment, DSRF has
              successfully trained and mentored over 2,500 students, helping
              them achieve their career aspirations. The foundation also extends
              financial support through programs like the Earn & Learn Scheme
              for students below the poverty line, Scholarships, and special
              concessions for women to ensure that education remains accessible
              to all.
            </p>
            <p style={{ textAlign: "justify" }}>
              Under the umbrella of DSRF, Dr. RKS College offers Junior and
              Senior College programs in Arts, Commerce, and Science streams,
              catering to students with diverse academic interests. The
              institute stands out for its state-of-the-art infrastructure,
              experienced faculty, career-oriented training, and student-centric
              approach. Beyond academics, DSRF focuses on holistic development
              through extracurricular activities, skill enhancement workshops,
              and physical fitness initiatives. Our commitment to excellence,
              innovation, and student success sets us apart. Our commitment to
              excellence, innovation, and student success sets us apart
            </p>
            <button className="btn btn-primary mt-3">About More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUniversity;
