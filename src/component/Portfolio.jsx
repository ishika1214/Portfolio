import React, { useState } from "react";
import { FiArrowRight, FiExternalLink, FiGithub, FiMaximize2, FiPlayCircle } from "react-icons/fi";
import { projects } from "../data/portfolio";
import Lightbox from "./Lightbox";
import { BrowserFrame, Reveal, Section, TagList, buttonStyles } from "./ui";

const hostOf = (url) => {
  try {
    return new URL(url).host;
  } catch {
    return null;
  }
};

const Portfolio = ({ onSelectProject }) => {
  const [lightbox, setLightbox] = useState(null); // { project, index }

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Independent projects"
      intro="Personal projects I designed and built independently. Each has a case study covering the problem, approach and technical details."
    >
      <div className="flex flex-col gap-20 md:gap-28">
        {projects.map((project, i) => {
          const flipped = i % 2 === 1;
          return (
            <Reveal
              as="article"
              key={project.id}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14"
            >
              {/* Screenshot */}
              <div className={`relative min-w-0 ${flipped ? "lg:order-2" : ""}`}>
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 -z-10 rounded-[2rem] bg-rose-600/[0.08] blur-3xl sm:-inset-6"
                />
                <button
                  type="button"
                  onClick={() => setLightbox({ project, index: 0 })}
                  className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded-xl"
                  aria-label={`View ${project.images.length} screenshots of ${project.title}`}
                >
                  <BrowserFrame
                    label={hostOf(project.live)}
                    className="transition-transform duration-500 group-hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src={project.cover}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1.5 text-xs font-medium text-gray-200 opacity-90 backdrop-blur transition-opacity group-hover:opacity-100">
                        <FiMaximize2 aria-hidden="true" /> {project.images.length} screenshots
                      </span>
                    </div>
                  </BrowserFrame>
                </button>
              </div>

              {/* Details */}
              <div className={`min-w-0 ${flipped ? "lg:order-1" : ""}`}>
                <p className="font-mono text-xs text-rose-400">
                  {String(i + 1).padStart(2, "0")} <span className="text-gray-600">/</span>{" "}
                  <span className="text-gray-500">{project.tagline}</span>
                </p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">{project.title}</h3>
                <p className="mt-4 leading-relaxed text-gray-400">{project.summary}</p>
                <TagList items={project.tech} className="mt-6" />

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project.id)}
                    className={buttonStyles.primarySmall}
                  >
                    Read case study <FiArrowRight aria-hidden="true" />
                  </button>
                  {project.video && (
                    <button
                      type="button"
                      onClick={() => onSelectProject(project.id)}
                      className={buttonStyles.small}
                    >
                      <FiPlayCircle aria-hidden="true" /> Watch demo
                    </button>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className={buttonStyles.small}>
                      <FiExternalLink aria-hidden="true" /> Live demo
                    </a>
                  )}
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noreferrer" className={buttonStyles.small}>
                      <FiGithub aria-hidden="true" /> Code
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.project.images}
          index={lightbox.index}
          title={lightbox.project.title}
          onChange={(index) => setLightbox((lb) => ({ ...lb, index }))}
          onClose={() => setLightbox(null)}
        />
      )}
    </Section>
  );
};

export default Portfolio;
