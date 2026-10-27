import Link from "next/link"

import { Portrait } from "@/components/portrait"
import { site } from "@/lib/site"
import { variations } from "@/lib/variations"

export default function IndexPage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col px-6 py-20 sm:px-10 sm:py-28">
      <header className="animate-rise">
        <p className="label">Three portfolios, one person</p>
        <h1 className="mt-6 font-[family-name:var(--font-instrument)] text-5xl leading-[0.95] tracking-[-0.02em] sm:text-6xl">
          {site.first}{" "}
          <span className="text-muted-foreground italic">{site.last}</span>
        </h1>
        <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
          The same words, the same portrait, a few different arguments about how
          a personal site should look. All of them are takes on the same split
          layout. Pick one, then use the button in the corner to walk through
          the rest.
        </p>
      </header>

      <ol className="mt-16 border-t border-border">
        {variations.map((v, i) => (
          <li
            key={v.slug}
            className="animate-rise border-b border-border stagger"
            style={{ ["--i" as string]: i + 2 }}
          >
            <Link
              href={`/${v.slug}`}
              className="group flex items-baseline gap-5 py-5 sm:gap-8"
            >
              <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-muted-foreground tabular-nums">
                {v.n}
              </span>
              <span className="flex-1">
                <span className="block text-lg tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1">
                  {v.title}
                  {v.shelved ? (
                    <span className="ml-3 align-middle font-mono text-[0.625rem] tracking-[0.16em] text-muted-foreground/70 uppercase">
                      Not considered for now
                    </span>
                  ) : null}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {v.note}
                </span>
              </span>
              <span className="hidden font-mono text-[0.6875rem] tracking-[0.14em] text-muted-foreground/70 uppercase sm:block">
                {v.face}
              </span>
              <span className="font-mono text-xs text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <footer className="mt-auto flex items-end justify-between gap-6 pt-20">
        <div>
          <p className="label">Hidden things</p>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li>
              Press <kbd className="font-mono text-foreground">d</kbd> anywhere
              to change the lights.
            </li>
            <li>
              Type <kbd className="font-mono text-foreground">harry</kbd> on any
              variation.
            </li>
            <li>
              Some things react to a click that looks like it does nothing.
            </li>
          </ul>
        </div>
        <Portrait size={56} priority />
      </footer>
    </main>
  )
}
