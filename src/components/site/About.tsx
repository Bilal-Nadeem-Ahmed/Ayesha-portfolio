export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40">
      <div className="grid gap-16 md:grid-cols-12 md:gap-12">
        <div className="reveal md:col-span-5">
          <p className="mb-6 text-xs uppercase tracking-display text-muted-foreground">Biography</p>
          <h2 className="text-4xl leading-tight md:text-5xl">
            Rooted in <em className="italic font-light">tradition</em>, reaching toward the
            contemporary.
          </h2>
          <div className="mt-10 overflow-hidden">
            <img
              src="/assets/creative-practice.jpg"
              alt="Ayesha Ahmed at work"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
        <div className="reveal space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:text-lg">
          <p>
            Ayesha Ahmed is a London-based artist working under the name{" "}
            <span className="text-foreground">Hand of Ayesha</span>. Her practice centres on modern
            abstract Arabic calligraphy using mixed media to explore the relationship between
            language, form, and meaning.
          </p>
          <p>
            Rooted in a deep appreciation for traditional calligraphic forms, her work reinterprets
            these conventions through a contemporary lens, often pushing legibility to the edge in
            favour of movement and emotional resonance. Through this approach, she considers how
            written language can function beyond communication, becoming a vehicle for storytelling
            and reflection.
          </p>
          <p>
            Alongside her studio practice, Ayesha facilitates accessible workshops that introduce
            others to Arabic calligraphy as both a creative and reflective process. Her work has
            been exhibited in group shows, and continues to evolve through ongoing study,
            experimentation, and research into traditional techniques.
          </p>
        </div>
      </div>
    </section>
  );
}
