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
| `public/harry.svg`            | Placeholder portrait, hand-drawn as plain SVG shapes.  |
| `public/harry-desk.svg`       | Placeholder desk scene.                                |
| `references/`                 | Earlier designs, not deployed.                         |

## Swapping in your own content

Everything lives in `lib/site.ts`:

- `site.about` — the two paragraphs under the name on the home page.
- `links` — the four outbound links. **GitHub and archtms are verified; the
  Instagram handle and the Gumroad store URL are guesses. Check them.**
- `projects` — the "Also built" list. archtms is real; the other two are
  placeholders.
- `profile` — everything on `/about`: intro, currently, experience, education
  and outside of work.
- `work` — the day job.
- `bio` and `aboutPage` — only used by the designs in `references/`.

Images: drop `public/harry.jpg` and `public/harry-desk.jpg` in and change the
two `src` values in `components/portrait.tsx`.

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
