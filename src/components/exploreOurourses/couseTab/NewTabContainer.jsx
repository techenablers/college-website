/* eslint-disable no-unused-vars */
import React from "react";
import CustomCourseCard from "../../../customComponent/CustomCourseCard";
import myIcon from "../../../../src/assets/juCollege.svg";
import ba from "../../../../src/assets/ba.svg";
import bcom from "../../../../src/assets/bCom.svg";
import data from "../../../../src/assets/data.svg";
import iti from "../../../../src/assets/iti.svg";
import science from "../../../../src/assets/science.svg";

function NewTabContainer() {
  const coursDetails = [  
    {
      id: 1,
      imageSrc: myIcon,
      title: "Foundation course to under stand about softwere",
      description:
        "Standards in leadership skills syneze optimal rather than......",
        tagInfo:"Junior college",
        bgColor:'#B128FF'
    },
    {
      id: 2,
      imageSrc: data,
      title: "Foundation course to under stand about softwere",
      description:
        "Standards in leadership skills syneze optimal rather than......",
        tagInfo:"BSC DataScience",
        bgColor:'#2864FF'
    },
    {
      id: 3,
      imageSrc: iti,
      title: "Foundation course to under stand about softwere",
      description:
        "Standards in leadership skills syneze optimal rather than......",
        tagInfo:"Bsc Information Technology",
        bgColor:'#F2277E'
    },
    {
      id: 4,
      imageSrc: science,
      title: "Foundation course to under stand about softwere",
      description:
        "Standards in leadership skills syneze optimal rather than......",
        tagInfo:"Bachelor of Science",
        bgColor:'#1EC902'
    },
    {
      id: 5,
      imageSrc: bcom,
      title: "Foundation course to under stand about softwere",
      description:
        "Standards in leadership skills syneze optimal rather than......",
        tagInfo:"Bachelor of Commerce",
        bgColor:'#FE2323'
    },
    {
      id: 6,
      imageSrc: ba,
      title: "Foundation course to under stand about softwere",
      description:
        "Standards in leadership skills syneze optimal rather than......",
        tagInfo:"Bachelor of Arts",
        bgColor:'#FF7B1B'
    },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center align-item-center">
      {coursDetails?.map((val) => (
        <div key={val.id}>
          <CustomCourseCard
            imageSrc={val.imageSrc}
            title={val.title}
            description={val.description}
            tagInfo={val.tagInfo}
            bgColor={val.bgColor}
          />
        </div>
      ))}
    </div>
  );
}

export default NewTabContainer;
