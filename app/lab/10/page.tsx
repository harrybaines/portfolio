import Link from "next/link"

import { LabNav, LocalTime } from "@/components/lab"
import { Portrait } from "@/components/portrait"
import { lab } from "@/lib/lab"
import { links, projects, site, work } from "@/lib/site"

import { instrument, plexMono } from "../fonts"

/** 10 Mono sidebar: a narrow mono column, a big statement, projects up front. */
export default function MonoSidebar() {
  return (
    <div
      className={`${instrument.variable} ${plexMono.variable} min-h-dvh font-[family-name:var(--font-newsreader)] [--font-mono:var(--font-lab-plex)] lg:grid lg:grid-cols-[17rem_1fr]`}
    >
      <aside className="border-border/60 px-6 pt-16 sm:px-10 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:border-r lg:px-8 lg:pt-12 lg:pb-10">
        <Portrait size={56} priority />
        <p className="mt-5 font-mono text-[0.8125rem] font-medium">
          {site.name}
        </p>
        <p className="mt-1 label">{site.caption}</p>

        <dl className="mt-8 grid grid-cols-3 gap-4 font-mono text-[0.75rem] lg:mt-10 lg:block lg:space-y-4">
          <div>
            <dt className="text-muted-foreground/70">role</dt>
            <dd>
              {work.title}, {work.company}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground/70">based</dt>
            <dd>{lab.city}, UK</dd>
          </div>
          <div>
            <dt className="text-muted-foreground/70">local</dt>
            <dd>
              <LocalTime />
            </dd>
          </div>
        </dl>

        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[0.75rem] lg:mt-10 lg:block lg:space-y-1.5">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                ↗ {l.label.toLowerCase()}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/lab/about-b"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              → about
            </Link>
          </li>
        </ul>
      </aside>

      <main className="px-6 pt-14 pb-28 sm:px-10 lg:px-20 lg:pt-[18dvh]">
        <h1 className="max-w-4xl animate-veil font-[family-name:var(--font-lab-instrument)] text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.03em]">
          {lab.statement}{" "}
          <em className="text-muted-foreground">
            Mostly in TypeScript and Python.
          </em>
        </h1>

        {/* Projects get the space: big names, one line each. */}
        <ol className="mt-16 max-w-4xl animate-rise border-t border-border/60">
          {projects.map((p, i) => {
            const body = (
              <>
                <span className="w-8 shrink-0 label">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[clamp(1.5rem,3vw,2.25rem)] tracking-[-0.02em] transition-colors group-hover:text-muted-foreground">
                  {p.name}
                </span>
                <span className="hidden flex-1 text-[0.9375rem] text-muted-foreground md:block">
                  {p.blurb}
                </span>
                <span className="ml-auto shrink-0 label">{p.year}</span>
              </>
            )
            const row =
              "flex items-baseline gap-5 border-b border-border/60 py-5"
            return (
              <li key={p.name}>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group ${row}`}
                  >
                    {body}
                  </a>
                ) : (
                  <div className={row}>{body}</div>
                )}
              </li>
            )
          })}
        </ol>
      </main>

      <LabNav slug="10" />
    </div>
  )
}
