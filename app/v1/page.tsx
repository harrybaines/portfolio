"use client"

import * as React from "react"

import { Caption, useFlash, useSecretWord } from "@/components/easter-eggs"
import { Portrait } from "@/components/portrait"
import { Reveal } from "@/components/reveal"
import { ScrollCue } from "@/components/scroll-cue"
import { VariationNav } from "@/components/variation-nav"
import { links, projects, site, work } from "@/lib/site"

export default function Centre() {
  const [found, reveal] = useFlash(4000)
  useSecretWord("harry", reveal)

  return (
    <div className="font-[family-name:var(--font-v1)]">
      <main className="mx-auto max-w-2xl px-6">
        {/* Hero — one vertical axis, nothing off it. */}
        <section className="relative flex min-h-dvh flex-col items-center justify-center py-32 text-center">
          <div className="animate-rise stagger" style={{ ["--i" as string]: 0 }}>
            <Portrait size={104} priority />
          </div>

          <p
            className="label animate-rise stagger mt-10"
            style={{ ["--i" as string]: 1 }}
          >
            {site.role} — {site.location}
          </p>

          <h1
            className="animate-veil stagger mt-6 text-[clamp(3.25rem,13vw,7.5rem)] leading-[0.9] tracking-[-0.03em]"
            style={{ ["--i" as string]: 2 }}
          >
            {site.first}{" "}
            <span className="italic text-muted-foreground">{site.last}</span>
          </h1>

          <p
            className="animate-rise stagger mt-8 max-w-md font-sans text-[0.95rem] leading-relaxed text-muted-foreground"
            style={{ ["--i" as string]: 4 }}
          >
            {site.intro}
          </p>

          <ul
            className="animate-rise stagger mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
            style={{ ["--i" as string]: 5 }}
          >
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground underline-offset-[6px] transition-colors duration-200 hover:text-foreground hover:underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <p
            className="mt-8 h-4 font-mono text-[0.6875rem] tracking-[0.16em] text-muted-foreground transition-opacity duration-500"
            style={{ opacity: found ? 1 : 0 }}
            aria-hidden={!found}
          >
            yes, that&rsquo;s me
          </p>

          <ScrollCue className="absolute bottom-24 left-1/2 -translate-x-1/2" />
        </section>

        {/* Work */}
        <section className="pb-40">
          <Reveal className="text-center">
            <p className="label">Things I&rsquo;ve made</p>
            <h2 className="mt-5 text-[clamp(2rem,7vw,3.5rem)] leading-[1] tracking-[-0.02em]">
              Digital products, <span className="italic">mostly small</span>
            </h2>
          </Reveal>

          <ul className="mt-16 border-t border-border">
            {projects.map((p, i) => (
              <Reveal
                as="li"
                key={p.name}
                delay={i * 70}
                className="border-b border-border"
              >
                <a
                  href={p.href}
                  className="group flex flex-col gap-2 py-8 text-center"
                >
                  <span className="label">
                    {p.tag} — {p.year}
                  </span>
                  <span className="text-3xl tracking-[-0.02em] transition-opacity duration-200 group-hover:opacity-55">
                    {p.name}
                  </span>
                  <span className="mx-auto max-w-sm font-sans text-sm leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-20 text-center">
            <p className="label">
              Currently{" "}
              <a
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline decoration-foreground/30 underline-offset-[5px] transition-colors hover:decoration-foreground"
              >
                {work.title} at {work.company}
              </a>
            </p>
            <p className="mx-auto mt-6 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
              {site.about}
            </p>
          </Reveal>
        </section>

        <footer className="flex items-center justify-center gap-3 pb-28 text-center">
          <Caption
            className="label cursor-pointer transition-colors hover:text-foreground"
            lines={[
              `© ${site.name}`,
              "Made in the UK",
              "Still tweaking the spacing",
              "Press d",
            ]}
          />
        </footer>
      </main>

      <VariationNav slug="v1" />
    </div>
  )
}
