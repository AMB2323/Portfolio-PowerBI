import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name} — {profile.title}
        </p>
        <p>
          source : CV 2026 · construit avec Next.js · déployé sur Vercel
        </p>
      </div>
    </footer>
  );
}
