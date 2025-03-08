import React from "react";
import Ramesh from "../assets/im.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import inverted from "../assets/inverted.svg";

const leadersData = [
  {
    id: 1,
    img: Ramesh,
    content: {
      name: "Dr. Ramesh Kumar Sachdeva",
      position: "Founder, RK Scollegekharadi",

      description: `
            A dynamic industrialist, educationalist and social worker, is the Chairman and 
            managing trustee of Data Systems Research Foundation. He is the visionary who established 
            DSS the first software and services company at Pune in 1976, with the objective to provide 
            affordable services to the industries at Pune to effectively use computer technology which 
            was nascent at Pune at that time. He expended significant effort in propagating computer 
            awareness at Pune. DSS brought Pune to the Software Services export map in 1980. He made 
            significant contribution in persuading Department of Electronics of the Govt. of India to 
            establish the first Software Technologies Park in India at Pune. DSRF have implemented Earn 
            & Learn Scheme, B.C. Scholarship, Free ship as well as special concession to Ladies.
          `,
    },
    reverse: false,
  },
  {
    id: 2,
    img: image2,
    content: {
      name: "Dr. Ramesh Kumar Sachdeva",
      position: "Founder, RK Scollegekharadi",
      description: `
            A dynamic industrialist, educationalist and social worker, is the Chairman and 
            managing trustee of Data Systems Research Foundation. He is the visionary who established 
            DSS the first software and services company at Pune in 1976, with the objective to provide 
            affordable services to the industries at Pune to effectively use computer technology which 
            was nascent at Pune at that time. He expended significant effort in propagating computer 
            awareness at Pune. DSS brought Pune to the Software Services export map in 1980. He made 
            significant contribution in persuading Department of Electronics of the Govt. of India to 
            establish the first Software Technologies Park in India at Pune. DSRF have implemented Earn 
            & Learn Scheme, B.C. Scholarship, Free ship as well as special concession to Ladies.
          `,
    },
    reverse: true,
  },
  {
    id: 3,
    img: image3,
    content: {
      name: "Dr. Ramesh Kumar Sachdeva",
      position: "Founder, RK Scollegekharadi",
      description: `
            A dynamic industrialist, educationalist and social worker, is the Chairman and 
            managing trustee of Data Systems Research Foundation. He is the visionary who established 
            DSS the first software and services company at Pune in 1976, with the objective to provide 
            affordable services to the industries at Pune to effectively use computer technology which 
            was nascent at Pune at that time. He expended significant effort in propagating computer 
            awareness at Pune. DSS brought Pune to the Software Services export map in 1980. He made 
            significant contribution in persuading Department of Electronics of the Govt. of India to 
            establish the first Software Technologies Park in India at Pune. DSRF have implemented Earn 
            & Learn Scheme, B.C. Scholarship, Free ship as well as special concession to Ladies.
          `,
    },
    reverse: false,
  },
];

function LeadersDesk() {
  return (
    <div className="container" style={{marginTop:'150px'}}>
      {leadersData.map((leader) => (
        <div
          key={leader.id}
          className={`row align-items-center ${
            leader.reverse ? "flex-row-reverse" : ""
          } mb-4`}
        >
          {/* Image Section */}
          <div className="col-12 col-md-4 text-center">
            <img
              src={leader.img}
              alt="Leader"
              className="img-fluid rounded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          {/* Content Section */}
          <div className="col-12 col-md-8">
            <h4>{leader.content.name}</h4>
            <h6 className="text-muted">~ {leader.content.position}</h6>
            <img
              src={inverted}
              alt="Icon"
              height={60}
              width={80}
              className="my-3"
            />
            <p className="text-justify">{leader.content.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default LeadersDesk;
