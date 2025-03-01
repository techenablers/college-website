/* eslint-disable no-unused-vars */
import React from 'react'
import '../../../src/styles/WhatWeOfferUi.css'


function WhatWeOfferUi() {
    return (
        <div className="container" style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
          <div className="scooped-blue-circle"></div>
          <div className="scooped-square">
            <div className="scooped-ball"></div>
          </div>
        </div>
    );
}

export default WhatWeOfferUi