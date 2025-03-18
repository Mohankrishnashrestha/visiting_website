import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import data from "../assets/data";

const images = data.map((item) => ({
  original: item.image,
  thumbnail: item.image,
  description: item.title,
}));

function Gallery() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="h-50 w-full bg-gradient-to-b from-blue-600/60 to-blue-700/70 flex justify-center items-center mt-16">
        <h2 className="text-white text-4xl font-bold uppercase tracking-wider">
          Gallery
        </h2>
      </div>
      <div className="max-w-7xl mx-auto my-8 px-4">
        <ImageGallery
          items={images}
          showPlayButton={true}
          showFullscreenButton={true}
          showNav={true}
          showBullets={true}
          autoPlay={true}
        />
      </div>
    </div>
  );
}

export default Gallery;
