import React from "react";
import logo from "../../assets/logo.png";
import you from "../../assets/you.svg";
import sky from "../../assets/sky.svg";
import linin from "../../assets/in.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

function CollegeInfoInFooter() {
  const footerSocialMediaIcons = [
    {
      faceBook: facebook,
      twitter: twitter,
      linkedIn: linin,
      youtube: you,
      skype: sky,
    },
  ];

  // Flatten the icons for easier mapping
  const icons = footerSocialMediaIcons[0]; // Since there is only one object in the array

  return (
    <div
      className="d-flex flex-column align-items-start justify-content-around"
     style={{color:"#ffffff", fontSize:'14px'}}
    >
      <img src={logo} width={250} height={75} alt="college logo" style={{paddingBottom:'10px'}} />

      <span>
        Continually optimize backward manufactured <br />
        products whilst communities negotiate life <br />
        compelling alignments
      </span>

      <div style={{paddingTop:'10PX',marginTop:'5px'}}>
        <h5>Follow Us On:</h5>
        <div style={{ display: "flex", gap: "10px" }}>
          {Object.keys(icons).map((key) => (
            <div
              key={key}
              style={{
                backgroundColor: "#1E2C46",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={icons[key]}
                alt={key}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollegeInfoInFooter;
