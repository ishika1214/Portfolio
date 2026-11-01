import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUp, FiFileText, FiMail } from "react-icons/fi";
import { links as profileLinks, profile } from "../data/portfolio";

const links = [
  { id: 1, icon: FaLinkedin, name: "LinkedIn", href: profileLinks.linkedin, external: true },
  { id: 2, icon: FaGithub, name: "GitHub", href: profileLinks.github, external: true },
  { id: 3, icon: FiMail, name: "Email", href: `mailto:${profileLinks.email}` },
  { id: 4, icon: FiFileText, name: "Resume", href: profileLinks.resume, download: true },
];

const linkProps = (item) => ({
  href: item.href,
  ...(item.download ? { download: true } : {}),
  ...(item.external ? { target: "_blank", rel: "noreferrer" } : {}),
});

const iconButton =
  "flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-all hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400";

// Fixed social rail on wide screens, plus a site footer that carries the same links everywhere.
const SocialLinks = () => {
  return (
    <>
      <div className="fixed bottom-0 left-6 z-20 hidden flex-col items-center gap-1 xl:flex">
        <ul className="flex flex-col gap-1">
          {links.map(({ id, icon: Icon, name, ...item }) => (
            <li key={id}>
              <a {...linkProps(item)} aria-label={name} title={name} className={iconButton}>
                <Icon size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <span aria-hidden="true" className="mt-3 h-24 w-px bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-white">{profile.name}</p>
            <p className="mt-1 text-sm text-gray-500">
              {profile.title} · © {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <ul className="flex gap-1">
              {links.map(({ id, icon: Icon, name, ...item }) => (
                <li key={id}>
                  <a {...linkProps(item)} aria-label={name} title={name} className={iconButton}>
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <span aria-hidden="true" className="mx-2 h-6 w-px bg-white/10" />
            <a href="#home" aria-label="Back to top" title="Back to top" className={iconButton}>
              <FiArrowUp size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SocialLinks;
