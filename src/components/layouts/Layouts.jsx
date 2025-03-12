import React from 'react';
import Header from './Header';  // Example Header component
import Footer from './Footer';  // Example Footer component
import './Layout.css';         // Layout-specific styles

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
