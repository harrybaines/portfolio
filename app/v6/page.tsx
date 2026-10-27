"use client"

import * as React from "react"

import { Caption, useSecretWord } from "@/components/easter-eggs"
import { Portrait } from "@/components/portrait"
import { Reveal } from "@/components/reveal"
import { ScrollCue } from "@/components/scroll-cue"
import { VariationNav } from "@/components/variation-nav"
import { links, projects, site, work } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function Split() {
  // He's looking off to the left. Ask nicely and he'll look the other way.
  const [flipped, setFlipped] = React.useState(false)
  useSecretWord("harry", () => setFlipped((f) => !f))

  return (
    <div className="font-[family-name:var(--font-v6)] lg:grid lg:grid-cols-2">
      {/* Portrait holds still while the writing goes past. */}
      <aside className="flex items-center justify-center bg-muted/45 px-6 py-24 lg:sticky lg:top-0 lg:h-dvh lg:py-0">
        <div className="animate-rise text-center">
          <div
            className={cn(
              "transition-transform duration-700 ease-out motion-reduce:transition-none",
              flipped && "-scale-x-100"
            )}
          >
            <Portrait size={240} className="max-w-[62vw]" priority />
          </div>
          <Caption
            className="label mt-8 block w-full cursor-pointer transition-colors hover:text-foreground"
            lines={[
              "Harry, mid-thought",
              "The cap is not negotiable",
              "Placeholder — real photo pending",
              "He is looking at the deploy logs",
            ]}
          />
        </div>
      </aside>

      <main className="px-6 sm:px-12 lg:px-20">
        <section className="relative flex min-h-dvh flex-col justify-center py-32">
          <p
            className="label animate-rise stagger"
            style={{ ["--i" as string]: 0 }}
          >
            {site.role} — {site.location}
          </p>

          <h1
            className="animate-veil stagger mt-7 text-[clamp(2.75rem,8vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.035em]"
            style={{ ["--i" as string]: 1 }}
          >
            {site.first}
            <br />
            <em className="font-normal italic text-muted-foreground">
              {site.last}
            </em>
          </h1>

          <p
            className="animate-rise stagger mt-12 max-w-lg text-[1.0625rem] leading-[1.9] text-muted-foreground"
            style={{ ["--i" as string]: 3 }}
          >
            {site.intro}
          </p>

          <ul
            className="animate-rise stagger mt-14 flex flex-wrap gap-x-7 gap-y-3"
            style={{ ["--i" as string]: 4 }}
          >
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground underline decoration-muted-foreground/40 underline-offset-[6px] transition-colors hover:text-foreground hover:decoration-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <ScrollCue className="absolute bottom-24 left-0" />
        </section>

        <section className="border-t border-border py-24">
          <Reveal>
            <p className="label">Digital products</p>
            <h2 className="mt-5 max-w-md text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] tracking-[-0.025em]">
              Small tools, shipped properly.
            </h2>
          </Reveal>

          <ul className="mt-14 space-y-px">
            {projects.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 70}>
                <a
                  href={p.href}
                  className="group -mx-4 block rounded-sm px-4 py-6 transition-colors duration-300 hover:bg-muted/60"
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="text-2xl tracking-[-0.02em]">
                      {p.name}
                    </span>
                    <span className="label shrink-0">{p.year}</span>
                  </span>
                  <span className="mt-2 block max-w-sm text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </span>
                  <span className="label mt-3 block opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Open {p.name} ↗
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </section>

        <section className="border-t border-border py-24">
          <Reveal>
            <p className="label">About</p>
            <p className="mt-8 text-[1.0625rem]">
              {work.title} at{" "}
              <a
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-foreground/30 underline-offset-[5px] transition-colors hover:decoration-foreground"
              >
                {work.company}
              </a>
            </p>
            <p className="mt-6 max-w-md text-[1.0625rem] leading-[1.8] text-muted-foreground">
              {site.about}
            </p>
          </Reveal>
        </section>

        <footer className="border-t border-border py-10 pb-28">
          <p className="label">
            © 2026 {site.name} — {site.email}
          </p>
        </footer>
      </main>

      <VariationNav slug="v6" />
    </div>
  )
}
