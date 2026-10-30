import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, type Content } from "@/lib/portfolio-data";

export default function Hero({ t, cvUrl }: { t: Content; cvUrl: string }) {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        className="pointer-events-none absolute -top-40 -start-40 h-96 w-96 rounded-full bg-glow/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -end-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up text-center lg:text-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-4 py-1.5 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-glow" />
            </span>
            {t.hero.available}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
            {t.hero.greeting}{" "}
            <span className="text-gradient">{t.hero.name}</span>
          </h1>

          <p className="mt-4 text-lg font-semibold text-primary sm:text-xl">{t.hero.title}</p>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
            {t.hero.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button asChild size="lg" className="gap-2 shadow-card">
              <a href={cvUrl} target="_blank" rel="noreferrer" download>
                <Download className="h-4 w-4" />
                {t.hero.downloadCv}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="h-4 w-4" />
                {t.hero.contactMe}
              </a>
            </Button>
          </div>
        </div>

        <div className="animate-fade-up relative mx-auto w-full max-w-sm [perspective:1800px]">
          <div
            className="absolute inset-6 rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <div
            className="relative transition-all duration-500 ease-out hover:-translate-y-1"
            style={{ transform: "perspective(1400px) rotateX(8deg) rotateY(-14deg) rotateZ(-1deg)" }}
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl -z-10" />
            <img
              src="/profile-photo.jpg"
              alt={t.hero.name}
              className="aspect-[3/4] w-full rounded-[2rem] object-cover object-top shadow-[0_30px_80px_rgba(15,23,42,0.28)] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
