import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { experience, links, profile, stats } from "../data/portfolio";
import { Reveal, buttonStyles } from "./ui";

const current = experience.find((e) => e.current);

// Syntax-highlight helpers for the profile "editor" card
const K = ({ children }) => <span className="text-sky-300">{children}</span>;
const S = ({ children }) => <span className="text-emerald-300">"{children}"</span>;
const P = ({ children }) => <span className="text-gray-500">{children}</span>;
// `wrapAfter` breaks a long array onto a second, aligned line
const Arr = ({ items, wrapAfter, indent = "" }) => (
  <>
    <P>[</P>
    {items.map((item, i) => (
      <React.Fragment key={item}>
        <S>{item}</S>
        {i < items.length - 1 && <P>{i + 1 === wrapAfter ? "," : ", "}</P>}
        {i + 1 === wrapAfter && `\n${indent}`}
      </React.Fragment>
    ))}
    <P>]</P>
  </>
);

const ProfileCard = () => (
  <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/80 shadow-2xl shadow-black/60 backdrop-blur">
    <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
      <span className="ml-3 font-mono text-xs text-gray-500">engineer.ts</span>
    </div>
    <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-7 text-gray-300">
      <code>
        <span className="text-rose-400">const</span> engineer <P>=</P> <P>{"{"}</P>
        {"\n  "}
        <K>name</K>
        <P>: </P>
        <S>{profile.name}</S>
        <P>,</P>
        {"\n  "}
        <K>role</K>
        <P>: </P>
        <S>{current.role}</S>
        <P>,</P>
        {"\n  "}
        <K>company</K>
        <P>: </P>
        <S>{current.company}</S>
        <P>,</P>
        {"\n  "}
        <K>experience</K>
        <P>: </P>
        <S>{profile.experience}</S>
        <P>,</P>
        {"\n  "}
        <K>stack</K>
        <P>: </P>
        <Arr items={profile.coreStack} wrapAfter={3} indent="          " />
        <P>,</P>
        {"\n  "}
        <K>focus</K>
        <P>: </P>
        <Arr items={["Backend", "AI integrations"]} />
        <P>,</P>
        {"\n"}
        <P>{"};"}</P>
      </code>
    </pre>
  </div>
);

const Home = () => {
  return (
    <section id="home" aria-label="Introduction" className="relative isolate overflow-hidden">
      {/* Background: faint grid + soft accent glow */}
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-rose-600/[0.12] blur-[120px]"
      />

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-36 sm:px-8 md:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-3 pr-4 text-xs font-medium text-gray-300 transition-colors hover:border-white/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to software engineering roles
            </a>

            <h1 className="mt-7 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 text-xl font-semibold text-gray-200 sm:text-2xl">
              <span className="text-rose-400">{profile.title}</span>
              <span className="text-gray-600"> / </span>
              {profile.focus.join(" · ")}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
              {profile.intro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className={buttonStyles.primary}>
                View Projects <FiArrowRight aria-hidden="true" />
              </a>
              <a href={links.resume} download className={buttonStyles.secondary}>
                <FiDownload aria-hidden="true" /> Download Resume
              </a>
              <span className="ml-1 flex items-center gap-1">
                {[
                  { href: links.github, label: "GitHub", icon: FaGithub, external: true },
                  { href: links.linkedin, label: "LinkedIn", icon: FaLinkedin, external: true },
                  { href: `mailto:${links.email}`, label: "Email", icon: FiMail },
                ].map(({ href, label, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                  >
                    <Icon size={19} aria-hidden="true" />
                  </a>
                ))}
              </span>
            </div>
          </Reveal>

          <Reveal delay={150} className="hidden md:block">
            <ProfileCard />
          </Reveal>
        </div>

        {/* Impact stats */}
        <Reveal delay={250} className="mt-20 md:mt-24">
          <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] gap-px lg:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-ink/95 p-5 sm:p-6">
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="block text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {value}
                  </span>
                  <span className="mt-2 block text-xs leading-snug text-gray-400 sm:text-sm">
                    {label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export default Home;
