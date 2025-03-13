import "react";
import "../../styles/galleryStyle.css"
import dance from "../../assets/All_photos/dance.svg";
import image47 from "../../assets/All_photos/image 47.svg";
import image48 from "../../assets/All_photos/image 48.svg";
import image51 from "../../assets/All_photos/image 51.svg";
import image52 from "../../assets/All_photos/image 52.svg";
import image53 from "../../assets/All_photos/image 53.svg";
import image56 from "../../assets/All_photos/image 56.svg";
import image57 from "../../assets/All_photos/image 57.svg";
import image58 from "../../assets/All_photos/image 58.svg";


function AllPhotos() {
  const images = [
    { id: 1, src: dance },
    { id: 2, src: image47 },
    { id: 3, src: image48 },
    { id: 4, src: image51 },
    { id: 5, src: image52 },
    { id: 6, src: image53 },
    { id: 7, src: image56 },
    { id: 8, src: image57 },
    { id: 9, src: image58 },
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

