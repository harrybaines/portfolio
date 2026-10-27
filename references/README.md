# References

Two earlier designs, kept for reference. They live outside `app/`, so Next.js
doesn't route or deploy them, but they still typecheck against the shared
components and `lib/site.ts`.

| Folder    | Was    | Idea                                                | Display face |
| --------- | ------ | --------------------------------------------------- | ------------ |
| `rule/`   | `/v6h` | A mono label hangs in the gutter beside every block | Fraunces     |
| `ledger/` | `/v6a` | Links ruled off in a column beside the writing      | Newsreader   |

To look at one again, copy its folder into `app/` (for example
`app/rule/`) and run `npm run dev`. Rule needs Fraunces: add it back to the
fonts in `app/layout.tsx` with `variable: "--font-fraunces"`. The about pages'
back links still point at the old `/v6h` and `/v6a` slugs.
