/* eslint-disable no-unused-vars */
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
          Your future starts here with our student-centered learning,<br/>
          career-oriented programs, and an inspiring academic <br/> environment.
        </p>

        <div className="row mt-5 gy-4"> {/* Added gy-4 for vertical spacing */}
          
          {/* Commerce Stream */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <div className="p-4 text-center">
              <img src={deskrop} alt="Commerce Stream" className="img-fluid" />
              <h4 className="fw-bold mt-3">Commerce Stream</h4>
              <p>
                Commerce education that blends theory, real-world applications, 
                and career-oriented training for future success.
              </p>
            </div>
          </div>

          {/* Arts Stream */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <div className="p-4 text-center">
              <img src={art} alt="Arts Stream" className="img-fluid" />
              <h4 className="fw-bold mt-3">Arts Stream</h4>
              <p>
                Nurture your passion for culture, history, and creativity with 
                our expert-led Arts courses.
              </p>
            </div>
          </div>

          {/* Science Stream */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <div className="p-4 text-center">
              <img src={man} alt="Science Stream" className="img-fluid" />
              <h4 className="fw-bold mt-3">Science Stream</h4>
              <p>
                Gain expertise in information technology and data science for 
                limitless opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
