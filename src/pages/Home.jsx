import React, { useEffect, useState } from "react";

function Home() {
  const images = [
    "images/2.webp",
    "images/1.jpg",
    "images/2.webp",
    "images/1.jpg",
    "images/2.webp",
    "images/1.jpg",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <section className="h-[80px]" />
      <div className="w-ful">
        <div className="relative">
          <img
            src={images[index]}
            alt="images"
            className="w-full h-[50vh] lg:h-[100vh] object-cover rounded-lg transition-all duration-1000"
          />
          <div
            className="absolute inset-0 flex flex-col p-2 justify-center text-white"
            style={{
              background:
                "linear-gradient(180deg, rgba(93,85,85,0.5) 8%, rgba(106,104,104,0.5) 23%, rgba(203,148,148,0.5) 44%, rgba(195,166,166,0.5) 61%, rgba(135,113,113,1) 78%, rgba(52,52,52,1) 100%)",
            }}
          >
            <div className="  max-w-6xl mx-auto flex flex-col">
              <h3 className="text-2xl  font-medium">
                Explore Place In Pokhara
              </h3>

              <h1 className="text-white lg:text-9xl md:text-7xl text-5xl font-bold py-2 pb-5">
                Visit Pokhara
              </h1>
              <div>
                <button className=" py-2 px-10 hover:bg-[#ffffff] hover:text-black text-xl font-bold bg-[#2ba1a1] duration-400 cursor-pointer">
                  Explore Tour
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto lg:flex lg:justify-around p-2 ">
          <div>
            <h3 className="text-xl">Destination</h3>
            <select
              id=""
              className="p-2 bg-[#1e9596] duration-500 text-[#dfe3fc] "
            >
              <option value="">Select a Destination</option>
              <option value="option1">Fewa Lake</option>
              <option value="option2">Begnas Lake</option>
              <option value="option3">Santi Stupa</option>
              <option value="option4">Barahai Temple</option>
              <option value="option5">Bhote Koshi</option>
            </select>
          </div>

          <div>
            <h3 className="text-xl">Activity</h3>
            <select
              id=""
              className="p-2 bg-[#1e9596] duration-500 text-[#dfe3fc]"
            >
              <option value="">Select a Destination</option>
              <option value="option1">Paragliding</option>
              <option value="option2">Swimming</option>
              <option value="option3">boating</option>
              <option value="option4">Rafting</option>
              <option value="option5">Bunjee jump</option>
            </select>
          </div>
          <div className="flex items-center py-[30px]">
            <button className="py-2 px-10 bg-[#1e9596] duration-500 text-[#dfe3fc] cursor-pointer">
              Search
            </button>
          </div>
        </div>
        <div>
          <div className="max-w-6xl mx-auto mb-20">
            <div className="w-full flex flex-col justify-center items-center gap-5">
              <h2 className="lg:text-4xl text-2xl font-bold">
                Best Place In Pokhara
              </h2>
              <p>This where the magic happens</p>
              <div>
                <div className="h-[350px] w-[300px] relative">
                  <img
                    src="/images/fewa.jpg"
                    alt="image of fewa lake"
                    className="w-full h-full transition-transform transform hover:scale-110 hover:origin-center"
                  />
                  <div
                    className="absolute inset-0 flex flex-col p-2 justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(73,5,5,0.5) 8%, rgba(138,14,14,0.5) 47%, rgba(69,4,4,0.5) 95%)",
                    }}
                  >
                    <h1 className="text-[20px]" data-aos="fade-up">
                      hello
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
