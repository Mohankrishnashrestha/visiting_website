import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <nav className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <NavLink
            to="/home"
            className="text-3xl md:text-4xl text-blue-600 font-bold"
          >
            Visit Pokhara
          </NavLink>

          <div className="hidden lg:flex items-center space-x-8">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-500"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-500"
                }`
              }
            >
              Service
            </NavLink>
            <NavLink
              to="/galery"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-500"
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-500"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          <button
            className="lg:hidden text-gray-600 hover:text-blue-600 transition-colors duration-200"
            onClick={() => setToggle(!toggle)}
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            toggle ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-2 space-y-2">
            <NavLink
              to="/about"
              className="block text-center py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setToggle(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/service"
              className="block text-center py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setToggle(false)}
            >
              Service
            </NavLink>
            <NavLink
              to="/galery"
              className="block text-center py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setToggle(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className="block text-center py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setToggle(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
