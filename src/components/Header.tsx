import Link from "next/link";
import { profile } from "@/content/profile";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "À propos", href: "/#a-propos" },
  { label: "Compétences", href: "/#competences" },
  { label: "Expérience", href: "/#experience" },
  { label: "Projets", href: "/#projets" },
  { label: "Formation", href: "/#formation" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="shrink-0 font-mono text-sm font-semibold tracking-tight"
        >
          <span className="text-accent">ab</span>
          <span className="text-muted">/</span>
          <span>{profile.name.toLowerCase().replace(" ", "-")}</span>
        </Link>

        {/* Navigation façon volet de slicers d'un rapport */}
        <nav
          aria-label="Navigation principale"
          className="min-w-0 flex-1 overflow-x-auto"
        >
          <ul className="flex items-center gap-1.5 whitespace-nowrap font-mono text-xs">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block rounded-md border border-transparent px-2.5 py-1.5 text-muted transition-colors hover:border-border hover:bg-surface hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={profile.contact.cvPath}
            download="CV_Amine_Bezzi.pdf"
            className="hidden rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-accent sm:inline-block"
          >
            CV (PDF)
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
