# Portfolio — Amine Bezzi

CV et portfolio en un seul site : [Next.js](https://nextjs.org) (App Router) + TypeScript strict + Tailwind CSS 4. Une page principale avec ancres, plus une étude de cas détaillée par projet sous `/projets/[slug]`.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:3000
```

Vérifications avant de pousser :

```bash
npm run lint       # ESLint
npm run build      # build de production (doit passer sans erreur)
```

## Où éditer le contenu

**Tout le texte du site vit dans un seul fichier : [`src/content/profile.ts`](src/content/profile.ts).**
Coordonnées, à propos, compétences, expériences, projets, formation, certifications, langues — mettre à jour ce fichier suffit, sans toucher au JSX.

Autres emplacements utiles :

| Quoi | Où |
| --- | --- |
| CV téléchargeable | `public/cv.pdf` (remplacer le fichier, garder le nom) |
| Captures des dashboards | `public/projects/*.webp` (référencées dans `profile.ts`) |
| Couleurs & polices | `src/app/globals.css` (variables) et `src/app/layout.tsx` (next/font) |
| Metadata SEO / JSON-LD | `src/app/layout.tsx` |
| URL publique du site | variable `NEXT_PUBLIC_SITE_URL` (voir `.env.example`) |

## Direction artistique (résumé)

- **Palette** : encre `#12161C`, panneau `#1A212B`, grille `#F2F4F7`, violet signature en dégradé `#7C3AED → #C084FC` (clair : `#6D28D9 → #A855F7`), bleu rapport `#33608C`, vert cible `#2E7D5B`. Thème sombre par défaut.
- **Typographie** : Archivo (display), Inter (texte), IBM Plex Mono (données, labels, métadonnées).
- **Élément signature** : le site se lit comme un rapport Power BI — bandeau de KPIs chiffrés en hero, navigation façon slicers, libellés d'onglets en monospace.
- **Animation** : une seule orchestration (révélation au scroll), `prefers-reduced-motion` respecté.
- **Thèmes** : sombre et clair, bascule dans l'en-tête, préférence système respectée par défaut.

## Formulaire de contact

Actuellement : le formulaire ouvre le client mail du visiteur avec sujet et message pré-remplis (`mailto:`, aucun backend). Deux options pour un vrai envoi :

1. **Server Action + service d'envoi** (ex. [Resend](https://resend.com), 100 mails/jour gratuits) : une action serveur dans `src/app/actions.ts`, clé API dans `RESEND_API_KEY` (variable d'environnement, jamais en dur).
2. **Service de formulaire tiers** (ex. [Formspree](https://formspree.io), 50 soumissions/mois gratuites) : remplacer le `onSubmit` de `src/components/ContactForm.tsx` par un `action` vers l'endpoint Formspree — zéro code serveur.

## Déployer sur Vercel

1. Pousser ce dépôt sur GitHub (déjà fait si vous lisez ceci sur GitHub).
2. Sur [vercel.com](https://vercel.com) : **Add New → Project → Import**, choisir ce dépôt.
3. Build settings : rien à changer, Vercel détecte Next.js automatiquement.
4. (Optionnel) Ajouter la variable `NEXT_PUBLIC_SITE_URL` avec l'URL finale du site (Settings → Environment Variables), puis redéployer — elle alimente metadata, sitemap et JSON-LD.
5. **Deploy**. Chaque `git push` sur la branche de production redéploie automatiquement.
6. Domaine personnalisé : **Settings → Domains**, ajouter par ex. `amine-bezzi.dev` et suivre les instructions DNS.

Le plan Hobby de Vercel (gratuit, usage personnel) suffit largement pour ce site.
