/* eslint-disable no-unused-vars */
import React from "react";
import Gallery from "react-photo-gallery";
import dance from "../../assets/All_photos/dance.svg";
import image47 from "../../assets/All_photos/image 47.svg";
import image48 from "../../assets/All_photos/image 48.svg";
import image51 from "../../assets/All_photos/image 51.svg";
import image52 from "../../assets/All_photos/image 52.svg";
import image53 from "../../assets/All_photos/image 53.svg";
import image56 from "../../assets/All_photos/image 56.svg";
import image57 from "../../assets/All_photos/image 57.svg";
import image58 from "../../assets/All_photos/image 58.svg";

function GalleryComponent() {
  const photos = [
    { src: dance, width: 1, height: 1 },
    { src: image47, width: 4, height: 3 },
    { src: image48, width: 3, height: 4 },
    { src: image51, width: 4, height: 3 },
    { src: image52, width: 3, height: 4 },
    { src: image53, width: 4, height: 3 },
    { src: image56, width: 3, height: 4 },
    { src: image57, width: 4, height: 3 },
    { src: image58, width: 3, height: 4 },
  ];

  const columnConfig = (containerWidth) => {
    if (containerWidth < 600) return 1; // Mobile - 1 per row
    if (containerWidth < 1024) return 2; // Tablet - 2 per row
    return 3; // Desktop - 3 per row
  };

  return (
    <div style={{ padding: "10px" }}>
      <Gallery
        photos={photos}
        columns={columnConfig}
        direction="row"
        renderImage={({ photo }) => (
          <div style={{ padding: "2px" }}>
            {" "}
            {/* Adds gap between images */}
            <img
              src={photo.src}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px", // Optional: Rounded corners for a cleaner look
              }}
            />
          </div>
        )}
      />
    </div>
  );
}

export default GalleryComponent;
