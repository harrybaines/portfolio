"use client"

import Link from "next/link"
import * as React from "react"

import { Caption, useSecretWord } from "@/components/easter-eggs"
import { Portrait } from "@/components/portrait"
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
    <div className="font-[family-name:var(--font-v6h)] lg:grid lg:grid-cols-[35%_1fr]">
      <aside className="flex items-center justify-center bg-muted/45 px-6 py-24 lg:sticky lg:top-0 lg:h-dvh lg:py-0">
        <div className="animate-rise text-center">
          <div
            className={cn(
              "transition-transform duration-700 ease-out motion-reduce:transition-none",
              flipped && "-scale-x-100"
            )}
          >
            <Portrait size={220} className="max-w-[50vw]" priority />
          </div>
          <Caption
            className="mt-7 block w-full cursor-pointer label transition-colors hover:text-foreground"
            lines={[
              "Harry, mid-thought",
              "Placeholder — real photo pending",
              "The cap is not negotiable",
            ]}
          />
        </div>
      </aside>

      <main className="px-6 sm:px-12 lg:px-16">
        <section className="flex min-h-dvh flex-col justify-center pt-20 pb-32">
          {/* The light switch lives in the gutter, above the labels. */}
          <div className={cn(rail, "animate-rise")}>
            <ThemeToggle size="sm" className="-ml-1.5 justify-self-start" />
            <div>
              <p className="label">
                {site.role} — {site.location} 🇬🇧
              </p>
              <h1 className="mt-5 animate-veil text-[clamp(2.5rem,7vw,4.75rem)] leading-[0.95] font-medium tracking-[-0.04em]">
                {site.first}
                <br />
                {site.last}
              </h1>
            </div>
          </div>

          <div
            className={cn(rail, "mt-10 animate-rise stagger")}
            style={{ ["--i" as string]: 3 }}
          >
            <p className="label sm:pt-2">About</p>
            <div>
              <div className="max-w-lg space-y-5 text-[1.0625rem] leading-[1.85] text-muted-foreground">
                {bio.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
              <Link
                href="/v6h/about"
                className="mt-7 inline-flex items-center gap-2 label transition-colors hover:text-foreground"
              >
                More about me <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div
            className={cn(rail, "mt-9 animate-rise stagger")}
            style={{ ["--i" as string]: 4 }}
          >
            <p className="label sm:pt-2">Elsewhere</p>
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    title={l.note}
                    className="font-mono text-[0.6875rem] tracking-[0.16em] uppercase underline decoration-muted-foreground/40 underline-offset-[6px] transition-colors hover:decoration-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Always on the first screen — no scrolling to find it. */}
          <div
            className={cn(rail, "mt-9 animate-rise stagger")}
            style={{ ["--i" as string]: 5 }}
          >
            <p className="label sm:pt-1">Also built</p>
            <ul className="max-w-2xl">
              {projects.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-baseline gap-4 border-b border-border py-3"
                  >
                    <span className="transition-opacity group-hover:opacity-60">
                      {p.name}
                    </span>
                    <span className="flex-1 text-sm text-muted-foreground">
                      {p.blurb}
                    </span>
                    <span className="shrink-0 label">{p.year}</span>
                  </a>
                </li>
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
