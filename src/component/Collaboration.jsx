import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { services } from "../data/portfolio";
import { Eyebrow, Reveal, buttonStyles } from "./ui";

// Deliberately compact: a secondary offering, presented as a single panel rather than a full sales section.
const Collaboration = ({ onEnquire }) => {
  return (
    <section
      id="collaboration"
      aria-labelledby="collaboration-heading"
      className="scroll-mt-20 border-t border-white/[0.06] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-rose-600/[0.10] via-white/[0.02] to-transparent p-7 md:p-12">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose-600/20 blur-[100px]"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
            <div>
              <Eyebrow index="05">Collaboration</Eyebrow>
              <h2
                id="collaboration-heading"
                className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl"
              >
                Project Collaboration
              </h2>
              <p className="mt-5 leading-relaxed text-gray-400">
                I'm open to collaborating on well-scoped software projects. If you're building a product and
                need engineering support, these are the areas I can help with.
              </p>
              <a href="#contact" onClick={onEnquire} className={`${buttonStyles.secondary} mt-8`}>
                Discuss a Project <FiArrowRight aria-hidden="true" />
              </a>
            </div>

            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {services.map(({ title, text, icon: Icon }) => (
                <li key={title} className="flex gap-4">
                  <Icon className="mt-0.5 flex-shrink-0 text-rose-400" size={18} aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Collaboration;
