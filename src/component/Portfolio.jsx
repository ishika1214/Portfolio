import React from "react";
import arrDestruct from "../assets/portfolio/arrayDestruct.jpg";
import TicTac from "../assets/portfolio/tic-Tac.jpg";
import hangman from "../assets/portfolio/hangman.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import reactCrud from "../assets/portfolio/Crud.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import useState from "../assets/portfolio/usestate.jpg";

// Task Manager images
import taskManager1 from "../assets/taskManager/taskmanager1.png";
import taskManager2 from "../assets/taskManager/taskmanager2.png";
import taskManager3 from "../assets/taskManager/taskmanager3.png";
import taskManager4 from "../assets/taskManager/taskmanager4.png";
import taskManager5 from "../assets/taskManager/taskmanager5.png";
import taskManager6 from "../assets/taskManager/taskmanager6.png";
import taskManager7 from "../assets/taskManager/taskmanager7.png";

// Mind Space images
import mindSpace1 from "../assets/mindSpace/mindSpace1.png";
import mindSpace2 from "../assets/mindSpace/mindSpace2.png";
import mindSpace3 from "../assets/mindSpace/mindSpace3.png";
import mindSpace4 from "../assets/mindSpace/mindSpace4.png";
import mindSpace5 from "../assets/mindSpace/mindSpace5.png";
import mindSpace6 from "../assets/mindSpace/mindSpace6.png";

const Portfolio = () => {
  const scrollRefs = React.useRef({});

  const scrollGallery = (id, direction) => {
    const container = scrollRefs.current[id];
    if (!container) return;

    const amount = container.clientWidth * 0.9;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const Projects = [
    {
      id: 1,
      title : "Task Manager",
      description : "A task manager app built with NextJs, Redux, and Tailwind CSS. It allows you to manage organization, tasks, projects, and more.",
      images : [taskManager1, taskManager2, taskManager3, taskManager4, taskManager5, taskManager6, taskManager7],
      href : "https://ishika1214.github.io/Task-Manager/",
      code : "https://github.com/ishika1214/Task-Manager",
    },
    {
      id: 2,
      title : "Mind Space",
      description : "A mind space app built with React, Redux, Tailwind CSS and IndexedDB. A calm place to track your mood, breathe, reflect, and check in with yourself.",
      images : [mindSpace1, mindSpace2, mindSpace3, mindSpace4, mindSpace5, mindSpace6],
      href : "https://ishika1214.github.io/Mind-Space/",
      code : "https://github.com/ishika1214/Mind-Space",
    }
    
    // {
    //   id: 1,
    //   title: "React Admin Dashboard",
    //   description:
    //     "Responsive login dashboard with protected routes and a clean, modern UI built in React.",
    //   images: [reactCrud, navbar, arrDestruct],
    //   href: "https://ishika1214.github.io/react-login-dashboard/",
    //   code: "https://github.com/ishika1214/react-login-dashboard",
    // },
    // {
    //   id: 2,
    //   title: "Tic-Tac-Toe Game",
    //   description:
    //     "Interactive Tic-Tac-Toe game with smooth hover effects and responsive layout.",
    //   images: [TicTac, reactSmooth, reactWeather],
    //   href: "https://ishika1214.github.io/Tic-Tac-Toe/",
    //   code: "https://github.com/ishika1214/Tic-Tac-Toe",
    // },
    // {
    //   id: 3,
    //   title: "Hangman Game",
    //   description:
    //     "Classic word guessing game showcasing state management and conditional rendering.",
    //   images: [hangman, reactParallax, installNode, useState],
    //   href: "https://ishika1214.github.io/my-hangman1/",
    //   code: "https://github.com/ishika1214/my-hangman1",
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pb-16"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-10">
          <p className="text-2xl font-semibold tracking-[0.3em] text-rose-400 uppercase mb-2">
            Projects
          </p>
       
          <p className="mt-4 text-gray-300">
            A selection of my recent work. Swipe or scroll through the images in
            each project to explore more views.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {Projects.map((item) => (
            <article
              key={item.id}
              className="group rounded-3xl bg-white/5 border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl hover:shadow-[0_18px_60px_rgba(225,29,72,0.3)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image gallery with arrows */}
              <div className="relative bg-black/40">
                <div
                  ref={(el) => {
                    if (el) scrollRefs.current[item.id] = el;
                  }}
                  className="project-gallery flex gap-4 overflow-x-auto pb-4 pt-4 px-4 scroll-smooth snap-x snap-mandatory"
                >
                  {item.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${item.title} screenshot ${index + 1}`}
                      className="h-52 sm:h-56 md:h-64 lg:h-72 w-64 sm:w-72 md:w-80 lg:w-96 object-cover rounded-lg flex-shrink-0 snap-center border border-gray-800 transition-transform duration-300 hover:scale-[1.03]"
                    />
                  ))}
                </div>

                {/* left / right arrows */}
                <button
                  type="button"
                  onClick={() => scrollGallery(item.id, "left")}
                  className="absolute inset-y-0 left-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  aria-label="Scroll left"
                >
                  <span className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center text-sm sm:text-base shadow-lg shadow-black/40 border border-gray-700 hover:border-rose-500 transition">
                    &#10094;
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollGallery(item.id, "right")}
                  className="absolute inset-y-0 right-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  aria-label="Scroll right"
                >
                  <span className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center text-sm sm:text-base shadow-lg shadow-black/40 border border-gray-700 hover:border-rose-500 transition">
                    &#10095;
                  </span>
                </button>

                {/* gradient edges for nicer scroll appearance */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-900 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-900 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 px-5 pb-5 pt-3">
                <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-md shadow-rose-900/40 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Live Demo
                  </a>
                  <a
                    href={item.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-full border border-gray-600 hover:border-rose-500 text-gray-200 hover:text-white bg-transparent hover:bg-gray-800/80 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
