import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { about, education } from "../data/portfolio";
import { IconTile, Reveal, Section } from "./ui";

const About = () => {
  return (
    <Section id="about" index="01" eyebrow="About" title="Engineering across the stack">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="surface mt-10 flex items-start gap-4 p-5">
            <IconTile icon={FiBookOpen} />
            <div className="text-sm">
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-gray-500">Education</h3>
              <p className="mt-1.5 font-semibold text-gray-100">{education.degree}</p>
              <p className="mt-0.5 text-gray-400">
                {education.school} · {education.period}
              </p>
            </div>
          </div>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {about.highlights.map(({ title, text, icon }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 60}
              className="surface group p-6 hover:border-rose-500/30 hover:bg-white/[0.04]"
            >
              <IconTile icon={icon} />
              <h3 className="mt-5 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default About;
