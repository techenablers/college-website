       import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUniversity.css";
import carousel from "../../assets/corosal.svg"

const AboutUniversity = () => {
  return (
    <section className="about-university py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Carousel */}
          <div className="col-md-6">
            <div id="universityCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={carousel}
                    className="d-block w-100 rounded"
                    alt="House 1"
                  />
                  <div className="carousel-caption text-start">
                    <h5>$450,000</h5>
                    <p>Tringsiling House</p>
                    <p>📍 1187 Lake Forest City, TN</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={carousel}
                    className="d-block w-100 rounded"
                    alt="House 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={carousel}
                    className="d-block w-100 rounded"
                    alt="House 3"
                  />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#universityCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#universityCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Text Section */}
          <div className="col-md-6">
            <h6 className="text-primary fw-bold">ABOUT OUR UNIVERSITY</h6>
            <h2 className="fw-bold">Welcome to Edura University.</h2>
            <p>
              Collaboratively simplify user-friendly networks after principle-centered
              coordinate effective methods of empowerment. Distributed niche markets
              pursue market positioning web-readiness after resource-sucking
              applications.
            </p>
            <p>
            About Data Systems Research Foundation (DSRF) & Dr. RKS College
            </p>
            <p>
            Established in 1983, Data Systems Research Foundation (DSRF) is a prestigious non-profit educational trust founded by DSS Systems and Software Technology Ltd., Pune, a well-respected name in the software industry. Affiliated with the Savitribai Phule Pune University, DSRF provides high-quality education that blends academic knowledge with real-world applications. The institute is committed to fostering a professional outlook in students through a practical and industry-relevant curriculum. With a mission to bridge the gap between education and employment, DSRF has successfully trained and mentored over 2,500 students, helping them achieve their career aspirations. The foundation also extends financial support through programs like the Earn & Learn Scheme for students below the poverty line, Scholarships, and special concessions for women to ensure that education remains accessible to all.
            </p>
            <p>
            Under the umbrella of DSRF, Dr. RKS College offers Junior and Senior College programs in Arts, Commerce, and Science streams, catering to students with diverse academic interests. The institute stands out for its state-of-the-art infrastructure, experienced faculty, career-oriented training, and student-centric approach. Beyond academics, DSRF focuses on holistic development through extracurricular activities, skill enhancement workshops, and physical fitness initiatives. Our commitment to excellence, innovation, and student success sets us apart. We provide a dynamic learning environment, hands-on experience with emerging technologies, and strong industry collaborations that empower students to excel in their chosen fields. With a strong legacy and a future-focused vision, DSRF and Dr. RKS College continues to shape tomorrow's leaders, innovators, and professionals.
            </p>
            <button className="btn btn-primary mt-3">About More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUniversity;