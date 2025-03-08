import "react";
import myIcon from "../../assets/image.svg";
import CustomCourseCard from "../../customComponent/CustomCourseCard";
import "../../styles/galleryStyle.css"
import iti from "../../assets/iti.svg"
import science from "../../assets/science.svg"
import data from "../../assets/data.svg"
import education from "../../assets/education.svg"
import man from "../../assets/man.svg"
import prof from "../../assets/prof.svg"


function AllPhotos() {
  const images = [
    { id: 1, src: prof },
    { id: 2, src: man },
    { id: 3, src: education },
    { id: 4, src: data },
    { id: 5, src: science },
    { id: 6, src: iti },
  ];

  return (
    <div className="gallery-container">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={`Image ${image.id}`}
          className="gallery-image"
        />
      ))}
    </div>
  );
}

export default AllPhotos;
