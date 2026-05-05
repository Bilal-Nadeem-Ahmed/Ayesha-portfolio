import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const extensions: Record<number, string> = {
  1: "jpg",
  2: "jpg",
  3: "jpg",
  8: "JPG",
};

const works = Array.from({ length: 21 }, (_, i) => {
  const index = i + 1;
  const ext = extensions[index] || "jpeg";
  const name = `works_${index}`;

  return {
    src: `/assets/${name}.${ext}`,
    title: `Work ${index}`,
  };
});

export function Works() {
  const [active, setActive] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visibleWorks = isMobile ? works.slice(0, visibleCount) : works;

  return (
    <section id="works" className="bg-secondary/40 py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-6 text-xs uppercase tracking-display text-muted-foreground">
              Selected Works
            </p>
            <h2 className="text-4xl md:text-5xl">
              <em className="italic font-light">Gallery</em>
            </h2>
          </div>
          <a
            href="https://handofayesha.com/"
            target="_blank"
            rel="noreferrer"
            className="block text-xs uppercase tracking-display text-muted-foreground transition-colors hover:text-foreground"
          >
            Shop →
          </a>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 md:gap-6">
          {visibleWorks.map((w, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative group mb-4 w-full break-inside-avoid overflow-hidden rounded-2xl bg-muted"
            >
              <img
                src={w.src}
                alt={w.title}
                loading="lazy"
                className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/30" />
            </button>
          ))}
        </div>

        {/* Show More (mobile only) */}
        {visibleCount < works.length && (
          <div className="mt-10 flex justify-center md:hidden">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="text-xs uppercase tracking-display text-muted-foreground border-b border-muted-foreground/30 pb-1 transition hover:text-foreground hover:border-foreground"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {/* 🎬 Immersive Lightbox */}
      {active !== null && (
        <div className="fixed inset-0 z-[100] bg-black text-white flex items-center justify-center">
          {/* Close */}
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 opacity-70 hover:opacity-100"
          >
            <X size={28} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive((prev) => (prev! - 1 + works.length) % works.length);
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive((prev) => (prev! + 1) % works.length);
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100"
          >
            <ChevronRight size={36} />
          </button>

          {/* Image */}
          <div className="max-w-5xl px-6 text-center">
            <img
              src={works[active].src}
              alt={works[active].title}
              className="max-h-[80vh] mx-auto object-contain"
            />

            <div className="mt-6">
              <p className="text-sm opacity-60">
                {String(active + 1).padStart(2, "0")} / {works.length}
              </p>
              <h3 className="mt-2 text-2xl font-serif">
                {works[active].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
