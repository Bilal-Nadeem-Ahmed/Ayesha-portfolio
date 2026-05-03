import { useEffect, useState } from "react";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // <section
    //   id="top"
    //   className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    // >
    //   <div
    //     className="absolute inset-0  z-0"
    //     style={{ transform: `translate3d(0, ${y * 0.3}px, 0)` }}
    //   >
    //     <img
    //       src="/assets/hero.jpg"
    //       alt="Abstract Arabic calligraphy artwork"
    //       className="h-full w-full object-cover brightness-20"
    //     />
    //     <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
    //   </div>

    //   <div className="mx-auto max-w-4xl px-6 text-center">
    //     <p
    //       className="mb-8 text-xs uppercase tracking-display font-semibold  opacity-0 animate-fade-in"
    //       style={{ animationDelay: "0.2s" }}
    //     >
    //       Hand of Ayesha
    //     </p>
    //     <h1
    //       className="text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl opacity-0 animate-fade-up"
    //       style={{ animationDelay: "0.5s" }}
    //     >
    //       Ayesha <em className="italic font-light">Ahmed</em>
    //     </h1>
    //     <p
    //       className="mx-auto mt-8 max-w-xl text-base font-semibold md:text-lg opacity-0 animate-fade-up"
    //       style={{ animationDelay: "0.9s" }}
    //     >
    //       Modern Abstract Arabic Calligraphy — exploring language, form, and meaning.
    //     </p>
    //   </div>

    //   <a
    //     href="#about"
    //     className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-display text-muted-foreground"
    //     aria-label="Scroll down"
    //   >
    //     <span className="block animate-bounce-soft">Scroll</span>
    //   </a>
    // </section>
    // <section className="relative min-h-screen w-full flex items-center">
    //   <div className="mx-auto grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
    <section className="relative min-h-screen w-full flex items-center">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
        {/* 📝 LEFT: Text */}
        <div className="z-10">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Hand of Ayesha
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
            Ayesha <span className="italic font-light">Ahmed</span>
          </h1>

          <p className="mt-6 max-w-md text-base md:text-lg text-muted-foreground">
            Modern Abstract Arabic Calligraphy — exploring language, form, and meaning.
          </p>
        </div>

        {/* 🖼️ RIGHT: Image */}
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-2xl">
          <img
            src="/assets/hero.webp"
            alt="Abstract Arabic calligraphy artwork"
            className="h-full w-full object-cover"
          />

          {/* subtle overlay for polish */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </section>
  );
}
