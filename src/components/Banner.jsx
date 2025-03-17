/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/Banner.css";
import enrollNow from "../assets/enroll-now.svg";
import EnrollNow from "./EnrollNow";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="banner">
      <div className="enroll-now" onClick={handleShowModal}>
        <a href="#enroll">
          <img src={enrollNow} alt="Enroll Now" />
        </a>
      </div>
      {showModal && <EnrollNow show={showModal} onClose={handleCloseModal} />}
    </div>
  );
};

export default Banner;
