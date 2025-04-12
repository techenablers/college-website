/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

function TestimonialsContent() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const testimonialInformation = [
    {
      name: "Pramod Barke",
      content:
        "Excellent classes, teachers are very sincere and friendly and give attention to every student.",
    },
    {
      name: "Payal Uppal",
      content: "All teachers are enthusiastic and ready to help.",
    },
    {
      name: "Shubham Pathare",
      content:
        "My sincere appreciation and gratitude to my teachers for their efforts in imparting quality education.",
    },
    /* new added */

    {
      name: "Rohan Wadmare",
      content:
        "I feel great studying at Dr. RKS Jr. college and getting opportunity and support from my teachers and mentors.",
    },
    {
      name: "Atharv Deshmukh",
      content:
        "Teachers are very caring and take great efforts for students’ well being.",
    },
    {
      name: "Rohan Wadmare",
      content:
        "My sincere appreciation and gratitude to my teachers for their efforts in imparting quality education.",
    },
    {
      name: "Shilpa K",
      content:
        "Quality education and extra-curricular activities boost self-confidence of students.",
    },
    {
      name: "Raj Sav",
      content:
        "I admire the most about our college is the support and guidance which I received from my teacher.",
    },
  ];

  const updateCardsPerPage = () => {
    const width = window.innerWidth;
    if (width < 576) {
      setCardsPerPage(1); // mobile
    } else if (width < 992) {
      setCardsPerPage(2); // tablet
    } else {
      setCardsPerPage(3); // desktop/laptop
    }
  };

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const handleNext = () => {
    if (startIndex < testimonialInformation.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div className="container">
      <p
        className="d-inline-block"
        style={{
          height: "26px",
          backgroundColor: "#E6E6E6",
          borderRadius: "10px",
          padding: "0 15px",
          lineHeight: "26px",
          marginTop: "20px",
        }}
      >
        <span style={{ marginRight: "8px" }}>
          <i
            className="fa fa-book"
            aria-hidden="true"
            style={{ fontSize: "16px" }}
          ></i>{" "}
          Testimonials
        </span>
      </p>

      <h5>What Our Students Say</h5>

      <TestimonialCard
        testimonials={testimonialInformation.slice(
          startIndex,
          startIndex + cardsPerPage
        )}
      />

      <div
        className="d-flex flex-row justify-content-center pb-4"
        style={{ gap: "15px" }}
      >
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          style={{
            backgroundColor: "#0540F2",
            color: "white",
            padding: "8px 10px",
            display: "inline-flex",
            cursor: "pointer",
            border: "none",
            borderRadius: "15px",
            position: "relative",
            right: "5px",
          }}
        >
          <i className="fa fa-angle-left" style={{ fontSize: "30px" }}></i>
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex >= testimonialInformation.length - 3}
          style={{
            backgroundColor: "#0540F2",
            color: "white",
            padding: "8px 10px",
            border: "none",
            cursor: "pointer",
            borderRadius: "15px",
          }}
        >
          <i className="fa fa-angle-right" style={{ fontSize: "30px" }}></i>
        </button>
      </div>
    </div>
  );
}

export default TestimonialsContent;
