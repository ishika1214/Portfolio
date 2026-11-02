import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiExternalLink, FiGithub, FiPlayCircle } from "react-icons/fi";
import Lightbox from "./Lightbox";
import { BrowserFrame, Highlighted, Pending, TagList, buttonStyles } from "./ui";

const Block = ({ title, value, children }) => (
  <section className="border-t border-white/[0.08] py-10 md:grid md:grid-cols-[220px_1fr] md:gap-12">
    <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-rose-400">{title}</h2>
    <div className="mt-4 leading-relaxed text-gray-300 md:mt-0 md:text-lg">
      {children ?? (value ? <p>{value}</p> : <Pending label={title} />)}
    </div>
  </section>
);

const BulletList = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
        <span>
          <Highlighted text={item} />
        </span>
      </li>
    ))}
  </ul>
);

const CaseStudy = ({ project, onBack }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const cs = project.caseStudy;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${project.title} – Case Study | Ishika Kumari`;
  }, [project]);

  return (
    <div className="min-h-screen bg-ink text-white">
      <nav
        aria-label="Case study"
        className="sticky top-0 z-30 border-b border-white/[0.08] bg-ink/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          <button type="button" onClick={onBack} className={buttonStyles.text + " inline-flex items-center gap-2"}>
            <FiArrowLeft aria-hidden="true" /> Back to projects
          </button>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">Case study</span>
        </div>
      </nav>

      <main className="relative isolate mx-auto max-w-5xl overflow-x-clip px-5 pb-24 sm:px-8">
        <div
          aria-hidden="true"
          className="absolute -top-20 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-rose-600/[0.10] blur-[120px]"
        />
        <header className="pt-16 pb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-rose-400">{project.tagline}</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className={buttonStyles.primary}>
                <FiExternalLink aria-hidden="true" /> Live demo
              </a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noreferrer" className={buttonStyles.secondary}>
                <FiGithub aria-hidden="true" /> View code
              </a>
            )}
          </div>
        </header>

        {project.video ? (
          <figure>
            <BrowserFrame label={project.live ? new URL(project.live).host : null}>
              <video
                src={project.video.src}
                poster={project.video.poster}
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-black"
              />
            </BrowserFrame>
            <figcaption className="mt-3 flex items-center gap-2 text-sm text-gray-500">
              <FiPlayCircle aria-hidden="true" className="text-rose-400" /> {project.video.caption}. Turn on your
              sound.
            </figcaption>
          </figure>
        ) : (
          <button
            type="button"
            onClick={() => setLightboxIndex(0)}
            className="block w-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            aria-label={`Open ${project.title} screenshots`}
          >
            <BrowserFrame label={project.live ? new URL(project.live).host : null}>
              <img src={project.cover} alt={project.images[0].caption} className="w-full" />
            </BrowserFrame>
          </button>
        )}

        <div className="mt-14">
          <Block title="Overview" value={cs.overview} />
          <Block title="Problem" value={cs.problem} />
          <Block title="Solution" value={cs.solution} />
          <Block title="Key features">
            <BulletList items={cs.features} />
          </Block>
          <Block title="My contribution" value={cs.contribution} />
          <Block title="Technical architecture">
            <BulletList items={cs.architecture} />
          </Block>
          <Block title="Technologies">
            <TagList items={project.tech} />
          </Block>
          <Block title="Engineering challenges">
            {cs.challenges ? <BulletList items={cs.challenges} /> : <Pending label="Engineering challenges" />}
          </Block>
          <Block title="Screenshots">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.images.map((img, i) => (
                <li key={img.src}>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    className="block aspect-video w-full overflow-hidden rounded-lg border border-white/10 transition-colors hover:border-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                    aria-label={`Open screenshot: ${img.caption}`}
                  >
                    <img
                      src={img.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <footer className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-10">
          <button type="button" onClick={onBack} className={buttonStyles.secondary}>
            <FiArrowLeft aria-hidden="true" /> All projects
          </button>
        </footer>
      </main>

      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          index={lightboxIndex}
          title={project.title}
          onChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
};

export default CaseStudy;
