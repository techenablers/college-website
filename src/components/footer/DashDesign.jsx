import React from 'react'

function DashDesign() {
  return (
    <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
    }}
  >
    <div
      style={{
        width: "60px", // Larger dash
        height: "2px", // Dash height
        backgroundColor: "#0540F2",
      }}
    ></div>
    <div
      style={{
        width: "30px", // Smaller dash
        height: "2px", // Dash height
        backgroundColor: "#0540F2",
      }}
    ></div>
    <div
      style={{
        width: "30px", // Smaller dash
        height: "2px", // Dash height
        backgroundColor: "#0540F2",
      }}
    ></div>
  </div>
);
}

export default DashDesign
