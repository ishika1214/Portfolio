import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      icon: <FaLinkedin size={30} />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ishika-kumari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      style: "rounded-tr-md bg-sky-900",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      icon: <FaGithub size={30} />,
      name: "Github",
      href: "https://github.com/ishika1214",
      style: "rounded-tr-md bg-gray-900",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      icon: <HiOutlineMail size={30} />,
      name: "Mail",
      href: "mailto:kumariishika874@gmail.com",
      style: "rounded-tr-md bg-red-900",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      icon: <BsFillPersonLinesFill size={30} />,
      name: "Resume",
      href: "https://ishika1214.github.io/Portfolio/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map((item) => (
            <li
              key={item.id}
              className={`flex justify-between item-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${item.style}`}
            >
              <a
                href={item.href}
                className="flex justify-between items-center w-full text-white"
                download={item?.download}
                target="_blank"
                rel="noreferrer"
              >
                {item.child}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-around md:hidden pl-1 pr-1 bg-gray-800 p-5 border-t-2 border-gray-500">
        {links.map((item) => (
          <div key={item.id} className="p-2 bg-slate-900 rounded-sm">
            <a
              href={item.href}
              className="flex rounded-none justify-between items-center w-full text-white"
              download={item?.download}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>

          </div>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
