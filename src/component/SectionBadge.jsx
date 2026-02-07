import React from "react";

const SectionBadge = ({ label }) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-[999px] bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-300 px-4 py-1.5 shadow-[0_16px_40px_rgba(16,185,129,0.55)] border border-white/60 text-emerald-900">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-200/80 border border-emerald-400 shadow-inner">
        <span className="text-lg leading-none">@</span>
      </div>
      <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
};

export default SectionBadge;

