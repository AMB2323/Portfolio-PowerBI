import { profile } from "@/content/profile";

type AnonymizedBadgeProps = {
  className?: string;
};

/**
 * Mention « données anonymisées » posée sur les études de cas : les captures
 * viennent de missions clients, aucune donnée réelle n'est diffusée.
 */
export function AnonymizedBadge({ className }: AnonymizedBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border border-accent/40 bg-accent/10 px-2 py-1 font-mono text-[11px] leading-none text-accent-strong ${className ?? ""}`}
    >
      <svg
        aria-hidden="true"
        width="11"
        height="11"
        viewBox="0 0 12 12"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M6 1 1.75 2.7v3.05c0 2.4 1.75 4.15 4.25 5.25 2.5-1.1 4.25-2.85 4.25-5.25V2.7L6 1Z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path
          d="M4.25 6.05 5.6 7.4l2.4-2.6"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {profile.confidentiality.badge}
    </span>
  );
}
