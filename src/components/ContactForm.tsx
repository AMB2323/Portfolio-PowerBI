"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/content/profile";

/**
 * Formulaire sans backend : la soumission ouvre le client mail du visiteur
 * avec sujet et corps pré-remplis (mailto:). Voir le README pour brancher
 * un envoi serveur (Server Action + Resend) ou un service tiers (Formspree).
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Contact portfolio — ${name || "visiteur"}`,
    );
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="font-mono text-xs text-muted">
          Votre nom
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-md border border-border bg-surface px-3 py-2 text-sm"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="font-mono text-xs text-muted"
        >
          Votre message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-y rounded-md border border-border bg-surface px-3 py-2 text-sm"
        />
      </div>
      <button
        type="submit"
        className="self-start rounded-md bg-accent px-4 py-2 font-mono text-sm font-semibold text-background transition-opacity hover:opacity-90"
      >
        Ouvrir dans mon client mail
      </button>
    </form>
  );
}
