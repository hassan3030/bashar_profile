import {
  CheckCircle2,
  Cpu,
  Database,
  FileSpreadsheet,
  GraduationCap,
  Mail,
  MapPin,
  MonitorSmartphone,
  Network,
  Phone,
  Settings2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, type Content, type Lang } from "@/lib/portfolio-data";

const skillIcons = {
  hardware: Cpu,
  network: Network,
  office: FileSpreadsheet,
  data: Database,
  remote: MonitorSmartphone,
  systems: Settings2,
} as const;

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {kicker}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-primary" />
    </div>
  );
}

export function About({ t }: { t: Content }) {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={t.about.kicker} title={t.about.title} />
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {t.about.paragraphs.map((paragraph, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
            >
              <p className="leading-relaxed text-muted-foreground">{paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills({ t }: { t: Content }) {
  return (
    <section id="skills" className="scroll-mt-20 bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={t.skills.kicker} title={t.skills.title} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.items.map((skill) => {
            const Icon = skillIcons[skill.icon as keyof typeof skillIcons];
            return (
              <div
                key={skill.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-card transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{skill.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProjectSection({ t }: { t: Content }) {
  return (
    <section id="project" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={t.project.kicker} title={t.project.title} />
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-lift sm:p-10">
          <div
            className="pointer-events-none absolute -top-24 -end-24 h-64 w-64 rounded-full bg-glow/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                {t.project.periodLabel}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {t.project.name}
              </h3>
            </div>
            <span className="shrink-0 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium">
              {t.project.period}
            </span>
          </div>

          <p className="relative mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            {t.project.description}
          </p>

          <ul className="relative mt-7 grid gap-3 sm:grid-cols-2">
            {t.project.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm leading-relaxed">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="relative mt-8 flex flex-wrap gap-2">
            {t.project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Education({ t }: { t: Content }) {
  return (
    <section id="education" className="scroll-mt-20 bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={t.education.kicker} title={t.education.title} />
        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-card sm:p-8">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-card">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold leading-snug">
              {t.education.degree}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.education.institute}</p>
            <span className="mt-4 inline-block rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium">
              {t.education.date}
            </span>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-card sm:p-8">
            <h3 className="font-display text-xl font-semibold">{t.education.languagesTitle}</h3>
            <div className="mt-6 grid gap-6">
              {t.education.languages.map((language) => (
                <div key={language.name}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium">{language.name}</span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {language.level}
                    </span>
                  </div>
                  <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-primary"
                      style={{ width: `${language.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact({ t, lang }: { t: Content; lang: Lang }) {
  const cards = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      ltr: true,
    },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: personalInfo.phoneDisplay,
      href: personalInfo.phoneHref,
      ltr: true,
    },
    {
      icon: MapPin,
      label: t.contact.locationLabel,
      value: personalInfo.location[lang],
      href: undefined,
      ltr: false,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={t.contact.kicker} title={t.contact.title} />
        <p className="mx-auto -mt-6 mb-10 max-w-xl text-center text-muted-foreground">
          {t.contact.subtitle}
        </p>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            const content = (
              <>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-card">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {card.label}
                  </p>
                  <p className="mt-1 truncate text-sm font-medium" dir={card.ltr ? "ltr" : undefined}>
                    {card.value}
                  </p>
                </div>
              </>
            );
            return card.href ? (
              <a
                key={card.label}
                href={card.href}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                {content}
              </a>
            ) : (
              <div
                key={card.label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="gap-2 shadow-card">
            <a href={`mailto:${personalInfo.email}`}>
              <Mail className="h-4 w-4" />
              {t.contact.cta}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Footer({ t }: { t: Content }) {
  return (
    <footer className="border-t border-border bg-secondary/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>{t.contact.footer}</p>
        <a href="#home" className="font-medium text-primary transition-opacity hover:opacity-80">
          {t.hero.name}
        </a>
      </div>
    </footer>
  );
}
