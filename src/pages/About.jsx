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
      <div className="lg:mx-70 text-justify p-4 shadow-2xl">
        <div className="text-4xl mb-4 font-bold  "> Pokhara</div>
        <p>
          Pokhara’s tranquil beauty has been the subject of inspiration for many
          travel writers. Its pristine air, spectacular backdrop of snowy peaks,
          blue lakes and surrounding greenery make it ‘the jewel in the
          Himalaya’, a place of remarkable natural disposition. With the
          magnificent Annapurna range forming the backdrop and the serenity of
          the Cluster of 9 Lakes with three major ones - Phewa, Rupa and Begnas
          – Pokhara is a great destination for a weekend getaway as well as a
          long relaxing holiday. Pokhara Valley, gateway to the Annapurna region
          where many a trekker finds his Shangri-la, sits high on the list of
          ‘must visit’ places in Nepal.
        </p>
        <div className="mt-4">
          <p>
            Pokhara once lay on the important trade route between India and
            Tibet. To this day, mule trains set up camps on the city outskirts,
            bringing goods from remote Himalayan regions including Mustang.
            Gurungs and Magars, who have earned world-wide fame as fierce Gurkha
            warriors, are predominant here. Thakalis, indigenous of the Thak
            Khola region of Mustang, are known for their entrepreneurship and
            run tea houses along the trek routes in the Annapurna region. The
            Pokhara is best known for the stunning view of the Annapurna range.
            It is perhaps one of the few places on earth from where mountains
            above 6,000 m can be seen unobstructed from an altitude of 800 m
            within the distance of 28 km.
          </p>
          <p className="mt-4">
            Many find Machhapuchhre's razor-edged "Fish Tail" peak piercing the
            skyline or reflected in the still waters of Phewa Lake to be their
            most lasting impression of Nepal. Pokhara Valley has in recent years
            grown as a destination for adventure sports such as paragliding and
            ultra-light aircraft flights. And with boating, bird watching,
            trekking and mountain biking as other attractions, Pokhara has it
            all.
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
          <div>
            <div className="font-bold mb-2 mt-4 text-2xl">
              ACCESS/ ACCOMMODATION
            </div>
            <p>
              One can fly directly into Pokhara from Kathmandu. One can also
              take a bus or drive to Pokhara from the border towns.
              Accommodation in Pokhara ranges from luxurious world-class hotels
              and resorts that provide modern services and amenities to
              comfortable lodges with basic amenities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
