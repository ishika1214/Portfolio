import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiDownload, FiMail } from "react-icons/fi";
import { enquiryTopics, links } from "../data/portfolio";
import { Reveal, Section, buttonStyles } from "./ui";

const fieldStyles =
  "mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-gray-600 transition-colors focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-400/30";

const labelStyles = "text-sm font-medium text-gray-300";

const channels = [
  { label: "Email", value: links.email, href: `mailto:${links.email}`, icon: FiMail },
  { label: "LinkedIn", value: "in/ishika-kumari", href: links.linkedin, icon: FaLinkedin, external: true },
  { label: "GitHub", value: "github.com/ishika1214", href: links.github, icon: FaGithub, external: true },
];

const Contact = ({ topic, onTopicChange }) => {
  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title="Let's talk"
      intro="Whether you're hiring for a software engineering role or want to discuss a project, I'd be glad to hear from you."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
        <Reveal>
          <ul className="space-y-3">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="surface group flex items-center gap-4 p-4 transition-colors hover:border-rose-500/40 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-rose-400">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-gray-500">
                      {label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium text-gray-100">{value}</span>
                  </span>
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="text-gray-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-rose-400"
                  />
                </a>
              </li>
            ))}
          </ul>
          <a href={links.resume} download className={`${buttonStyles.secondary} mt-6`}>
            <FiDownload aria-hidden="true" /> Download Resume
          </a>
        </Reveal>

        <Reveal delay={120}>
          <form action={links.contactForm} method="POST" className="surface space-y-5 p-6 md:p-8">
            <div>
              <label htmlFor="contact-topic" className={labelStyles}>
                I'm getting in touch about
              </label>
              <select
                id="contact-topic"
                name="topic"
                value={topic}
                onChange={(e) => onTopicChange(e.target.value)}
                className={fieldStyles}
              >
                {enquiryTopics.map((t) => (
                  <option key={t.value} value={t.label} className="bg-neutral-900">
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelStyles}>
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={fieldStyles}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelStyles}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={fieldStyles}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className={labelStyles}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                required
                placeholder="A few details about the role or project"
                className={`${fieldStyles} resize-y`}
              />
            </div>
            <button type="submit" className={`${buttonStyles.primary} w-full sm:w-auto`}>
              Send message <FiArrowUpRight aria-hidden="true" />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
