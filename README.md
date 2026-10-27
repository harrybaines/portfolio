# Harry Baines — portfolio

One set of content, five typographic takes on how a personal site could look.
Next.js 16 + Tailwind v4 + shadcn (base preset).

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## The five

`/v6` is the original split layout. `/v6n` is the same page with the portrait
panel cut to 30% (both render `components/split-page.tsx`). `/v6b` and `/v6h`
rearrange the same bones; `/v6a` is parked at the end of the list and flagged
"Not considered for now" (`shelved: true` in `lib/variations.ts`).

| #   | Route  | Idea                                                | Display face |
| --- | ------ | --------------------------------------------------- | ------------ |
| 01  | `/v6`  | Portrait holds still, the writing scrolls past      | Newsreader   |
| 02  | `/v6n` | The same split, with the portrait panel cut to 30%  | Newsreader   |
| 03  | `/v6b` | The portrait sits in a frame instead of a panel     | Fraunces     |
| 04  | `/v6h` | A mono label hangs in the gutter beside every block | Fraunces     |
| 05  | `/v6a` | Links ruled off in a column beside the writing      | Newsreader   |

Slugs keep their original numbers so old links still work; the counter in the
corner shows position.

`/v6a`, `/v6b` and `/v6h` each have their own about page at `/v6a/about`, `/v6b/about` and so
on — same visual language as its front page, with a link back.

### Where the theme icon lives

Each variation puts it somewhere different, and turns the one in the bottom bar
off (`<VariationNav showTheme={false} />`).

| Route  | Position                                   |
| ------ | ------------------------------------------ |
| `/v6a` | Top right of the content column            |
| `/v6b` | Top of the left column, above the frame    |
| `/v6h` | In the label gutter, above everything else |

## Where things are

| Path                           | What it is                                             |
| ------------------------------ | ------------------------------------------------------ |
| `lib/site.ts`                  | All copy: name, bio, links, projects, about page.      |
| `lib/variations.ts`            | The routes and the order the Next button walks.        |
| `app/page.tsx`                 | Index — pick a variation.                              |
| `app/v6`, `app/v6a`…           | The variations, one folder each (`/about` inside).     |
| `components/variation-nav.tsx` | Bottom bar: index, prev, next, optional lights.        |
| `components/theme-toggle.tsx`  | The theme icon each variation places itself.           |
| `components/portrait.tsx`      | `Portrait` (circular) and `Snapshot` (the desk image). |
| `components/about-parts.tsx`   | Shared about-page copy blocks and the back link.       |
| `components/scroll-cue.tsx`    | The "more below" indicator at the foot of each hero.   |
| `components/easter-eggs.tsx`   | Hidden bits, shared across pages.                      |
| `public/harry.svg`             | Placeholder portrait, hand-drawn as plain SVG shapes.  |
| `public/harry-desk.svg`        | Placeholder desk scene for the about pages.            |

## Swapping in your own content

Everything lives in `lib/site.ts`:

- `bio` — the two paragraphs under the name.
- `links` — the four outbound links. **GitHub and archtms.com are verified; the
  Instagram handle and the Gumroad store URL are guesses. Check them.**
- `projects` — side projects, deliberately understated. Placeholder names.
- `aboutPage` — paragraphs and the "currently" table on the about pages.
- `work` — the day job, linked from every about block.

Images: drop `public/harry.jpg` and `public/harry-desk.jpg` in and change the
two `src` values in `components/portrait.tsx`.

## Hidden things

- `d` anywhere toggles light and dark.
- Typing `harry` flips the portrait so he looks the other way.
- Click the caption under any portrait.
- Open the console.

## Notes

- Dark mode is `next-themes` with `class` strategy; tokens live in
  `app/globals.css`.
- Every animation is behind `prefers-reduced-motion`.
- All routes are statically prerendered.
