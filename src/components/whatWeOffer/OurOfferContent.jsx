// import React from 'react'
import EduraCourseinfo from './EduraCourseinfo';
import TestimonialsContent from '../testimonials/TestimonialsContent';

function OurOfferContent() {
  return(
    <div className="d-flex justify-content-center">
      <div
        style={{
          width: "100%",
          background: "linear-gradient(to top, #DBEDFF 25%, #ffffff 65%)", // Gradient from #DBEDFF to #ffffff
          height: "auto",
        }}
      >
        {/* Heading with background and styling */}
        <p
          className="d-inline-block"
          style={{
            height: "26px",
            backgroundColor: "#E6E6E6",
            borderRadius: "10px",
            padding: "0 15px",
            lineHeight: "26px",
            marginTop: "20px", // Added margin for better spacing
          }}
        >
          <span style={{ marginRight: "8px" }}>
            <i
              className="fa fa-book"
              aria-hidden="true"
              style={{ fontSize: "16px" }}
            ></i>{" "}
            What We Offer
          </span>
        </p>

        {/* Add your offer content here */}
        <div style={{ marginTop: "20px", padding: "10px", color: "white" }}>
          {/* Example content */}
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

        <div className="btn-group" role="group" aria-label="Basic outlined example">
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
    </div>
  );
}

export default OurOfferContent