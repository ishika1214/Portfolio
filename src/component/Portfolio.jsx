import React, { useEffect, useState } from "react";

// Aesthetic Notes images
import aestheticLanding from "../assets/aestheticNotes/LandingPage.png";
import aestheticDashboard from "../assets/aestheticNotes/dashboard.png";
import aestheticSummarize from "../assets/aestheticNotes/summarize.png";
import aestheticAI from "../assets/aestheticNotes/AI-Companion.png";
import aestheticDiary from "../assets/aestheticNotes/Diary.png";

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

const Projects = [
    {
      id: 3,
      title : "Aesthetic Notes",
      description : "An immersive, AI-enhanced writing studio designed for creativity, clarity, and flow. Deeply integrated with Google's Gemini AI for summarization and insights.",
      images : [aestheticLanding, aestheticDashboard, aestheticSummarize, aestheticAI, aestheticDiary],
      href : "https://aesthetic-notes-git-devlop-ishika1214s-projects.vercel.app/",
      code : "https://github.com/ishika1214/AestheticNotes-Backend",
      isCaseStudy: true,
      caseStudyId: 'aesthetic-notes'
    },
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

const Portfolio = ({ onSelectProject }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [isAnimating, setIsAnimating] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxProject, setLightboxProject] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && lightboxImage) {
        setLightboxImage(null);
        setLightboxProject(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [lightboxImage]);

  const openLightbox = (image, project, imageIndex) => {
    setLightboxImage({ src: image, index: imageIndex });
    setLightboxProject(project);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxProject(null);
  };

  const navigateLightbox = (direction) => {
    if (!lightboxImage || !lightboxProject) return;
    
    const currentIndex = lightboxImage.index;
    const totalImages = lightboxProject.images.length;
    
    let newIndex;
    if (direction === "left") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : totalImages - 1;
    } else {
      newIndex = currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
    }
    
    setLightboxImage({
      src: lightboxProject.images[newIndex],
      index: newIndex
    });
  };

  const navigateImage = (id, direction) => {
    const project = Projects.find(p => p.id === id);
    if (!project) return;

    const currentIndex = currentImageIndex[id] || 0;
    const totalImages = project.images.length;
    const step = isMobile ? 1 : 2; // Move 1 image on mobile, 2 on desktop
    
    // Set animating state to fade out
    setIsAnimating(prev => ({ ...prev, [id]: true }));
    
    // After fade out, update the index
    setTimeout(() => {
      if (direction === "left") {
        // Move back by step, or wrap to the end
        const newIndex = currentIndex >= step ? currentIndex - step : Math.max(0, totalImages - step);
        setCurrentImageIndex(prev => ({
          ...prev,
          [id]: newIndex
        }));
      } else {
        // Move forward by step, or wrap to the beginning
        const newIndex = currentIndex + step < totalImages ? currentIndex + step : 0;
        setCurrentImageIndex(prev => ({
          ...prev,
          [id]: newIndex
        }));
      }
      
      // Fade in the new images
      setTimeout(() => {
        setIsAnimating(prev => ({ ...prev, [id]: false }));
      }, 50);
    }, 350);
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pb-16"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-20">
          <p className="text-2xl font-semibold tracking-[0.3em] text-rose-400 uppercase mb-2">
            Projects
          </p>
       
          <p className="mt-4 text-gray-300">
            A selection of my recent work. Use the navigation buttons to explore
            different views of each project.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {Projects.map((item) => (
            <article
              key={item.id}
              className="group rounded-3xl bg-white/5 backdrop-blur-xl hover:shadow-[0_18px_60px_rgba(225,29,72,0.3)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image gallery with arrows */}
              <div className="relative bg-black/40 overflow-hidden">
                <div className="flex gap-4 pb-4 pt-4 px-4 justify-center items-center relative">
                  {(() => {
                    const startIndex = currentImageIndex[item.id] || 0;
                    const totalImages = item.images.length;
                    const secondIndex = (startIndex + 1) % totalImages;
                    const imagesToShow = [
                      item.images[startIndex],
                      item.images[secondIndex]
                    ];
                    const animating = isAnimating[item.id];
                    return imagesToShow.map((image, idx) => {
                      const actualIndex = idx === 0 ? startIndex : secondIndex;
                      return (
                        <div
                          key={`${item.id}-${startIndex}-${idx}`}
                          className={`relative h-52 sm:h-56 md:h-64 lg:h-72 w-64 sm:w-72 md:w-80 lg:w-96 flex-shrink-0 transition-all duration-500 ease-in-out cursor-pointer ${
                            animating 
                              ? 'opacity-0 scale-95 -translate-x-2' 
                              : 'opacity-100 scale-100 translate-x-0'
                          } ${idx === 1 ? 'hidden md:block' : ''}`}
                          style={{
                            transitionDelay: `${idx * 80}ms`
                          }}
                          onClick={() => openLightbox(image, item, actualIndex)}
                        >
                          <img
                            src={image}
                            alt={`${item.title} screenshot ${actualIndex + 1}`}
                            className="h-full w-full object-cover rounded-lg border border-gray-800 transition-transform duration-300 hover:scale-[1.05]"
                          />
                        </div>
                      );
                    });
                  })()}
                </div>

                {/* left / right arrows */}
                <button
                  type="button"
                  onClick={() => navigateImage(item.id, "left")}
                  className="absolute inset-y-0 left-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  aria-label="Previous images"
                >
                  <span className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-rose-600/90 hover:bg-rose-700 text-white flex items-center justify-center text-sm sm:text-base shadow-lg shadow-rose-900/50 border border-rose-500/50 hover:border-rose-400 transition">
                    &#10094;
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => navigateImage(item.id, "right")}
                  className="absolute inset-y-0 right-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  aria-label="Next images"
                >
                  <span className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-rose-600/90 hover:bg-rose-700 text-white flex items-center justify-center text-sm sm:text-base shadow-lg shadow-rose-900/50 border border-rose-500/50 hover:border-rose-400 transition">
                    &#10095;
                  </span>
                </button>
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
                  {item.isCaseStudy && (
                    <button
                      onClick={() => onSelectProject(item.caseStudyId)}
                      className="inline-flex items-center justify-center px-5 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white shadow-lg shadow-rose-900/40 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      View Case Study
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && lightboxProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 h-10 w-10 rounded-full bg-rose-600/90 hover:bg-rose-700 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Close lightbox"
          >
            <span className="text-xl font-bold">×</span>
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("left");
            }}
            className="absolute left-4 h-12 w-12 rounded-full bg-rose-600/90 hover:bg-rose-700 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40"
            aria-label="Previous image"
          >
            <span className="text-2xl">&#10094;</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("right");
            }}
            className="absolute right-4 h-12 w-12 rounded-full bg-rose-600/90 hover:bg-rose-700 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40"
            aria-label="Next image"
          >
            <span className="text-2xl">&#10095;</span>
          </button>

          {/* Image container */}
          <div
            className="relative max-w-7xl max-h-[90vh] mx-4 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={`${lightboxProject.title} screenshot ${lightboxImage.index + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            />
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full text-white text-sm">
              {lightboxImage.index + 1} / {lightboxProject.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
