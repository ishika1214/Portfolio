import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center  w-full h-20 text-white fixed bg-black px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2 text-rose-700">Ishika</h1>
      </div>
      <ul className=" hidden md:flex">
        {links.map((item) => (
          <li
            key={item.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={item.link} smooth duration={500}>{item.link}</Link>
            
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((item) => (
            <li
              key={item.id}
              className=" px-4 cursor-pointer capitalize py-6 text-4xl"
            >
               <Link to={item.link} smooth duration={500} onClick={()=>setNav(false)}>{item.link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
