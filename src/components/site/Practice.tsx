import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const works = Array.from({ length: 8 }, (_, i) => {
  const index = i + 1;
  const ext = "jpeg";
  const name = `creative_${index}`;

  return {
    src: `/assets/creative/${name}.${ext}`,
    title: `Creative Work ${index}`,
  };
});
export function Practice() {
  const [active, setActive] = useState<number | null>(null);
  // const [visibleCount, setVisibleCount] = useState(6);

  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const check = () => setIsMobile(window.innerWidth < 768);
  //   check();

  //   window.addEventListener("resize", check);
  //   return () => window.removeEventListener("resize", check);
  // }, []);

  return (
    <section id="practice" className="bg-secondary/40 py-32 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <div
          id="image-container"
          className="reveal order-2  overflow-hidden rounded-2xl  md:order-1 "
        >
          <img
            src="/assets/creative.jpeg"
            alt="Calligraphy on ceramic vessel"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
          />
        </div>
        <div className="reveal order-1 flex flex-col  md:order-2">
          <p className="mb-6 text-xs uppercase tracking-display text-muted-foreground">
            Creative Practice
          </p>
          <h2 className="text-4xl md:text-5xl">
            From paper to{" "}
            <em className="italic font-light">three dimensions.</em>
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Ayesha's current practice focuses on studying traditional Islamic
              calligraphy, specifically the{" "}
              <span className="text-foreground">Thuluth script</span> in the
              Ottoman tradition.
            </p>
            <p>
              She is also exploring how calligraphic forms can be translated
              from paper to three-dimensional surfaces, specifically in the form
              of ceramics.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-10 md:px-10">
        {/* Masonry Layout */}
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 md:gap-6">
          {works.map((w, i) => (
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
                  {String(active + 1).padStart(1, "0")} / {works.length}
                </p>
                <h3 className="mt-2 text-2xl font-serif">
                  {works[active].title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
