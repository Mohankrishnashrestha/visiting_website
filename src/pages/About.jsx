import React from "react";

function About() {
  return (
    <div>
      <div className="h-50 w-full bg-gradient-to-b from-blue-600/60 to-blue-700/70 flex justify-center items-center mt-16">
        <h2 className=" text-white text-4xl font-bold uppercase tracking-wider">
          About
        </h2>
      </div>
      <div className="max-w-6xl mx-auto text-justify p-4 shadow">
        <div className="flex items-center justify-center text-4xl mb-8 font-bold mt-15">
          Pokhara
        </div>

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
