import React, { useEffect, useState } from "react";
import data from "../../assets/data";
import { NavLink } from "react-router-dom";
import activity from "../../assets/activity";
import "aos/dist/aos.css";
import AOS from "aos";

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
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
    });

    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="w-ful mt-16">
        <div className="relative">
          <img
            src={images[index]}
            alt="images"
            className="w-full h-[50vh] lg:h-[100vh] object-cover rounded-lg transition-all duration-1000"
          />
          <div
            className="absolute inset-0 flex flex-col justify-center text-white "
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
        <div>
          <section className="h-[50px]"></section>
          <div className="max-w-6xl mx-auto mb-20">
            <div className="w-full flex flex-col justify-center items-center gap-5">
              <h2 className="lg:text-4xl text-2xl font-bold">
                Best Place In Pokhara
              </h2>
              <p>This where the magic happens</p>

              <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                {data.map((users, index) => (
                  <li
                    key={index}
                    data-aos="fade-up"
                    className="flex flex-col items-center gap-4 shadow shadow-gray-200 hover:shadow-gray-400 p-5 rounded-2xl"
                  >
                    <h1 className="text-2xl hover:text-[#6494fd]">
                      {users.title}
                    </h1>
                    <div className="relative group w-[300px] h-[300px] overflow-hidden rounded-lg">
                      <img
                        src={users.image}
                        alt="User"
                        className="w-full h-full object-cover rounded transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                      />

                      <div
                        className="absolute inset-0 flex flex-col p-2 justify-center items-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(93,85,85,0.5) 8%, rgba(106,104,104,0.5) 23%, rgba(203,148,148,0.5) 44%, rgba(195,166,166,0.5) 61%, rgba(135,113,113,1) 78%, rgba(52,52,52,1) 100%)",
                        }}
                      >
                        <div className="max-w-6xl mx-auto flex flex-col text-center">
                          <h3 className="font-medium text-lg">
                            Explore Place In Pokhara
                          </h3>
                          <h1 className="text-white font-bold text-xl py-2 pb-5">
                            Visit {users.title}
                          </h1>
                          <div>
                            <button className="py-2 px-6 hover:bg-white hover:text-black text-lg font-bold bg-[#2ba1a1] transition-all duration-300 cursor-pointer">
                              Explore Tour
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>
                        {users.description}
                        <NavLink
                          to={`/home/${users.id}`}
                          className={"px-2 hover:text-blue-600 "}
                        >
                          Read More
                        </NavLink>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="h-[50px]"></section>
        <div className="max-w-6xl mx-auto">
          <h2 className="flex justify-center items-center lg:text-4xl text-2xl font-bold">
            Activity That Can Be Done In Pokhara
          </h2>
          <div className="p-2">
            <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
              {activity.map((item, index) => (
                <li
                  key={index}
                  data-aos="fade-up"
                  className="shadow shadow-gray-200 hover:shadow-gray-400 p-2 flex flex-col items-center gap-5 py-5 rounded-2xl"
                >
                  <h1 className="lg:text-[20px] font-medium p-2  flex items-start ">
                    {item.title}
                  </h1>
                  <div className="relative group w-[300px] h-[300px] overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover rounded transition-transform duration-300 group-hover:scale-115 group-hover:shadow-2xl"
                    />
                  </div>
                  <p className="px-4  py-2">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
