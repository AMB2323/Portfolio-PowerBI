type SectionHeadingProps = {
  /** Libellé mono court, façon nom d'onglet de rapport */
  tab: string;
  title: string;
};

export function SectionHeading({ tab, title }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
        {tab}
      </p>
      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
