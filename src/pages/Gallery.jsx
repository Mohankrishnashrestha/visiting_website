import React from "react";
import data from "../assets/data";

function Gallery() {
  return (
    <div>
      <section className="h-[90px] lg:h-[80px]" />

      <div className="bg-[#00000063] h-40 w-screen relative flex justify-center items-center">
        <div className="absolute">
          <h2 className="text-white text-2xl">Galery</h2>
        </div>
      </div>

      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
          {data.map((users, index) => (
            <li
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              <img
                src={users.image}
                alt="User"
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{users.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Gallery;
