import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, type Project } from "@/content/profile";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getProject(slug: string): Project | undefined {
  return profile.projects.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return profile.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: `${project.name} — ${profile.name}`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const otherProjects = profile.projects.filter((p) => p.slug !== slug);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <nav aria-label="Fil d'Ariane" className="mb-8 font-mono text-xs">
        <Link href="/#projets" className="text-muted hover:text-foreground">
          ← Retour aux projets
        </Link>
      </nav>

      <header>
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          {project.sector} · {project.year}
        </p>
        <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {project.name}
        </h1>
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
      </header>

      {project.coverImage ? (
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-surface">
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            width={1600}
            height={1043}
            priority
            sizes="(min-width: 896px) 896px, 100vw"
            className="w-full"
          />
          <figcaption className="border-t border-border px-4 py-2 font-mono text-xs text-muted">
            {project.coverImage.alt}
          </figcaption>
        </figure>
      ) : (
        <div className="bg-accent-gradient mt-8 flex items-center justify-center rounded-lg p-10">
          <p className="text-center font-mono text-sm leading-relaxed text-white/90">
            Projet interne confidentiel — pas de captures publiables.
          </p>
        </div>
      )}

      <div className="mt-10 space-y-10">
        <CaseSection tab="contexte" title="Contexte">
          <p>{project.context}</p>
        </CaseSection>

        <CaseSection tab="contrainte" title="Contrainte">
          <p>{project.constraint}</p>
        </CaseSection>

        <CaseSection tab="contribution" title="Ce que j'ai construit">
          <ul className="space-y-2">
            {project.contributions.map((item) => (
              <li key={item.slice(0, 40)} className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1 w-3 shrink-0 bg-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection tab="decisions" title="Décisions techniques">
          <ul className="space-y-2">
            {project.decisions.map((item) => (
              <li key={item.slice(0, 40)} className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1 w-3 shrink-0 bg-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CaseSection>

        {project.images.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-lg border border-border bg-surface"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1600}
              height={1043}
              sizes="(min-width: 896px) 896px, 100vw"
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2 font-mono text-xs text-muted">
              {image.alt}
            </figcaption>
          </figure>
        ))}

        <CaseSection tab="resultat" title="Ce que ça change">
          <p>{project.outcome}</p>
        </CaseSection>
      </div>

      <aside className="mt-14 border-t border-border pt-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Autres études de cas
        </h2>
        <ul className="mt-4 space-y-3">
          {otherProjects.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/projets/${p.slug}`}
                className="font-display text-lg font-bold text-report-blue hover:underline"
              >
                {p.name}
              </Link>
              <span className="ml-2 font-mono text-xs text-muted">
                {p.year}
              </span>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
}

function CaseSection({
  tab,
  title,
  children,
}: {
  tab: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        {tab}
      </p>
      <h2 className="mt-1 font-display text-xl font-bold">{title}</h2>
      <div className="mt-3 max-w-3xl text-base leading-relaxed">{children}</div>
    </section>
  );
}
