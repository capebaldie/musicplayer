import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { links } from "../assets/constants";

const Sidebar = () => {
  const [mobileMenu, setmobileMenu] = useState(false);

  return (
    <>
      <div className="hidden sm:flex flex-col w-[160px] py-10 px-4 bg-[#070514]">
        <h1 className="font-bold text-white text-xl">Meta Music</h1>
        {links.map((link, i) => (
          <NavLink
            to={link.to}
            key={i}
            className="mt-4 flex items-center text-gray-200 text-sm  hover:text-white"
          >
            <link.icon className="mr-2 w-5 h-5" />
            {link.name}
          </NavLink>
        ))}
      </div>
      {mobileMenu ? (
        <IoCloseSharp
          onClick={() => setmobileMenu(!mobileMenu)}
          className="absolute sm:hidden block top-5 right-3 w-6 h-6 mr-2 text-white cursor-pointer z-20 smooth-transition"
        />
      ) : (
        <BsList
          onClick={() => setmobileMenu(!mobileMenu)}
          className="absolute sm:hidden block top-5 right-3 w-6 h-6 mr-2 text-white cursor-pointer z-20 smooth-transition"
        />
      )}
      <div
        className={`absolute top-0 h-screen w-[50%] bg-[#000000] z-10 p-6 md:hidden smooth-transition ${
          mobileMenu ? "left-0" : "-left-full"
        }`}
      >
        <h1 className="font-bold text-white text-xl">Meta Music</h1>
        {links.map((link, i) => (
          <NavLink
            to={link.to}
            onClick={() => setmobileMenu(!mobileMenu)}
            key={i}
            className="mt-4 flex items-center text-sm text-gray-200 hover:text-white"
          >
            <link.icon className="mr-2 w-5 h-5" />
            {link.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
