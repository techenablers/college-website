// import React from 'react'
import myIcon from "../../assets/image.svg";
import CustomCourseCard from "../../customComponent/CustomCourseCard";

function CookingCompetition() {
  const coursDetails = [
    {
      id: 1,
      imageSrc: myIcon,
      title: "Foundation course to under stand about softwere",
      description:
        "Standards in leadership skills syneze optimal rather than......",
    },
    {
      id: 2,
      imageSrc: myIcon,
      title: "Foundation course to under stand about softwere",
      description:
        "Standards in leadership skills syneze optimal rather than......",
    },
    {
      id: 3,
      imageSrc: myIcon,
      title: "Foundation course to under stand about softwere",
      description:
        "Standards in leadership skills syneze optimal rather than......",
    },
    {
      id: 4,
      imageSrc: myIcon,
      title: "Foundation course to under stand about softwere",
      description:
        "Standards in leadership skills syneze optimal rather than......",
    },
    {
      id: 5,
      imageSrc: myIcon,
      title: "Foundation course to under stand about softwere",
      description:
        "Standards in leadership skills syneze optimal rather than......",
    },
    {
      id: 6,
      imageSrc: myIcon,
      title: "Foundation course to under stand about softwere",
      description:
        "Standards in leadership skills syneze optimal rather than......",
    },
  ];
  return (
    <div className='d-flex flex-wrap'>
       {/*  {coursDetails?.map((val)=>(
            <div key={val.id}>
            <CustomCourseCard
            imageSrc={val.imageSrc}
            title={val.title}
            description={val.description}
            // footerContent={}
            />
            </div>
        ))} */}
                   <p>i am event4</p>

    </div>
  )
}

export default CookingCompetition