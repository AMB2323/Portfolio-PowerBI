import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ExperienceSection />
      <Projects />
      <EducationSection />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col-reverse items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="mb-4 font-mono text-xs text-muted">
              <span className="text-accent">●</span> {profile.subtitle}
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 font-display text-xl font-semibold text-muted sm:text-2xl">
              {profile.title} — {profile.subtitle}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
              {profile.positioning}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#projets"
                className="bg-accent-gradient rounded-md px-5 py-2.5 font-mono text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Voir les projets
              </Link>
              <a
                href={profile.contact.cvPath}
                download="CV_Amine_Bezzi.pdf"
                className="rounded-md border border-border bg-background px-5 py-2.5 font-mono text-sm font-semibold transition-colors hover:border-accent"
              >
                Télécharger le CV (PDF)
              </a>
            </div>
          </div>

          {/* Portrait fondu dans la page : halo violet diffus, bords dissous,
              anneau d'accent partiel — pas de cadre photo. */}
          <div className="relative mx-auto w-52 shrink-0 sm:w-60 lg:mx-0 lg:w-72">
            <div
              aria-hidden="true"
              className="bg-accent-gradient absolute inset-2 rounded-full opacity-25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-6 bottom-2 top-6 rounded-full border border-accent/25"
            />
            <Image
              src="/portrait.webp"
              alt={`Portrait d'${profile.name}`}
              width={800}
              height={1000}
              priority
              sizes="(min-width: 1024px) 18rem, 15rem"
              className="portrait-blend relative aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </div>

        {/* Élément signature : bandeau de KPIs lu comme la première ligne
            d'un rapport Power BI — chiffres réels du parcours. */}
        <dl className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {profile.kpis.map((kpi, i) => (
            <Reveal key={kpi.label} delay={i * 90}>
              <div className="rounded-lg border border-border bg-background p-4">
                <div
                  className="bg-accent-gradient mb-3 h-0.5 w-8"
                  aria-hidden="true"
                />
                <dd className="text-accent-gradient font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {kpi.value}
                </dd>
                <dt className="mt-1 text-sm font-medium">{kpi.label}</dt>
                <p className="mt-1 font-mono text-xs text-muted">
                  {kpi.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading tab="a_propos" title="À propos" />
        <div className="max-w-3xl space-y-4 text-base leading-relaxed">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="competences"
      className="border-y border-border bg-surface py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            tab="competences"
            title="Compétences, par rôle dans la chaîne data"
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.skillGroups.map((group, i) => (
            <Reveal key={group.role} delay={i * 70}>
              <article className="h-full rounded-lg border border-border bg-background p-5">
                <h3 className="font-display text-lg font-bold">
                  {group.role}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {group.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded border border-border bg-surface px-2 py-1 font-mono text-xs"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading tab="experience" title="Expérience" />
      </Reveal>
      <ol className="space-y-0">
        {profile.experiences.map((xp, i) => (
          <li
            key={`${xp.company}-${xp.period}`}
            className="relative border-l border-border pb-8 pl-6 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background"
            />
            <Reveal delay={i * 60}>
              <p className="font-mono text-xs text-muted">{xp.period}</p>
              <h3 className="mt-1 font-display text-lg font-bold">
                {xp.role}{" "}
                <span className="font-semibold text-muted">— {xp.company}</span>
              </h3>
              {xp.location ? (
                <p className="mt-0.5 font-mono text-xs text-muted">
                  {xp.location}
                </p>
              ) : null}
              {xp.highlights.length > 0 ? (
                <ul className="mt-3 max-w-3xl space-y-2 text-sm leading-relaxed">
                  {xp.highlights.map((h) => (
                    <li key={h.slice(0, 40)} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="bg-accent-gradient mt-1.5 h-1 w-3 shrink-0"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {xp.sections?.map((section) => (
                <div key={section.title} className="mt-4 max-w-3xl">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-accent">
                    {section.title}
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed">
                    {section.bullets.map((b) => (
                      <li key={b.slice(0, 40)} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="bg-accent-gradient mt-1.5 h-1 w-3 shrink-0"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Projects() {
  return (
    <section id="projets" className="border-y border-border bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            tab="projets"
            title="Études de cas — dashboards livrés"
          />
        </Reveal>
        <div className="space-y-6">
          {profile.projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <Link
                href={`/projets/${project.slug}`}
                className="group grid gap-0 overflow-hidden rounded-lg border border-border bg-background transition-colors hover:border-accent md:grid-cols-5"
              >
                {project.coverImage ? (
                  <div className="relative aspect-[16/10] md:col-span-2 md:aspect-auto md:min-h-56">
                    <Image
                      src={project.coverImage.src}
                      alt={project.coverImage.alt}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="bg-accent-gradient relative flex aspect-[16/10] items-center justify-center p-6 md:col-span-2 md:aspect-auto md:min-h-56">
                    <p className="text-center font-mono text-xs leading-relaxed text-white/90">
                      Projet interne confidentiel
                      <br />— pas de captures publiables —
                    </p>
                  </div>
                )}
                <div className="p-5 md:col-span-3 md:p-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    {project.sector} · {project.year}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold group-hover:text-accent-strong">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded border border-border bg-surface px-2 py-1 font-mono text-xs"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-mono text-xs text-accent-strong">
                    Lire l&apos;étude de cas →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="formation" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading tab="formation" title="Formation & certifications" />
      </Reveal>
      <div className="grid gap-8 md:grid-cols-3">
        <Reveal>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              Formation
            </h3>
            <ul className="mt-4 space-y-4">
              {profile.education.map((ed) => (
                <li key={ed.degree}>
                  <p className="font-semibold">{ed.degree}</p>
                  <p className="font-mono text-xs text-muted">
                    {ed.school} · {ed.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={70}>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              Certifications
            </h3>
            <ul className="mt-4 space-y-4">
              {profile.certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="font-semibold">{cert.name}</p>
                  <p className="font-mono text-xs text-muted">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              Langues
            </h3>
            <ul className="mt-4 space-y-4">
              {profile.languages.map((lang) => (
                <li key={lang.language}>
                  <p className="font-semibold">{lang.language}</p>
                  <p className="font-mono text-xs text-muted">{lang.level}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading tab="contact" title="Travaillons ensemble" />
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              <p className="max-w-md text-base leading-relaxed">
                Disponible pour des missions Power BI et Data Analytics :
                cadrage, modélisation, industrialisation du reporting et design
                de dashboards de direction.
              </p>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="font-semibold text-report-blue hover:underline"
                    >
                      {profile.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                    Téléphone
                  </dt>
                  <dd className="mt-1 font-semibold">
                    {profile.contact.phoneFr} ·{" "}
                    <span className="font-normal text-muted">
                      {profile.contact.phoneWhatsApp} (WhatsApp)
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                    LinkedIn
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={profile.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-report-blue hover:underline"
                    >
                      linkedin.com/in/amine-bezzi
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
