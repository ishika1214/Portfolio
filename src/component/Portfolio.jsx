import React from "react";
import arrDestruct from "../assets/portfolio/arrayDestruct.jpg";
import TicTac from "../assets/portfolio/tic-Tac.jpg";
import hangman from "../assets/portfolio/hangman.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import reactCrud from "../assets/portfolio/Crud.jpg"

const Portfolio = () => {
  const Projects = [
    {
      id: 1,
      src: reactCrud,
      href:"https://ishika1214.github.io/react-login-dashboard/",
      code:"https://github.com/ishika1214/react-login-dashboard"
    },
    {
      id: 2,
      src: TicTac,
      href:"https://ishika1214.github.io/Tic-Tac-Toe/",
      code:"https://github.com/ishika1214/Tic-Tac-Toe"
    },
    {
      id: 3,
      src: hangman,
      href:"https://ishika1214.github.io/my-hangman1/",
      code:"https://github.com/ishika1214/my-hangman1"
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white  pb-10 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-rose-700">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Projects.map((item) => (
            <div key={item.id} className="shadow-md rounded-lg bg-gray-900">
              <img
                src={item.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-1 m-2 duration-200 hover:scale-105">
                  <a href={item.href}  target="_blank"> Demo</a>
                  
                </button>
                <button className="w-1/2 px-6 py-1 m-2 duration-200 hover:scale-105">
                  <a href={item.code}  target="_blank">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
