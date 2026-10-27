"use client"

import Link from "next/link"
import * as React from "react"

import { Caption, useSecretWord } from "@/components/easter-eggs"
import { Portrait } from "@/components/portrait"
import { Reveal } from "@/components/reveal"
import { ScrollCue } from "@/components/scroll-cue"
import { ThemeToggle } from "@/components/theme-toggle"
import { VariationNav } from "@/components/variation-nav"
import { bio, links, projects, site, work } from "@/lib/site"
import { cn } from "@/lib/utils"

/** Every block hangs off a mono label in the gutter. */
const rail = "grid gap-3 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-8"

export default function Rule() {
  const [flipped, setFlipped] = React.useState(false)
  useSecretWord("harry", () => setFlipped((f) => !f))

  return (
    <div className="font-[family-name:var(--font-v6h)] lg:grid lg:grid-cols-[20rem_1fr]">
      <aside className="flex items-center justify-center bg-muted/45 px-6 py-24 lg:sticky lg:top-0 lg:h-dvh lg:py-0">
        <div className="animate-rise text-center">
          <div
            className={cn(
              "transition-transform duration-700 ease-out motion-reduce:transition-none",
              flipped && "-scale-x-100"
            )}
          >
            <Portrait size={172} className="max-w-[50vw]" priority />
          </div>
          <Caption
            className="label mt-7 block w-full cursor-pointer transition-colors hover:text-foreground"
            lines={[
              "Harry, mid-thought",
              "Placeholder — real photo pending",
              "The cap is not negotiable",
            ]}
          />
        </div>
      </aside>

      <main className="px-6 sm:px-12 lg:px-16">
        <section className="relative flex min-h-dvh flex-col justify-center py-32">
          {/* The light switch lives in the gutter, above the labels. */}
          <div className={cn(rail, "animate-rise")}>
            <ThemeToggle size="sm" className="-ml-1.5 justify-self-start" />
            <div>
              <p className="label">
                {site.role} — {site.location}
              </p>
              <h1 className="animate-veil mt-5 text-[clamp(2.5rem,7vw,4.75rem)] font-light leading-[0.95] tracking-[-0.04em]">
                {site.first}
                <br />
                {site.last}
              </h1>
            </div>
          </div>

          <div className={cn(rail, "animate-rise stagger mt-14")} style={{ ["--i" as string]: 3 }}>
            <p className="label sm:pt-2">About</p>
            <div>
              <div className="max-w-lg space-y-5 text-[1.0625rem] leading-[1.85] text-muted-foreground">
                {bio.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
              <Link
                href="/v6h/about"
                className="label mt-7 inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                More about me <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className={cn(rail, "animate-rise stagger mt-12")} style={{ ["--i" as string]: 4 }}>
            <p className="label sm:pt-2">Elsewhere</p>
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    title={l.note}
                    className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] underline decoration-muted-foreground/40 underline-offset-[6px] transition-colors hover:decoration-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ScrollCue className="absolute bottom-24 left-0" />
        </section>

        <section className="border-t border-border py-20">
          <div className={rail}>
            <Reveal as="p" className="label sm:pt-1">
              Also built
            </Reveal>
            <ul className="max-w-2xl">
              {projects.map((p, i) => (
                <Reveal as="li" key={p.name} delay={i * 50}>
                  <a
                    href={p.href}
                    className="group flex items-baseline gap-4 border-b border-border py-3.5"
                  >
                    <span className="transition-opacity group-hover:opacity-60">
                      {p.name}
                    </span>
                    <span className="flex-1 text-sm text-muted-foreground">
                      {p.blurb}
                    </span>
                    <span className="label shrink-0">{p.year}</span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <footer className={cn(rail, "border-t border-border py-10 pb-28")}>
          <p className="label">© 2026</p>
          <p className="label">
            {site.name} — {work.title} at{" "}
            <a
              href={work.href}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {work.company}
            </a>
          </p>
        </footer>
      </main>

      <VariationNav slug="v6h" showTheme={false} />
    </div>
  )
}
