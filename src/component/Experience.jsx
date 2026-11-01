import React from "react";
import { FiMapPin } from "react-icons/fi";
import { experience } from "../data/portfolio";
import { Highlighted, Pending, Reveal, Section, TagList } from "./ui";

const Bullets = ({ items }) => (
  <ul className="space-y-3 text-sm leading-relaxed text-gray-400 md:text-[15px]">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
        <span>
          <Highlighted text={item} />
        </span>
      </li>
    ))}
  </ul>
);

const Experience = () => {
  return (
    <Section id="experience" index="02" eyebrow="Experience" title="Where I've worked">
      {experience.map((job) => {
        const [primary, ...secondary] = job.groups;
        return (
          <Reveal as="article" key={job.company} className="surface overflow-hidden">
            {/* Header */}
            <header className="flex flex-col gap-5 border-b border-white/[0.08] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 text-xl font-extrabold text-white shadow-lg shadow-rose-900/40"
                >
                  {job.company.charAt(0)}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white md:text-2xl">{job.role}</h3>
                  <p className="mt-0.5 font-medium text-rose-300">{job.company}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm sm:flex-col sm:items-end">
                {job.period ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
                    {job.current && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
                    {job.period}
                  </span>
                ) : (
                  <Pending label={`${job.company} period`} />
                )}
                {job.location && (
                  <span className="inline-flex items-center gap-1.5 text-gray-400">
                    <FiMapPin aria-hidden="true" /> {job.location}
                  </span>
                )}
              </div>
            </header>

            <div className="p-6 md:p-8">
              <p className="max-w-3xl text-gray-300 md:text-lg">{job.summary}</p>

              {/* Main body of work */}
              <div className="mt-8">
                <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-gray-500">
                  {primary.title}
                </h4>
                <div className="mt-4">
                  <Bullets items={primary.items} />
                </div>
              </div>

              {/* Additional areas */}
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {secondary.map((group) => (
                  <div key={group.title} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <h4 className="font-semibold text-white">{group.title}</h4>
                    <div className="mt-3">
                      <Bullets items={group.items} />
                    </div>
                  </div>
                ))}
              </div>

              <TagList items={job.tech} className="mt-8 border-t border-white/[0.08] pt-6" />
            </div>
          </Reveal>
        );
      })}
    </Section>
  );
};

export default Experience;
