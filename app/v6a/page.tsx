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

export default function Ledger() {
  const [flipped, setFlipped] = React.useState(false)
  useSecretWord("harry", () => setFlipped((f) => !f))

  return (
    <div className="font-[family-name:var(--font-v6a)] lg:grid lg:grid-cols-[21rem_1fr]">
      <aside className="flex items-center justify-center bg-muted/45 px-6 py-24 lg:sticky lg:top-0 lg:h-dvh lg:py-0">
        <div className="animate-rise text-center">
          <div
            className={cn(
              "transition-transform duration-700 ease-out motion-reduce:transition-none",
              flipped && "-scale-x-100"
            )}
          >
            <Portrait size={196} className="max-w-[56vw]" priority />
          </div>
          <Caption
            className="label mt-7 block w-full cursor-pointer transition-colors hover:text-foreground"
            lines={[
              "Harry, mid-thought",
              "The cap is not negotiable",
              "Placeholder — real photo pending",
            ]}
          />
        </div>
      </aside>

      <main className="px-6 sm:px-12 lg:px-20">
        <section className="relative flex min-h-dvh flex-col justify-center py-32">
          {/* Theme icon sits at the head of the content column. */}
          <div className="flex items-start justify-between gap-6">
            <p
              className="label animate-rise stagger"
              style={{ ["--i" as string]: 0 }}
            >
              {site.role} — {site.location}
            </p>
            <ThemeToggle className="animate-rise -mt-2" />
          </div>

          <h1
            className="animate-veil stagger mt-8 text-[clamp(2.75rem,7vw,5rem)] leading-[0.95] tracking-[-0.035em]"
            style={{ ["--i" as string]: 1 }}
          >
            {site.first}
            <br />
            <em className="font-normal italic text-muted-foreground">
              {site.last}
            </em>
          </h1>

          {/* About directly under the name; links ruled off beside it. */}
          <div
            className="animate-rise stagger mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16"
            style={{ ["--i" as string]: 3 }}
          >
            <div>
              <div className="max-w-lg space-y-5 text-[1.0625rem] leading-[1.8] text-muted-foreground">
                {bio.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
              <Link
                href="/v6a/about"
                className="label mt-8 inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                More about me <span aria-hidden>→</span>
              </Link>
            </div>

            <ul className="border-t border-border lg:mt-1.5">
              {links.map((l) => (
                <li key={l.label} className="border-b border-border">
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-baseline justify-between gap-4 py-3"
                  >
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] underline decoration-muted-foreground/40 underline-offset-[6px] transition-colors group-hover:decoration-foreground">
                      {l.label}
                    </span>
                    <span className="label shrink-0">{l.note}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ScrollCue className="absolute bottom-24 left-0" />
        </section>

        {/* Side projects, kept deliberately quiet. */}
        <section className="border-t border-border py-20">
          <Reveal className="label">Also built</Reveal>
          <ul className="mt-8 max-w-2xl">
            {projects.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 50}>
                <a
                  href={p.href}
                  className="group flex items-baseline gap-4 border-b border-border py-3.5 text-[0.9375rem]"
                >
                  <span className="transition-colors group-hover:text-muted-foreground">
                    {p.name}
                  </span>
                  <span className="flex-1 text-muted-foreground">{p.blurb}</span>
                  <span className="label shrink-0">{p.year}</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </section>

        <footer className="flex flex-wrap items-baseline justify-between gap-4 border-t border-border py-10 pb-28">
          <p className="label">© 2026 {site.name}</p>
          <p className="label">
            {work.title} at{" "}
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

      <VariationNav slug="v6a" showTheme={false} />
    </div>
  )
}
