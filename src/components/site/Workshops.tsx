export function Workshops() {
  return (
    <section id="workshops" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/workshop.JPG"
          alt="Workshops background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center text-white md:py-48">
        <p className="mb-6 text-xs uppercase tracking-wide text-white/70">Workshops</p>

        <h2 className="text-4xl md:text-6xl">
          Foundational letterforms, <em className="italic font-light">accessible</em> to all.
        </h2>

        <p className="mx-auto mt-10 max-w-2xl text-white/80 text-base md:text-lg">
          Ayesha facilitates beginner-friendly Arabic calligraphy workshops...
        </p>

        <a
          href="mailto:handofayesha@gmail.com"
          className="mt-12 inline-block border-b border-white/60 pb-1 text-xs uppercase tracking-wide"
        >
          Contact / Enquire
        </a>
      </div>
    </section>
  );
}
