import { workshopImage as workshop } from "@/lib/images";

export function Workshops() {
  return (
    <section id="workshops" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={workshop}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      <div className="mx-auto max-w-4xl px-6 py-32 text-center text-background md:py-48">
        <p className="reveal mb-6 text-xs uppercase tracking-display text-background/70">
          05 — Workshops
        </p>
        <h2 className="reveal text-4xl leading-tight md:text-6xl">
          Foundational letterforms,{" "}
          <em className="italic font-light">accessible</em> to all.
        </h2>
        <p className="reveal mx-auto mt-10 max-w-2xl text-base leading-relaxed text-background/80 md:text-lg">
          Ayesha facilitates beginner-friendly Arabic calligraphy workshops that
          introduce foundational letterforms through a guided, structured
          approach. Participants are supported in creating their own finished
          pieces, with an emphasis on accessibility and creative exploration.
        </p>
        <a
          href="mailto:hello@handofayesha.com"
          className="reveal mt-12 inline-block border-b border-background/60 pb-1 text-xs uppercase tracking-display transition-colors hover:border-background"
        >
          Contact / Enquire
        </a>
      </div>
    </section>
  );
}
