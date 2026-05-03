import practice from "@/assets/practice.jpg";

export function Practice() {
  return (
    <section id="practice" className="bg-secondary/40 py-32 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <div className="reveal order-2 overflow-hidden md:order-1">
          <img
            src={practice}
            alt="Calligraphy on ceramic vessel"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
          />
        </div>
        <div className="reveal order-1 flex flex-col justify-center md:order-2">
          <p className="mb-6 text-xs uppercase tracking-display text-muted-foreground">
            04 — Creative Practice
          </p>
          <h2 className="text-4xl md:text-5xl">
            From paper to <em className="italic font-light">three dimensions.</em>
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Ayesha's current practice focuses on studying traditional Islamic
              calligraphy, specifically the{" "}
              <span className="text-foreground">Thuluth script</span> in the
              Ottoman tradition.
            </p>
            <p>
              She is also exploring how calligraphic forms can be translated from
              paper to three-dimensional surfaces, specifically in the form of
              ceramics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
