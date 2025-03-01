// import React from 'react'
import EduraCourseinfo from "./EduraCourseinfo";
import TestimonialsContent from "../testimonials/TestimonialsContent";
import "../../styles/OurOfferContent.css";

function OurOfferContent() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center what-we-offer-content">
      <p className="d-inline-block what-we-offer-header">
        <span>
          <i
            className="fa fa-book"
            aria-hidden="true"
            style={{ fontSize: "16px" }}
          ></i>{" "}
          What We Offer
        </span>
      </p>
      <div style={{ marginTop: "20px", padding: "10px", color: "white" }}>
        <p
          style={{
            fontFamily: "Hind, sans-serif",
            fontSize: "30px",
            fontWeight: "600px",
            color: "#0F2239",
          }}
        >
          How Does Edura Work Process?
        </p>
      </div>

      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button type="button" className="btn btn-outline-primary">
          Under Graduate
        </button>
        <button type="button" className="btn btn-outline-primary">
          post Graduate
        </button>
      </div>

      <div>
        <EduraCourseinfo />
      </div>
      <div>
        <TestimonialsContent />
      </div>
    </div>
  );
}

export default OurOfferContent;
