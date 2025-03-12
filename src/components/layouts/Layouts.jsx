/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Header from '../Header';  
import Footer from '../footer/Footer'; 
import '../../styles/Layout.css';         

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="content-wrapper">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
