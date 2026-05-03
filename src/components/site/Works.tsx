import { useState } from "react";
import { X } from "lucide-react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

const works = [
  { src: w1, title: "Untitled I", year: "2024", span: "row-span-2" },
  { src: w3, title: "Resonance", year: "2024", span: "" },
  { src: w2, title: "Whisper", year: "2023", span: "" },
  { src: w5, title: "Thuluth Study", year: "2025", span: "row-span-2" },
  { src: w6, title: "Movement", year: "2024", span: "" },
  { src: w4, title: "Vessel", year: "2025", span: "" },
];

export function Works() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="works" className="bg-secondary/40 py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mb-16 flex items-end justify-between">
          <div>
            <p className="mb-6 text-xs uppercase tracking-display text-muted-foreground">
              02 — Selected Works
            </p>
            <h2 className="text-4xl md:text-5xl">
              <em className="italic font-light">Gallery</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[18rem] md:gap-6">
          {works.map((w, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`reveal group relative overflow-hidden bg-muted ${w.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={w.src}
                alt={w.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/30" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-serif text-xl text-background">{w.title}</p>
                <p className="text-xs uppercase tracking-display text-background/70">
                  {w.year}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-6 backdrop-blur-sm animate-fade-in"
        >
          <button
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 text-background"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={works[active].src}
            alt={works[active].title}
            className="max-h-[85vh] max-w-full object-contain"
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-background">
            <p className="font-serif text-2xl">{works[active].title}</p>
            <p className="text-xs uppercase tracking-display text-background/70">
              {works[active].year}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
