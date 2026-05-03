export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center md:px-10">
        <div>
          <p className="font-serif text-2xl">Hand of Ayesha</p>
          <p className="mt-1 text-xs uppercase tracking-display text-muted-foreground">
            Ayesha Ahmed — London
          </p>
        </div>
        <ul className="flex gap-8 text-xs uppercase tracking-display text-muted-foreground">
          <li>
            <a
              href="https://handofayesha.com/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/handofayesha/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="mailto:handofayesha@gmail.com"
              className="transition-colors hover:text-foreground"
            >
              Email
            </a>
          </li>
        </ul>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ayesha Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
