import { ArrowUpRight } from "lucide-react";

const items = [
  {
    title: "In Praise",
    year: "2022",
    description:
      "An exhibition featuring Muslim female artists of different disciplines, bringing awareness to Islamic Art in the Midlands.",
    href: "https://inpraiseexhibition.wordpress.com/",
  },
  {
    title: "Illuminate",
    year: "2024",
    description:
      "A community-focused arts and culture initiative confronting depression, anxiety and healing through creativity. A series of workshops culminated in an exhibition of the participants' work.",
    href: "https://www.bbc.co.uk/news/uk-england-leicestershire-60827986",
  },
  {
    title: "Hiç: In Pursuit of Nothingness",
    year: "2025",
    description:
      "Exploring the Sufi concept of Hiç (nothingness) — bridging traditional Turkish art and contemporary expression, reflecting on mindfulness, ego, and existence.",
    href: "https://yeelondon.org.uk/2025/11/04/hic-exhibition/",
  },
  {
    title: "The Date Project",
    year: "2026",
    description:
      "An annual project that takes place during the month of Ramadan, each tin of dates is sold to raise awareness and funds for a different charity. Different artists are selected every year to design the tins.",
    href: "https://www.instagram.com/p/DSuZAZWDRvl/?igsh=MXdjdWlucWl0anRkNQ%3D%3D",
  },
];

export function Exhibitions() {
  return (
    <section id="exhibitions" className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40">
      <div className="reveal mb-20">
        <p className="mb-6 text-xs uppercase tracking-display text-muted-foreground">
          Exhibitions & Projects
        </p>
        <h2 className="max-w-3xl text-4xl md:text-5xl">
          Selected <em className="italic font-light">exhibitions</em> and collaborative projects.
        </h2>
      </div>

      <ul className="border-t border-border">
        {items.map((it, i) => (
          <li key={i} className="reveal group" style={{ transitionDelay: `${i * 80}ms` }}>
            <a
              href={it.href}
              target="_blank"
              rel="noreferrer"
              className="grid gap-4 border-b border-border py-10 transition-colors duration-500 hover:bg-secondary/40 md:grid-cols-12 md:gap-8 md:px-2"
            >
              <div className="text-xs uppercase tracking-display text-muted-foreground md:col-span-2">
                {it.year}
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                  {it.title}
                </h3>
              </div>
              <p className="text-muted-foreground md:col-span-5">{it.description}</p>
              <div className="flex items-start justify-end md:col-span-1">
                <ArrowUpRight
                  className="text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
                  size={22}
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
