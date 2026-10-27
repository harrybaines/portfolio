"use client"

import Link from "next/link"
import * as React from "react"

import { Caption, useSecretWord } from "@/components/easter-eggs"
import { Portrait } from "@/components/portrait"
import { ThemeToggle } from "@/components/theme-toggle"
import { VariationNav } from "@/components/variation-nav"
import { bio, links, projects, site, work } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function Ledger() {
  const [flipped, setFlipped] = React.useState(false)
  useSecretWord("harry", () => setFlipped((f) => !f))

  return (
    <div className="font-[family-name:var(--font-v6a)] lg:grid lg:grid-cols-[32%_1fr]">
      <aside className="flex items-center justify-center bg-muted/45 px-6 py-24 lg:sticky lg:top-0 lg:h-dvh lg:py-0">
        <div className="animate-rise text-center">
          <div
            className={cn(
              "transition-transform duration-700 ease-out motion-reduce:transition-none",
              flipped && "-scale-x-100"
            )}
          >
            <Portrait
              size={340}
              frame="square"
              className="max-w-[72vw] rounded-sm"
              priority
            />
          </div>
          <Caption
            className="mt-7 block w-full cursor-pointer label transition-colors hover:text-foreground"
            lines={[
              "Harry, mid-thought",
              "The cap is not negotiable",
              "Placeholder — real photo pending",
            ]}
          />
        </div>
      </aside>

      <main className="flex min-h-dvh flex-col px-6 sm:px-12 lg:px-20">
        <section className="flex flex-1 flex-col justify-center pt-16 pb-14">
          {/* Theme icon sits at the head of the content column. */}
          <div className="flex items-start justify-between gap-6">
            <p
              className="animate-rise label stagger"
              style={{ ["--i" as string]: 0 }}
            >
              {site.role} — {site.location} 🇬🇧
            </p>
            <ThemeToggle className="-mt-2 animate-rise" />
          </div>

          <h1
            className="mt-8 animate-veil text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.035em] stagger lg:whitespace-nowrap"
            style={{ ["--i" as string]: 1 }}
          >
            {site.first}{" "}
            <em className="font-normal text-muted-foreground italic">
              {site.last}
            </em>
          </h1>

          {/* About directly under the name; links ruled off beside it. */}
          <div
            className="mt-12 grid animate-rise gap-12 stagger lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16"
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
                className="mt-8 inline-flex items-center gap-2 label transition-colors hover:text-foreground"
              >
                More about me <span aria-hidden>→</span>
              </Link>
            </div>

            <ul className="border-t border-border/50 lg:mt-1.5">
              {links.map((l) => (
                <li key={l.label} className="border-b border-border/50">
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-baseline justify-between gap-4 py-3"
                  >
                    <span className="font-mono text-[0.6875rem] tracking-[0.16em] uppercase underline decoration-muted-foreground/40 underline-offset-[6px] transition-colors group-hover:decoration-foreground">
                      {l.label}
                    </span>
                    <span className="shrink-0 label">{l.note}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Side projects, kept deliberately quiet but on the first screen. */}
          <div
            className="mt-14 animate-rise stagger"
            style={{ ["--i" as string]: 4 }}
          >
            <p className="label">Also built</p>
            <ul className="mt-5 max-w-2xl border-t border-border/50">
              {projects.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-baseline gap-4 border-b border-border/50 py-3 text-[0.9375rem]"
                  >
                    <span className="transition-colors group-hover:text-muted-foreground">
                      {p.name}
                    </span>
                    <span className="flex-1 text-muted-foreground">
                      {p.blurb}
                    </span>
                    <span className="shrink-0 label">{p.year}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer
          className="flex animate-rise flex-wrap items-baseline justify-between gap-4 pb-28 stagger"
          style={{ ["--i" as string]: 5 }}
        >
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
