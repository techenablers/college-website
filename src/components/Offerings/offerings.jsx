import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Offerings.css";
import deskrop from "../../../src/assets/Icon.svg";
import art from "../../../src/assets/art.svg";
import man from "../../../src/assets/man.svg";

const Offerings = () => {
  return (
    <section className="offerings-section text-white py-5">
      <div className="container text-center">
        <h2 className="fw-bold">What we are offering ?</h2>
        <p className="lead">
          Your future starts here with our student-centered learning, <br />
          career-oriented programs, and an inspiring academic <br />{" "}
          environment.
        </p>

        <div className="row mt-5">
          {/* Commerce Stream */}
          <div className="col-md-4">
            <div className="p-4">
              <img src={deskrop} />
              <h4 className="fw-bold">Commerce Stream</h4>
              <p>
                Commerce education that blends <br />
                theory, real-world applications, and <br />
                career-oriented training for future <br />
                success. .
              </p>
            </div>
          </div>

          {/* Arts Stream */}
          <div className="col-md-4">
            <div className="p-4">
              <img src={art} />
              <h4 className="fw-bold">Arts Stream</h4>
              <p>
                Nurture your passion for culture,
                <br /> history, and creativity with our expert-led <br />
                Arts courses.
              </p>
            </div>
          </div>

          {/* Science Stream */}
          <div className="col-md-4">
            <div className="p-4">
              <img src={man} />
              <h4 className="fw-bold">Science Stream</h4>
              <p>
                Gain expertise in information technology <br />
                and data science for limitless <br />
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
