import React from "react";

const services = [
  {
    title: "Adventure Activities",
    description:
      "Experience thrilling adventures like paragliding, zip-lining, and trekking in the Annapurna region.",
    img: "/public/images/a.webp",
  },
  {
    title: "Accommodation",
    description:
      "Pokhara offers a range of accommodations, from luxury resorts to budget-friendly lodges with stunning mountain views.",
    img: "/public/images/b.webp",
  },
  {
    title: "Transportation",
    description:
      "Get around easily with taxis, rental scooters, and guided tour services.",
    img: "/public/images/c.jpg",
  },
  {
    title: "Food & Restaurants",
    description:
      "Enjoy delicious Nepali cuisine, as well as international dishes in Pokhara’s lakeside restaurants.",
    img: "/public/images/d.jpg",
  },
  {
    title: "Shopping & Souvenirs",
    description:
      "Shop for handicrafts, trekking gear, and beautiful Thangka paintings as souvenirs from Pokhara.",
    img: "/public/images/e.jpg",
  },
  {
    title: "Wellness & Relaxation",
    description:
      "Relax with yoga retreats, spa treatments, and meditation centers.",
    img: "/public/images/f.jpg",
  },
];

function Services() {
  return (
    <>
      <div className="h-50 w-full bg-gradient-to-b from-blue-600/60 to-blue-700/70 flex justify-center items-center mt-16">
        <h2 className="text-white text-4xl font-bold uppercase tracking-wider">
          Services
        </h2>
      </div>
      <div className="max-w-6xl mx-auto py-12 px-6 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold mt-4">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
