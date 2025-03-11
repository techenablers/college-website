/* eslint-disable no-unused-vars */
import React from "react";
import Ramesh from "../assets/im.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import inverted from "../assets/inverted.svg";
import book from "../assets/book.svg";
import leaderImg from "../assets/leaderImg.svg";

const leadersData = [
  {
    id: 1,
    img: Ramesh,
    reverse: false,
    content: {
      name: "Dr. Ramesh Kumar Sachdeva",
      position: "Founder, RK Scollegekharadi",
      description: {
        description1:
          "Dr. Ramesh Kumar Sachdeva is a visionary industrialist, educationist, and social reformer who has played a pivotal role in shaping India’s IT landscape. Recognizing the transformative power of technology, he founded DSS Systems in 1976, pioneering software services in Pune when computer technology was still in its infancy. Under his leadership, DSS positioned Pune on the global software services map by 1980. His relentless efforts also led to the establishing of India’s first Software Technology Park in Pune, in collaboration with the Government of India’s Department of Electronics, laying the foundation for the city’s rise as an IT hub.",
        description2:
          "Dr. Sachdeva founded the Data Systems Research Foundation (DSRF) in 1983, driven by his commitment to education, innovation, and industry readiness. His mission was to bridge the gap between academia and industry by providing cutting-edge, practical education in IT and management. He championed inclusive and affordable learning, introducing scholarships, earn-and-learn programs, and special concessions for women, ensuring that quality education was accessible to all. His legacy inspires generations, fostering excellence and empowering students to become future industry leaders.",
      },
    },
  },

  {
    id: 2,
    img: image2,
    content: {
      name: "Dr. Ramesh Kumar Sachdeva",
      position: "Founder, RK Scollegekharadi",
      description: {
        description1:
          "Prof. Dr. M. B. Sonawane is a distinguished academician and an expert in Business Administration with extensive experience in education and research. He holds M.Com, M.Phil, and Ph.D. degrees in Business Administration and has dedicated his career to advancing commerce and management studies.",
        description2:
          "Dr. Sonawane previously served as Professor and Head of the Business Practices Department at Ness Wadia College of Commerce. He has been an esteemed Research Guide in the Faculty of Commerce & Management at the University of Pune, mentoring numerous scholars in Business Practices, Business Administration, and Organizational Management. Since 1990, he has guided 33 Ph.D. scholars and over 237 M.Com students in their research projects",
        description3:
          "He has been a Board of Studies (BOS) member at Pune University twice (1996–2001, 2010–2015) and has contributed significantly to syllabus restructuring, eligibility committees, and examination panels. He is also associated with multiple universities, including JJTI, Bharati Vidyapeeth, and YCMOU, as a research guide.",
        description4:
          "A prolific author, Dr. Sonawane has published 16 books for undergraduate and postgraduate studies, including an international publication. He has presented over 50 research papers at national and international conferences and has evaluated multiple Ph.D. theses as an external examiner. His leadership at DSRF continues to inspire academic excellence and professional growth.",
      },
    },
    reverse: true,
  },
  {
    id: 3,
    img: image3,
    content: {
      name: "Dr. Ramesh Kumar Sachdeva",
      position: "Founder, RK Scollegekharadi",
      description: {
        description1:
          "Prof. Nisha Sonawane is a dedicated academician and administrator with a strong commerce and management education background. She holds degrees in B.Com, M.Com, PGDBM, and MBS from esteemed institutions, including Ness Wadia College of Commerce and Data Systems Research Foundation (DSRF).",
        description2:
          "With a passion for education and student development, she began her career as an Assistant Professor at DSRF from 2014 to 2016. Since September 2016, she has been serving as the Principal of Dr. RKS Arts & Commerce College, Pune, where she continues to foster academic excellence and holistic student growth.",
        description3:
          "Beyond academics, Prof. Sonawane is actively involved in extracurricular initiatives, including Soft Skills Development programs to enhance student employability. She has received several accolades, including the Best Ness Girl Principal’s Award (2011-12) and has represented her institutions in state-level football tournaments",
        description4:
          "With her leadership, Dr. RKS Arts & Commerce College continues to uphold its commitment to academic excellence, research, and student empowerment.",
      },
    },
    reverse: false,
  },
];

function LeadersDesk() {
  return (
    <div className="container-fluid " style={{ marginTop: "100px" }}>
      <div
        style={{
          backgroundColor: "#F7F8FD",
          width: "100%",
          height: "300px",
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={book} style={{ position: "inherit", left: "20px" }} />
        <h4 style={{ color: "#000" }}>Placement</h4>
      </div>

      {leadersData.map((leader) => (
        <div
          key={leader.id}
          className={`row justify-content-center align-items-center  ${
            leader.reverse ? "flex-row-reverse" : ""
          } mb-4`}
          style={{
            padding: "30px 0",
            backgroundColor: leader.id === 2 ? "#F5F5FE" : "transparent",
          }}
        >
          {/* Image Section */}
          <div className="col-12 col-md-4 text-start">
            <img
              src={leaderImg}
              style={{ color:"#D7D5D5",width: "150px", height: "90px",left:'50px',position:'relative' }}
              alt="Leader"
            />
            <img
              src={leader.img}
              alt="Leader"
              className="img-fluid rounded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          {/* Content Section */}
          <div className="col-12 col-md-6">
            <h4>{leader.content.name}</h4>
            <h6 className="text-muted">~ {leader.content.position}</h6>
            <img
              src={inverted}
              alt="Icon"
              height={60}
              width={80}
              className="my-3"
            />

            {/* Dynamic Description Rendering */}
            {Object.values(leader.content.description).map((desc, index) => (
              <p key={index} className="text-justify mb-3" style={{textAlign:'justify', wordSpacing:'2px'}}>
                {desc}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default LeadersDesk;
