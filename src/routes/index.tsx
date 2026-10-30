import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import {
  About,
  Contact,
  Education,
  Footer,
  ProjectSection,
  Skills,
} from "@/components/portfolio/Sections";
import { content, type Lang } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elsayed Ahmed Gioshy — IT Support Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Elsayed Ahmed Gioshy, IT Support Specialist and Systems & Network Technician based in Cairo, Egypt. Hardware, networking, data and remote support.",
      },
      { property: "og:title", content: "Elsayed Ahmed Gioshy — IT Support Specialist" },
      {
        property: "og:description",
        content:
          "IT Support Specialist & Systems/Network Technician in Cairo, Egypt — hardware troubleshooting, networking, data management and remote support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("preferred-lang");
    if (stored === "ar" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("preferred-lang", lang);
  }, [lang]);

  const t = content[lang];

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Header t={t} lang={lang} onToggleLang={() => setLang((current) => (current === "en" ? "ar" : "en"))} />
      <main>
        <Hero t={t} cvUrl="/elsayed-ahmed-gioshy-cv.pdf" />
        <About t={t} />
        <Skills t={t} />
        <ProjectSection t={t} />
        <Education t={t} />
        <Contact t={t} lang={lang} />
      </main>
      <Footer t={t} />
    </div>
  );
}
