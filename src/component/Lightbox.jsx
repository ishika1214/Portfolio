import React, { useCallback, useEffect, useRef } from "react";

// Full-screen image viewer. `images` is a list of { src, caption }.
const Lightbox = ({ images, index, title, onChange, onClose }) => {
  const closeRef = useRef(null);
  const total = images.length;

  const go = useCallback(
    (step) => onChange((index + step + total) % total),
    [index, total, onChange]
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [go, onClose]);

  useEffect(() => {
    const previousFocus = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previousFocus?.focus?.();
    };
  }, []);

  const image = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-fade-in"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        className="absolute top-4 right-4 z-50 h-10 w-10 rounded-full bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Close"
      >
        <span className="text-xl font-bold" aria-hidden="true">×</span>
      </button>

      {total > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-2 sm:left-4 z-40 h-11 w-11 rounded-full bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous image"
          >
            <span aria-hidden="true">&#10094;</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-2 sm:right-4 z-40 h-11 w-11 rounded-full bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next image"
          >
            <span aria-hidden="true">&#10095;</span>
          </button>
        </>
      )}

      <figure
        className="relative mx-14 sm:mx-20 flex max-h-[90vh] flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.caption}
          className="max-h-[80vh] max-w-full rounded-lg object-contain animate-scale-in"
        />
        <figcaption className="mt-4 text-center text-sm text-gray-300">
          {image.caption} <span className="text-gray-500">· {index + 1} / {total}</span>
        </figcaption>
      </figure>
    </div>
  );
};

export default Lightbox;
