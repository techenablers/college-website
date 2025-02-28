import React from "react";
import arrow from "../../../src/assets/Vector.svg";
import WhatWeOfferUi from "./WhatWeOfferUi";

function EduraCourseinfo() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <span style={{ textAlign: "center" }}>
        <WhatWeOfferUi />
      </span>
      {/* <ScoopeContent/> */}
      <img src={arrow} alt="My SVG Icon" width={150} height={100} />
      <span>
        <WhatWeOfferUi />
      </span>
      <img src={arrow} alt="My SVG Icon" width={150} height={100} />
      <span>
        <WhatWeOfferUi />
      </span>

      <p></p>
    </div>
  );
}

export default EduraCourseinfo;
