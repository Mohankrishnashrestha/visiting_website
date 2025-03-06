import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [toggle, setToggle] = useState();

  return (
    <div className="fixed bg-white z-10 w-full">
      <div className="w-full shadow relative">
        <nav className="max-w-6xl mx-auto lg:flex lg:flex-row p-2 justify-between items-center">
          <div className="text-[40px]">
            <NavLink
              to={"/home"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-medium  border-blue-600"
                  : "text-gray-600"
              }
            >
              Visit Pokhara
            </NavLink>
          </div>
          <div className="hidden lg:flex gap-5 justify-between items-center p-2 text-[#3b3b3b]">
            <NavLink
              to={"/destination"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-medium  border-blue-600"
                  : "text-gray-600"
              }
            >
              Destination
            </NavLink>
            <NavLink
              to={"/thingsToDO"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-medium  border-blue-600"
                  : "text-gray-600"
              }
            >
              Things to Do
            </NavLink>
            <NavLink
              to={"/festivelsAndEvents"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-medium  border-blue-600"
                  : "text-gray-600"
              }
            >
              Festivals And Events
            </NavLink>
            <NavLink
              to={"/AboutPokhara"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-medium  border-blue-600"
                  : "text-gray-600"
              }
            >
              About Pokhara
            </NavLink>
          </div>
          <div className="flex gap-5 justify-between items-center p-2 text-[#3b3b3b] lg:hidden">
            <ul
              className={
                "overflow-hidden transition-all duration-500 ease-in-out " +
                (toggle ? "max-h-[500px] opacity-100 " : "max-h-0 opacity-0 ") +
                "w-full"
              }
            >
              <li className="flex justify-center p-2">
                <NavLink to={"/destination"} onClick={() => setToggle(!toggle)}>
                  Destination
                </NavLink>
              </li>
              <li className="flex justify-center p-2">
                <NavLink to={"/thingsToDO"} onClick={() => setToggle(!toggle)}>
                  Things to Do
                </NavLink>
              </li>
              <li className="flex justify-center p-2">
                <NavLink
                  to={"/festivelsAndEvents"}
                  onClick={() => setToggle(!toggle)}
                >
                  Festivals And Events
                </NavLink>
              </li>
              <li className="flex justify-center p-2">
                <NavLink
                  to={"/AboutPokhara"}
                  onClick={() => setToggle(!toggle)}
                >
                  About Pokhara
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="absolute lg:hidden">
          <button>
            <GiHamburgerMenu
              className="fixed top-5 right-2 text-2xl"
              onClick={() => setToggle(!toggle)}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
