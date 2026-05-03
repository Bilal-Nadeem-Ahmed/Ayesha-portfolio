import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Works } from "@/components/site/Works";
import { Exhibitions } from "@/components/site/Exhibitions";
import { Practice } from "@/components/site/Practice";
import { Workshops } from "@/components/site/Workshops";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ayesha Ahmed" },
      {
        name: "description",
        content:
          "Hand of Ayesha — London-based artist Ayesha Ahmed. Modern abstract Arabic calligraphy, exhibitions, ceramics and workshops.",
      },
      { property: "og:title", content: "Ayesha Ahmed — Hand of Ayesha" },
      {
        property: "og:description",
        content: "Modern abstract Arabic calligraphy by Ayesha Ahmed.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Exhibitions />
      <Practice />
      <Workshops />
      <Footer />
    </main>
  );
}
