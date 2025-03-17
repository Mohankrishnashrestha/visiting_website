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
    <div>
      <section className="h-[90px] lg:h-[80px]" />

      <div className="bg-[#00000063] h-40 w-screen flex justify-center items-center">
        <h2 className="text-white text-2xl">Gallery</h2>
      </div>

      <div className="p-5">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}

export default Gallery;
