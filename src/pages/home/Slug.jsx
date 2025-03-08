import React from "react";
import data from "../../assets/data";
import { useParams } from "react-router-dom";

function Slug() {
  const { id } = useParams();
  const place = data.find((item) => item.id.toString() === id);

  if (!place) {
    return <h2 className="text-center text-2xl font-bold">Place Not Found</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto p-5">
      <section className="h-[90px] lg:h-[80px]"></section>
      <h1 className="text-4xl font-bold text-center mb-5">{place.title}</h1>
      <img
        src={place.image}
        alt={place.title}
        className="w-full h-[50vh] object-cover rounded-lg shadow-lg"
      />
      <p className="mt-5 text-lg">{place.description}</p>

      <div className="flex justify-center mt-5">
        <a
          href="/"
          className="py-2 px-6 bg-[#2ba1a1] text-white font-bold rounded-lg hover:bg-[#1e9596]"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default Slug;
