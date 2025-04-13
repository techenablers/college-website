/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Header from "../Header";
import "../../styles/Layout.css";
import SchoolFooter from "../footer/SchoolFooter";
import enrollNow from "../../assets/enroll-now.svg";
import EnrollNow from "../EnrollNow";
import "../../styles/Banner.css";

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect (() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <div className="layout-container">
      <Header />
      <div className="enroll-now" onClick={handleShowModal}>
        <a href="#enroll">
          <img src={enrollNow} alt="Enroll Now" />
        </a>
      </div>
      {showModal && <EnrollNow show={showModal} onClose={handleCloseModal} />}

      <div className="content-wrapper">{children}</div>
      <SchoolFooter />
    </div>
  );
};

export default Layout;
