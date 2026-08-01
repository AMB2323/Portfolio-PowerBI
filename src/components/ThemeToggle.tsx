"use client";

export function ThemeToggle() {
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Basculer entre thème clair et thème sombre"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted transition-colors hover:text-foreground"
    >
      {/* Icône unique : demi-disque, lisible dans les deux thèmes */}
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5Z" fill="currentColor" />
      </svg>
    </button>
  );
}
