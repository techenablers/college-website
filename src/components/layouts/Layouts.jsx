/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Header from "../Header";
import "../../styles/Layout.css";
import SchoolFooter from "../footer/SchoolFooter";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="content-wrapper">{children}</div>
      <SchoolFooter />
    </div>
  );
};

export default Layout;
