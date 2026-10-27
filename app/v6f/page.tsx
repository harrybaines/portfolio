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

export default function Bare() {
  const [flipped, setFlipped] = React.useState(false)
  useSecretWord("harry", () => setFlipped((f) => !f))

  return (
    <div className="font-[family-name:var(--font-v6f)]">
      {/* No panel anywhere on this one, so the icon floats. */}
      <ThemeToggle className="animate-rise fixed right-4 top-4 z-50 sm:right-8 sm:top-8" />

      <main className="mx-auto max-w-2xl px-6">
        <section className="relative flex min-h-dvh flex-col justify-center py-32">
          <div
            className={cn(
              "animate-rise stagger transition-transform duration-700 ease-out motion-reduce:transition-none",
              flipped && "-scale-x-100"
            )}
            style={{ ["--i" as string]: 0 }}
          >
            <Portrait size={80} priority />
          </div>

          <p
            className="label animate-rise stagger mt-9"
            style={{ ["--i" as string]: 1 }}
          >
            {site.role} — {site.location}
          </p>

          <h1
            className="animate-veil stagger mt-5 text-[clamp(2.5rem,7vw,4.5rem)] leading-[1] tracking-[-0.03em]"
            style={{ ["--i" as string]: 2 }}
          >
            {site.first}{" "}
            <em className="font-normal italic text-muted-foreground">
              {site.last}
            </em>
          </h1>

          <div
            className="animate-rise stagger mt-10 space-y-5 text-[1.125rem] leading-[1.85] text-muted-foreground"
            style={{ ["--i" as string]: 4 }}
          >
            {bio.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>

          <ul
            className="animate-rise stagger mt-11 flex flex-wrap gap-x-7 gap-y-3"
            style={{ ["--i" as string]: 5 }}
          >
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
            <li>
              <Link
                href="/v6f/about"
                className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground underline decoration-muted-foreground/40 underline-offset-[6px] transition-colors hover:text-foreground hover:decoration-foreground"
              >
                About
              </Link>
            </li>
          </ul>

          <Caption
            className="label mt-10 cursor-pointer self-start transition-colors hover:text-foreground"
            lines={[
              "Placeholder portrait — real photo pending",
              "The cap is not negotiable",
              "Yes, he is looking at the deploy logs",
            ]}
          />

          <ScrollCue className="absolute bottom-24 left-0" />
        </section>

        <section className="border-t border-border py-20">
          <Reveal className="label">Also built</Reveal>
          <ul className="mt-8 space-y-3">
            {projects.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 50}>
                <a href={p.href} className="group block">
                  <span className="text-lg transition-opacity group-hover:opacity-60">
                    {p.name}
                  </span>{" "}
                  <span className="text-sm text-muted-foreground">
                    — {p.blurb}
                  </span>
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

      <VariationNav slug="v6f" showTheme={false} />
    </div>
  )
}
