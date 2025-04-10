/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CustomCourseCard from "../../../customComponent/CustomCourseCard";
import myIcon from "../../../../src/assets/juCollege.svg";
import ba from "../../../../src/assets/ba.svg";
import bcom from "../../../../src/assets/bCom.svg";
import data from "../../../../src/assets/data.svg";
import iti from "../../../../src/assets/iti.svg";
import science from "../../../../src/assets/science.svg";
import { useNavigate } from "react-router-dom";

function NewTabContainer() {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();
  const coursDetails = [
    {
      id: 1,
      imageSrc: myIcon,
      title: "Arts 11th and 12th",
      description:
        "Our curriculum is designed to provide a strong academic foundation, equipping students with the knowledge, skills, and confidence needed for higher education and career success.",
      tagInfo: "Junior college",
      bgColor: "#B128FF",
      duration:"2"
    },
    {
      id: 2,
      imageSrc: data,
      title: "Commerce 11th and 12th",
      description:
        "The Commerce stream is an ideal choice for students completing their 10th standard, especially for those with a keen interest in business, finance, and economics",
      tagInfo: "Junior college",
      bgColor: "#2864FF",
      duration:"2"
    },
    {
      id: 3,
      imageSrc: ba,
      title: "Bachelor of Arts",
      description:
        "This program offers a comprehensive and flexible curriculum that provides students with a strong foundation in humanities and social sciences",
      tagInfo: "BA",
      bgColor: "#F2277E",
      duration:"3"
    },
    {
      id: 4,
      imageSrc: bcom,
      title: "Bachelor of Commerce",
      description:
        "This program prepares graduates for diverse career opportunities in banking, corporate sectors, and financial services",
      tagInfo: "BCom",
      bgColor: "#1EC902",
      duration:"3"
    },
    {
      id: 5,
      imageSrc: science,
      title: "Bachelor of Science Data Science",
      description:
        "The B.Sc. in Data Science program is designed to equip students with cutting-edge analytical skills, programming expertise, and statistical knowledge to extract meaningful insights from data",
      tagInfo: "BSc Data Science",
      bgColor: "#FE2323",
      duration:"4"
    },
    {
      id: 6,
      imageSrc: iti,
      title: "Bachelor of Science Information Technology",
      description:
        "Designed to meet the demands of the fast-evolving tech industry, this course covers software development, networking, database management, and cloud computing",
      tagInfo: "BSc IT",
      bgColor: "#FF7B1B",
      duration:"4"
    },
  ];

  const handleCardClick = (details) => {
    navigate(`/course-details/${details.id}`);
  };

  return (
    <div className="container mt-4">
    <div className="row">
      {coursDetails.map((val) => (
        <div key={val.id} className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center mb-4">
          <CustomCourseCard
            id={val.id}
            imageSrc={val.imageSrc}
            title={val.title}
            description={val.description}
            tagInfo={val.tagInfo}
            bgColor={val.bgColor}
            onCardClick={() => handleCardClick(val)}
            duration={val.duration}
          />
        </div>
      ))}
    </div>
  </div>
  );
}

export default NewTabContainer;
