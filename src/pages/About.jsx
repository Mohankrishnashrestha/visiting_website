import React from "react";

function About() {
  return (
    <div>
      <section className="h-[90px] lg:h-[80px]" />
      <div className="bg-[#00000063] h-40 w-screen relative flex justify-center items-center">
        <div className="absolute">
          <h2 className="text-white text-2xl">About</h2>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-justify p-4 shadow">
        <div className="text-4xl mb-4 font-bold">Pokhara</div>

        <img
          src="/public/images/pokhara/pokhara.jpg"
          alt="Pokhara Valley"
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />

        <p className="mt-4">
          Pokhara’s tranquil beauty has been the subject of inspiration for many
          travel writers. Its pristine air, spectacular backdrop of snowy peaks,
          blue lakes, and surrounding greenery make it ‘the jewel in the
          Himalaya’, a place of remarkable natural disposition.
        </p>

        <div className="mt-4">
          <p>
            Pokhara once lay on the important trade route between India and
            Tibet. To this day, mule trains set up camps on the city outskirts,
            bringing goods from remote Himalayan regions including Mustang.
          </p>

          <img
            src="/public/images/pokhara/phewa101.jpg"
            alt="Phewa Lake"
            className="w-full h-80 object-cover rounded-lg mt-4 shadow-lg"
          />

          <p className="mt-4">
            Many find Machhapuchhre's razor-edged "Fish Tail" peak piercing the
            skyline or reflected in the still waters of Phewa Lake to be their
            most lasting impression of Nepal.
          </p>
        </div>

        <div>
          <div>
            <div className="font-bold mb-2 mt-4 text-2xl">CLIMATE</div>
            <p>
              Pokhara is warmer than Kathmandu. Summers are warm and humid while
              winters are mild and pleasant.
            </p>
          </div>

          <img
            src="/public/images/pokhara/glide.jpg"
            alt="Pokhara Climate"
            className="w-full h-80 object-cover rounded-lg mt-4 shadow-lg"
          />

          <div>
            <div className="font-bold mb-2 mt-4 text-2xl">
              ACCESS/ ACCOMMODATION
            </div>
            <p>
              One can fly directly into Pokhara from Kathmandu. Accommodation in
              Pokhara ranges from luxurious world-class hotels to comfortable
              lodges with basic amenities.
            </p>
            <img
              src="/public/images/pokhara/lodge.jpg"
              alt="Pokhara Climate"
              className="w-full h-80 object-cover rounded-lg mt-4 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
