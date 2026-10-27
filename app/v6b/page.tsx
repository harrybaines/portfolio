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

export default function Card() {
  const [flipped, setFlipped] = React.useState(false)
  useSecretWord("harry", () => setFlipped((f) => !f))

  return (
    <div className="font-[family-name:var(--font-v6b)] lg:grid lg:grid-cols-[24rem_1fr]">
      {/* No panel here — the portrait carries its own frame. */}
      <aside className="flex flex-col items-center gap-10 px-6 pt-10 lg:sticky lg:top-0 lg:h-dvh lg:items-start lg:justify-between lg:pb-12">
        <ThemeToggle className="animate-rise self-start" />

        <figure className="animate-rise border border-border p-5 lg:self-center">
          <div
            className={cn(
              "transition-transform duration-700 ease-out motion-reduce:transition-none",
              flipped && "-scale-x-100"
            )}
          >
            <Portrait size={188} className="max-w-[52vw]" priority />
          </div>
          <figcaption className="mt-5 border-t border-border pt-4 text-center">
            <Caption
              className="label w-full cursor-pointer transition-colors hover:text-foreground"
              lines={[
                "Harry Baines, 2026",
                "Placeholder — real photo pending",
                "Looking at the deploy logs",
              ]}
            />
          </figcaption>
        </figure>

        <p className="label hidden lg:block">{site.location}</p>
      </aside>

      <main className="px-6 sm:px-12 lg:px-16">
        <section className="relative flex min-h-dvh flex-col justify-center py-32">
          <p
            className="label animate-rise stagger"
            style={{ ["--i" as string]: 0 }}
          >
            {site.role}
          </p>

          <h1
            className="animate-veil stagger mt-7 text-[clamp(2.75rem,7.5vw,5.25rem)] font-light leading-[0.92] tracking-[-0.04em]"
            style={{ ["--i" as string]: 1 }}
          >
            {site.first} {site.last}
          </h1>

          <div
            className="animate-rise stagger mt-11 max-w-xl space-y-5 text-[1.0625rem] leading-[1.85] text-muted-foreground"
            style={{ ["--i" as string]: 3 }}
          >
            {bio.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>

          <ul
            className="animate-rise stagger mt-11 flex flex-wrap gap-x-8 gap-y-3"
            style={{ ["--i" as string]: 4 }}
          >
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] underline decoration-muted-foreground/40 underline-offset-[6px] transition-colors hover:decoration-foreground"
                  title={l.note}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/v6b/about"
                className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground underline decoration-muted-foreground/40 underline-offset-[6px] transition-colors hover:text-foreground hover:decoration-foreground"
              >
                About
              </Link>
            </li>
          </ul>

          <ScrollCue className="absolute bottom-24 left-0" />
        </section>

        <section className="border-t border-border py-20">
          <Reveal className="label">A few side projects</Reveal>
          <ul className="mt-8 flex flex-col gap-3">
            {projects.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 50}>
                <a href={p.href} className="group inline-flex items-baseline gap-3">
                  <span className="text-lg font-light tracking-[-0.02em] underline decoration-transparent underline-offset-[6px] transition-colors group-hover:decoration-foreground">
                    {p.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {p.blurb}
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

      <VariationNav slug="v6b" showTheme={false} />
    </div>
  )
}
