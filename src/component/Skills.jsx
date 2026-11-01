import React from "react";
import { skills } from "../data/portfolio";
import { IconTile, Reveal, Section, TagList } from "./ui";

const Skills = () => {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Skills"
      title="Technical toolkit"
      intro="The languages, frameworks and services I use day to day, grouped by where they sit in the stack."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ category, icon, items }, i) => (
          <Reveal key={category} delay={i * 60} className="surface p-6 hover:border-white/[0.14]">
            <div className="flex items-center gap-3">
              <IconTile icon={icon} />
              <h3 className="font-semibold text-white">{category}</h3>
            </div>
            <TagList items={items} className="mt-5" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
