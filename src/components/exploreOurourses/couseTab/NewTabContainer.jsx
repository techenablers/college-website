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
      title: "Arts Commerce and Science 11th and 12th",
      description:
        "Our curriculum is designed to provide a strong academic foundation, equipping students with the knowledge, skills, and confidence needed for higher education and career success.",
      tagInfo: "Junior college",
      bgColor: "#B128FF",
    },
    {
      id: 2,
      imageSrc: data,
      title: "Bachelor of Science Data Science",
      description:
        "The B.Sc. in Data Science program is designed to equip students with cutting-edge analytical skills, programming expertise, and statistical knowledge to extract meaningful insights from data.",
      tagInfo: "BSC DataScience",
      bgColor: "#2864FF",
    },
    {
      id: 3,
      imageSrc: iti,
      title: "Bachelor of Science Information Technology",
      description:
        "Designed to meet the demands of the fast-evolving tech industry, this course covers software development, networking, database management, and cloud computing",
      tagInfo: "Bsc Information Technology",
      bgColor: "#F2277E",
    },
    {
      id: 4,
      imageSrc: science,
      title: "Bachelor of Science",
      description:
        "This program is designed to provide students with a strong foundation in scientific principles across multiple disciplines",
      tagInfo: "Bachelor of Science",
      bgColor: "#1EC902",
    },
    {
      id: 5,
      imageSrc: bcom,
      title: "Bachelor of Commerce",
      description:
        "This program prepares graduates for diverse career opportunities in banking, corporate sectors, and financial services",
      tagInfo: "Bachelor of Commerce",
      bgColor: "#FE2323",
    },
    {
      id: 6,
      imageSrc: ba,
      title: "Bachelor of Arts",
      description:
        "This program offers a comprehensive and flexible curriculum that provides students with a strong foundation in humanities and social sciences",
      tagInfo: "Bachelor of Arts",
      bgColor: "#FF7B1B",
    },
  ];

  const handleCardClick = (details) => {
    console.log("i am clicking the crd");
    console.log("2", details);
    // setSelectedCard(details);
    // navigate(`/course-details/${details.id}`);
    navigate('/course-details');
  };

  return (
    <div className="d-flex flex-wrap justify-content-center align-item-center">
      {coursDetails?.map((val) => (
        <div key={val.id}>
          <CustomCourseCard
            id={val.id}
            imageSrc={val.imageSrc}
            title={val.title}
            description={val.description}
            tagInfo={val.tagInfo}
            bgColor={val.bgColor}
            onCardClick={() => handleCardClick(val)}
          />
        </div>
      ))}
    </div>
  );
}

export default NewTabContainer;
