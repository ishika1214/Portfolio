import React, { useEffect, useRef, useState } from "react";

const isDev = process.env.NODE_ENV !== "production";

// Fades content up once when it first scrolls into view. Disabled by prefers-reduced-motion (see index.css).
export const Reveal = ({ as: Tag = "div", delay = 0, className = "", children, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    let timer;
    // The stagger delay is applied here rather than via CSS transition-delay,
    // which would otherwise also delay hover transitions on the same element.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={`transition duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const Eyebrow = ({ index, children }) => (
  <p className="flex items-center gap-3 font-mono text-xs text-rose-400">
    {index && <span>{index}</span>}
    {index && <span aria-hidden="true" className="h-px w-8 bg-rose-400/50" />}
    <span className="uppercase tracking-[0.2em]">{children}</span>
  </p>
);

export const Section = ({ id, index, title, eyebrow, intro, className = "", children }) => (
  <section
    id={id}
    aria-labelledby={`${id}-heading`}
    className={`relative w-full scroll-mt-20 border-t border-white/[0.06] py-24 md:py-32 ${className}`}
  >
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <Reveal as="header" className="mb-12 max-w-2xl md:mb-16">
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        <h2
          id={`${id}-heading`}
          className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-[1.1]"
        >
          {title}
        </h2>
        {intro && <p className="mt-5 text-base leading-relaxed text-gray-400 md:text-lg">{intro}</p>}
      </Reveal>
      {children}
    </div>
  </section>
);

export const Tag = ({ children }) => (
  <li className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] font-medium text-gray-300">
    {children}
  </li>
);

export const TagList = ({ items, className = "" }) => (
  <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label="Technologies">
    {items.map((t) => (
      <Tag key={t}>{t}</Tag>
    ))}
  </ul>
);

// Small icon tile used on feature / skill cards
export const IconTile = ({ icon: Icon }) => (
  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-rose-400">
    <Icon size={18} aria-hidden="true" />
  </span>
);

// Screenshot presented inside a minimal browser window
export const BrowserFrame = ({ label, children, className = "" }) => (
  <div
    className={`overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-2xl shadow-black/60 ${className}`}
  >
    <div className="flex items-center gap-2 border-b border-white/[0.08] bg-white/[0.03] px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      {label && (
        <span className="ml-3 min-w-0 truncate rounded-md bg-white/[0.05] px-3 py-0.5 font-mono text-[10px] text-gray-500">
          {label}
        </span>
      )}
    </div>
    {children}
  </div>
);

// Emphasises figures such as "40%" or "15+" inside a sentence.
export const Highlighted = ({ text }) =>
  text.split(/(\d+%|\d+\+)/).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-rose-300">
        {part}
      </strong>
    ) : (
      part
    )
  );

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export const buttonStyles = {
  primary: `inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-900/30 transition-all hover:bg-rose-500 hover:shadow-rose-700/40 ${focusRing}`,
  primarySmall: `inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-500 ${focusRing}`,
  secondary: `inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-gray-100 transition-colors hover:border-white/30 hover:bg-white/[0.06] ${focusRing}`,
  small: `inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:border-white/30 hover:bg-white/[0.05] ${focusRing}`,
  text: `rounded text-sm font-medium text-rose-400 underline-offset-4 hover:text-rose-300 hover:underline ${focusRing}`,
};

// Placeholder for content that still needs confirming. Rendered only in development.
export const Pending = ({ label }) =>
  isDev ? (
    <div className="rounded-lg border border-dashed border-amber-400/60 bg-amber-400/5 px-4 py-3 text-sm text-amber-200">
      To confirm: {label}
    </div>
  ) : null;
