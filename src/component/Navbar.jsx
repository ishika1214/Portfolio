import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

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
      id: 5,
      link: "contact",
    },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full z-30 flex justify-center px-4 pt-4 text-white">
      {/* Glass / pill nav container */}
      <div className="flex w-full max-w-4xl items-center justify-between rounded-full bg-white/5 border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl px-5 py-3 md:px-8 md:py-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-600/90 shadow-lg shadow-rose-900/50">
            <span className="text-lg font-bold">I</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-semibold tracking-wide">
              Ishika
            </span>
            <span className="hidden text-xs text-gray-300/80 sm:inline">
              Full Stack Developer
            </span>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {links.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer capitalize text-gray-200 hover:text-rose-400 transition-colors duration-200"
            >
              <Link
                to={item.link}
                smooth
                duration={500}
                offset={-80}
                className="relative inline-block px-1"
              >
                <span>{item.link}</span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 rounded-full bg-rose-500 transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setNav(!nav)}
          className="flex items-center justify-center rounded-full bg-black/40 p-2 text-gray-100 shadow-md shadow-black/40 md:hidden"
          aria-label="Toggle navigation"
        >
          {nav ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile compact menu */}
      {nav && (
        <div className="fixed top-20 right-4 z-20 md:hidden">
          <ul className="flex flex-col items-stretch gap-2 rounded-2xl bg-black/85 border border-white/10 px-4 py-3 shadow-xl shadow-black/60 text-sm font-medium text-gray-100 min-w-[160px]">
            {links.map((item) => (
              <li key={item.id} className="capitalize">
                <Link
                  to={item.link}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setNav(false)}
                  className="block px-2 py-1 rounded-full hover:bg-white/10 hover:text-rose-400 transition-colors duration-200 text-center"
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
