export function Hero() {
  return (
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
            Modern Abstract Arabic Calligraphy — exploring language, form, and
            meaning.
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
