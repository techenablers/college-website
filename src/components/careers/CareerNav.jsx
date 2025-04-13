/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavContent from "../../customComponent/CustomNavContent";

// Content Components
const AllPositions = () => (
  <div className="p-3">
    <CustomNavContent />
  </div>
);
const Engineering = () => (
  <div className="p-3">
    <CustomNavContent />
  </div>
);
const ProductDesign = () => (
  <div className="p-3">
    <CustomNavContent />
  </div>
);
const Operations = () => (
  <div className="p-3">
    <CustomNavContent />
  </div>
);
const Marketing = () => (
  <div className="p-3">
    <CustomNavContent />
  </div>
);

function  VerticalNavBar() {
  const [activeSection, setActiveSection] = useState("All Positions");

  // Component Mapping
  const renderContent = () => {
    switch (activeSection) {
      case "All Positions":
        return <AllPositions />;
      case "Engineering":
        return <Engineering />;
      case "Product Design":
        return <ProductDesign />;
      case "Operations":
        return <Operations />;
      case "Marketing":
        return <Marketing />;
      default:
        return <AllPositions />;
    }
  };

  return (
    <div className="d-flex justify-content-around">
      <div
        className="d-flex flex-column align-itam-end p-3 bg-light"
        style={{ width: "250px", position:'relative', left: "10%" }}
      >
        <ul className="nav flex-column">
          {[
            "All Positions",
            "Engineering",
            "Product Design",
            "Operations",
            "Marketing",
          ].map((section) => (
            <li key={section} className="nav-item">
              <a
                href="#"
                className={`nav-link text-nowrap ${
                  activeSection === section
                    ? "text-white bg-primary"
                    : "text-dark"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(section);
                }}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-grow-1">{renderContent()}</div>

      
    </div>
  );
}

export default VerticalNavBar;
