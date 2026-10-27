# Harry Baines — portfolio

Personal site. Next.js 16 + Tailwind v4 + shadcn (base preset).

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Pages

| Route    | What it is                                                       |
| -------- | ---------------------------------------------------------------- |
| `/`      | Name, about, links and side projects, all on one screen.         |
| `/about` | Longer about: what I'm doing now, experience, education, hobbies |

Two earlier designs are kept in [`references/`](references/README.md). They
aren't routed or deployed.

## Where things are

| Path                          | What it is                                             |
| ----------------------------- | ------------------------------------------------------ |
| `lib/site.ts`                 | All copy: name, about, links, projects, `/about`.      |
| `app/page.tsx`                | The home page.                                         |
| `app/about/page.tsx`          | The about page.                                        |
| `components/theme-toggle.tsx` | The light/dark icon.                                   |
| `components/portrait.tsx`     | `Portrait` (circular) and `Snapshot` (the desk image). |
| `components/easter-eggs.tsx`  | Hidden bits, shared across pages.                      |
| `components/about-parts.tsx`  | About-page blocks used by the references.              |
| `public/harry.jpg`            | The portrait.                                          |
| `public/harry-desk.svg`       | Placeholder desk scene.                                |
| `references/`                 | Earlier designs, not deployed.                         |

## Swapping in your own content

Everything lives in `lib/site.ts`:

- `site.about` — the two paragraphs under the name on the home page.
- `links` — GitHub, X, Instagram and LinkedIn.
- `projects` — the "Also built" list. `href` and `year` are optional; a
  project without `href` shows as plain text.
- `profile` — everything on `/about`: intro, currently, experience, education
  and outside of work.
- `work` — the day job.
- `bio` and `aboutPage` — only used by the designs in `references/`.

Images: the portrait is `public/harry.jpg`. The desk scene used by the
references is still a placeholder at `public/harry-desk.svg`.

## Hidden things

- `d` anywhere toggles light and dark.
- Typing `harry` flips the portrait so he looks the other way.
- Click the caption under the portrait.
- Open the console.

## Notes

- Dark mode is `next-themes` with `class` strategy; tokens live in
  `app/globals.css`.
- Every animation is behind `prefers-reduced-motion`.
- All routes are statically prerendered.
