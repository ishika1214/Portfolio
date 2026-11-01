import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { links as profileLinks, profile } from "../data/portfolio";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// Tracks which section is currently in view so the matching nav link can be highlighted.
const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
};

const sectionIds = links.map((l) => l.id);

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main"
      className="fixed top-0 left-0 z-30 flex w-full justify-center px-4 pt-4 text-white"
    >
      {/* Glass / pill nav container */}
      <div
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-3 py-2 backdrop-blur-xl transition-all duration-300 md:px-3 ${
          scrolled
            ? "border-white/10 bg-black/70 shadow-[0_18px_60px_rgba(0,0,0,0.7)]"
            : "border-white/[0.06] bg-white/[0.03]"
        }`}
      >
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-3 rounded-full pl-1 pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-rose-700 text-sm font-extrabold tracking-tight shadow-lg shadow-rose-900/40">
            IK
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold">{profile.name}</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-gray-500 sm:inline">
              {profile.title}
            </span>
          </span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-0.5 text-sm font-medium lg:flex">
          {links.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={`block rounded-full px-3.5 py-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
                  active === item.id ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profileLinks.resume}
            download
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 sm:inline-flex"
          >
            <FiDownload aria-hidden="true" /> Resume
          </a>

          {/* Mobile / tablet hamburger */}
          <button
            type="button"
            onClick={() => setNav(!nav)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 lg:hidden"
            aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={nav}
            aria-controls="mobile-menu"
          >
            {nav ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {nav && (
        <div id="mobile-menu" className="fixed right-4 top-[4.75rem] z-20 lg:hidden animate-fade-in">
          <ul className="flex min-w-[200px] flex-col gap-1 rounded-2xl border border-white/10 bg-neutral-950/95 p-2 text-sm font-medium text-gray-100 shadow-xl shadow-black/60 backdrop-blur-xl">
            {links.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setNav(false)}
                  className={`block rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-white/[0.06] ${
                    active === item.id ? "bg-white/[0.06] text-rose-400" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="sm:hidden">
              <a
                href={profileLinks.resume}
                download
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-semibold text-black"
              >
                <FiDownload aria-hidden="true" /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
