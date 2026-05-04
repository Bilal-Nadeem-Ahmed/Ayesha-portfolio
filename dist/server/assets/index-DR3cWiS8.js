import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-AMnopKoM.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$6 = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$6);
const __iconNode$5 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$5);
const __iconNode$4 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
function ThemeToggle() {
  const [dark, setDark] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = stored === "dark" || !stored && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefers);
    document.documentElement.classList.toggle("dark", prefers);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: "text-muted-foreground transition-colors hover:text-foreground",
      children: dark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 16 })
    }
  );
}
const links = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#exhibitions", label: "Exhibitions" },
  { href: "#practice", label: "Practice" },
  { href: "#workshops", label: "Workshops" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "font-serif text-xl tracking-wide", children: "Ayesha Ahmed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-10 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "text-xs uppercase tracking-display text-muted-foreground transition-colors hover:text-foreground",
              children: l.label
            }
          ) }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen((v) => !v), className: "md:hidden", "aria-label": "Toggle menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 20 }) })
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-background md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col px-6 py-4", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            onClick: () => setOpen(false),
            className: "block py-3 text-sm uppercase tracking-display text-muted-foreground",
            children: l.label
          }
        ) }, l.href)) }) })
      ]
    }
  );
}
function Hero() {
  const [y, setY] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative min-h-screen w-full flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Hand of Ayesha" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight", children: [
        "Ayesha ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: "Ahmed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-base md:text-lg text-muted-foreground", children: "Modern Abstract Arabic Calligraphy — exploring language, form, and meaning." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/hero.webp",
          alt: "Abstract Arabic calligraphy artwork",
          className: "h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/10" })
    ] })
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 md:grid-cols-12 md:gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal md:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-xs uppercase tracking-display text-muted-foreground", children: "Biography" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl leading-tight md:text-5xl", children: [
        "Rooted in ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-light", children: "tradition" }),
        ", reaching toward the contemporary."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/creative-practice.jpg",
          alt: "Ayesha Ahmed at work",
          loading: "lazy",
          width: 1024,
          height: 1280,
          className: "aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:text-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Ayesha Ahmed is a London-based artist working under the name",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Hand of Ayesha" }),
        ". Her practice centres on modern abstract Arabic calligraphy using mixed media to explore the relationship between language, form, and meaning."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Rooted in a deep appreciation for traditional calligraphic forms, her work reinterprets these conventions through a contemporary lens, often pushing legibility to the edge in favour of movement and emotional resonance. Through this approach, she considers how written language can function beyond communication, becoming a vehicle for storytelling and reflection." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Alongside her studio practice, Ayesha facilitates accessible workshops that introduce others to Arabic calligraphy as both a creative and reflective process. Her work has been exhibited in group shows, and continues to evolve through ongoing study, experimentation, and research into traditional techniques." })
    ] })
  ] }) });
}
const extensions = {
  1: "jpg",
  2: "jpg",
  3: "jpg",
  8: "JPG"
};
const works = Array.from({ length: 22 }, (_, i) => {
  const index = i + 1;
  const ext = extensions[index] || "jpeg";
  const name = `works_${index}`;
  return {
    src: `/assets/${name}.${ext}`,
    title: `Work ${index}`
  };
});
function Works() {
  const [active, setActive] = reactExports.useState(null);
  const [visibleCount, setVisibleCount] = reactExports.useState(6);
  const [isMobile, setIsMobile] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const visibleWorks = isMobile ? works.slice(0, visibleCount) : works;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "works", className: "bg-secondary/40 py-32 md:py-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-16 flex items-end justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-xs uppercase tracking-display text-muted-foreground", children: "Selected Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-light", children: "Gallery" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-1 gap-4 sm:columns-2 md:columns-3 md:gap-6", children: visibleWorks.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActive(i),
          className: "group mb-4 w-full break-inside-avoid overflow-hidden rounded-2xl bg-muted",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: w.src,
                alt: w.title,
                loading: "lazy",
                className: "w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/30" })
          ]
        },
        i
      )) }),
      visibleCount < works.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setVisibleCount((prev) => prev + 6),
          className: "text-xs uppercase tracking-display text-muted-foreground border-b border-muted-foreground/30 pb-1 transition hover:text-foreground hover:border-foreground",
          children: "Show More"
        }
      ) })
    ] }),
    active !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[100] bg-black text-white flex items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActive(null),
          className: "absolute top-6 right-6 opacity-70 hover:opacity-100",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 28 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            setActive((prev) => (prev - 1 + works.length) % works.length);
          },
          className: "absolute left-6 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 36 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            setActive((prev) => (prev + 1) % works.length);
          },
          className: "absolute right-6 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 36 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: works[active].src,
            alt: works[active].title,
            className: "max-h-[80vh] mx-auto object-contain"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm opacity-60", children: [
            String(active + 1).padStart(2, "0"),
            " / ",
            works.length
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-2xl font-serif", children: works[active].title })
        ] })
      ] })
    ] })
  ] });
}
const items = [
  {
    title: "In Praise",
    year: "2022",
    description: "An exhibition featuring Muslim female artists of different disciplines, bringing awareness to Islamic Art in the Midlands.",
    href: "https://inpraiseexhibition.wordpress.com/"
  },
  {
    title: "Illuminate",
    year: "2024",
    description: "A community-focused arts and culture initiative confronting depression, anxiety and healing through creativity. A series of workshops culminated in an exhibition of the participants' work.",
    href: "https://www.bbc.co.uk/news/uk-england-leicestershire-60827986"
  },
  {
    title: "Hiç: In Pursuit of Nothingness",
    year: "2025",
    description: "Exploring the Sufi concept of Hiç (nothingness) — bridging traditional Turkish art and contemporary expression, reflecting on mindfulness, ego, and existence.",
    href: "https://yeelondon.org.uk/2025/11/04/hic-exhibition/"
  },
  {
    title: "The Date Project",
    year: "2026",
    description: "An annual project that takes place during the month of Ramadan, each tin of dates is sold to raise awareness and funds for a different charity. Different artists are selected every year to design the tins.",
    href: "https://www.instagram.com/p/DSuZAZWDRvl/?igsh=MXdjdWlucWl0anRkNQ%3D%3D"
  }
];
function Exhibitions() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "exhibitions", className: "mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-xs uppercase tracking-display text-muted-foreground", children: "Exhibitions & Projects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "max-w-3xl text-4xl md:text-5xl", children: [
        "Selected ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-light", children: "exhibitions" }),
        " and collaborative projects."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "border-t border-border", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal group", style: { transitionDelay: `${i * 80}ms` }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: it.href,
        target: "_blank",
        rel: "noreferrer",
        className: "grid gap-4 border-b border-border py-10 transition-colors duration-500 hover:bg-secondary/40 md:grid-cols-12 md:gap-8 md:px-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-display text-muted-foreground md:col-span-2", children: it.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl transition-transform duration-500 group-hover:translate-x-2 md:text-3xl", children: it.title }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground md:col-span-5", children: it.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-end md:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ArrowUpRight,
            {
              className: "text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground",
              size: 22
            }
          ) })
        ]
      }
    ) }, i)) })
  ] });
}
function Practice() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "practice", className: "bg-secondary/40 py-32 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        id: "image-container",
        className: "reveal order-2  overflow-hidden rounded-2xl  md:order-1 ",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/creative-practice.jpg",
            alt: "Calligraphy on ceramic vessel",
            loading: "lazy",
            className: "aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal order-1 flex flex-col  md:order-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-xs uppercase tracking-display text-muted-foreground", children: "Creative Practice" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl", children: [
        "From paper to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-light", children: "three dimensions." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Ayesha's current practice focuses on studying traditional Islamic calligraphy, specifically the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Thuluth script" }),
          " in the Ottoman tradition."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "She is also exploring how calligraphic forms can be translated from paper to three-dimensional surfaces, specifically in the form of ceramics." })
      ] })
    ] })
  ] }) });
}
function Workshops() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "workshops", className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/workshop.JPG",
          alt: "Workshops background",
          className: "h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-4xl px-6 py-32 text-center text-white md:py-48", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-xs uppercase tracking-wide text-white/70", children: "Workshops" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl", children: [
        "Foundational letterforms, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-light", children: "accessible" }),
        " to all."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-10 max-w-2xl text-white/80 text-base md:text-lg", children: "Ayesha facilitates beginner-friendly Arabic calligraphy workshops..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "mailto:handofayesha@gmail.com",
          className: "mt-12 inline-block border-b border-white/60 pb-1 text-xs uppercase tracking-wide",
          children: "Contact / Enquire"
        }
      )
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://handofayesha.com/", children: "Hand of Ayesha" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-display text-muted-foreground", children: "Ayesha Ahmed — London" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex gap-8 text-xs uppercase tracking-display text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://handofayesha.com/",
          target: "_blank",
          rel: "noreferrer",
          className: "transition-colors hover:text-foreground",
          children: "Shop"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://www.instagram.com/handofayesha/",
          target: "_blank",
          rel: "noreferrer",
          className: "transition-colors hover:text-foreground",
          children: "Instagram"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "mailto:handofayesha@gmail.com",
          className: "transition-colors hover:text-foreground",
          children: "Email"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Ayesha Ahmed. All rights reserved."
    ] })
  ] }) });
}
function useReveal() {
  reactExports.useEffect(() => {
    document.documentElement.classList.add("js");
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );
    els.forEach((el) => io.observe(el));
    requestAnimationFrame(() => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add("is-visible");
      });
    });
    return () => io.disconnect();
  }, []);
}
function Index() {
  useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Works, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Exhibitions, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Practice, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Workshops, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
