
import React from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data";

function Slug() {
  const { id } = useParams();
  const user = data.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-red-500 text-2xl font-bold">User Not Found</h2>
      </div>
    );
  }
  console.log(user.image);
  return (
    <div className="max-w-4xl mx-auto p-5">
      <section className="h-[90px] lg:h-[80px]"></section>
      <div className="shadow-lg p-5 rounded-lg">
        <img
          src={user.image}
          alt="User"
          className="w-full h-full object-cover rounded transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
        />
        <h1 className="text-3xl font-bold mb-4">{user.title}</h1>
        <p className="text-lg text-gray-700">{user.description}</p>
      </div>
    </div>
  );
function Slug() {
  return <div className="p-50">Slug</div>;

}

export default Slug;
