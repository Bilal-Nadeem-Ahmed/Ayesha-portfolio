import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );
    els.forEach((el) => io.observe(el));
    // Safety: ensure anything already visible / above the fold is shown
    requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add("is-visible");
      });
    });
    return () => io.disconnect();
  }, []);
}
