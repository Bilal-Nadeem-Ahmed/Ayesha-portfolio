import { useEffect, useState } from "react";
import { heroImage as hero } from "@/lib/images";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translate3d(0, ${y * 0.3}px, 0)` }}
      >
        <img
          src={hero}
          alt="Abstract Arabic calligraphy artwork"
          width={1920}
          height={1280}
          className="h-[115%] w-full origin-center object-cover animate-zoom-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <p
          className="mb-8 text-xs uppercase tracking-display text-muted-foreground opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Hand of Ayesha
        </p>
        <h1
          className="text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Ayesha <em className="italic font-light">Ahmed</em>
        </h1>
        <p
          className="mx-auto mt-8 max-w-xl text-base text-muted-foreground md:text-lg opacity-0 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          Modern Abstract Arabic Calligraphy — a London-based practice exploring
          language, form, and meaning.
        </p>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-display text-muted-foreground"
        aria-label="Scroll down"
      >
        <span className="block animate-bounce-soft">Scroll</span>
      </a>
    </section>
  );
}
