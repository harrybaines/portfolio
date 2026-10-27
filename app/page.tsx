"use client"

import Link from "next/link"
import * as React from "react"

import { Caption, useSecretWord } from "@/components/easter-eggs"
import { Portrait } from "@/components/portrait"
import { ThemeToggle } from "@/components/theme-toggle"
import { links, projects, site, work } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function Home() {
  // Type his name and the portrait flips.
  const [flipped, setFlipped] = React.useState(false)
  useSecretWord("harry", () => setFlipped((f) => !f))
  const flip = cn(
    "transition-transform duration-700 ease-out motion-reduce:transition-none",
    flipped && "-scale-x-100"
  )

  return (
    <div className="font-[family-name:var(--font-newsreader)] lg:grid lg:grid-cols-[30%_1fr]">
      {/* Large screens: the portrait holds still in its own panel. */}
      <aside className="hidden bg-muted/45 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:items-center lg:justify-center">
        <div className="animate-rise text-center">
          <div className={flip}>
            <Portrait size={200} priority />
          </div>
          <Caption
            className="mt-8 block w-full cursor-pointer label transition-colors hover:text-foreground"
            lines={[
              "Harry, mid-thought",
              "Drawn, not photographed",
              "He is looking at the deploy logs",
            ]}
          />
        </div>
      </aside>

      <main className="flex min-h-dvh flex-col justify-center px-6 py-14 sm:px-12 sm:py-20 lg:px-20 lg:py-12">
        <div
          className="flex animate-rise items-center justify-between gap-6 stagger"
          style={{ ["--i" as string]: 0 }}
        >
          <p className="label">
            {site.role} — {site.location} 🇬🇧
          </p>
          <ThemeToggle size="sm" className="-mr-1.5" />
        </div>

        {/* Below lg the portrait shrinks to sit beside the name. */}
        <div className="mt-6 flex items-center justify-between gap-5 sm:mt-7">
          <h1
            className="animate-veil text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] font-normal tracking-[-0.035em] stagger lg:whitespace-nowrap"
            style={{ ["--i" as string]: 1 }}
          >
            {site.first}{" "}
            <em className="font-normal text-muted-foreground italic">
              {site.last}
            </em>
          </h1>
          <div className={cn(flip, "shrink-0 animate-rise lg:hidden")}>
            <Portrait size={64} className="sm:size-20!" priority />
          </div>
        </div>

        <div
          className="mt-10 animate-rise stagger sm:mt-12"
          style={{ ["--i" as string]: 3 }}
        >
          <p className="text-[1.0625rem]">
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
          <div className="mt-5 max-w-xl space-y-4 text-[1.0625rem] leading-[1.8] text-muted-foreground">
            {site.about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 label transition-colors hover:text-foreground"
          >
            More about me <span aria-hidden>→</span>
          </Link>
        </div>

        <ul
          className="mt-10 flex animate-rise flex-wrap gap-x-7 gap-y-3 stagger"
          style={{ ["--i" as string]: 4 }}
        >
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[0.6875rem] tracking-[0.16em] text-muted-foreground uppercase underline decoration-muted-foreground/40 underline-offset-[6px] transition-colors hover:text-foreground hover:decoration-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="mt-14 animate-rise stagger sm:mt-16"
          style={{ ["--i" as string]: 5 }}
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
      </main>
    </div>
  )
}
