import {
  LabLinks,
  LabNav,
  LabPinned,
  LocalTime,
  MoreAbout,
} from "@/components/lab"
import { Portrait } from "@/components/portrait"
import { lab } from "@/lib/lab"
import { site, work } from "@/lib/site"

import { instrument } from "../fonts"

/** 12 Sentence: the whole intro is one big sentence, portrait set inline. */
export default function Sentence() {
  return (
    <main
      className={`${instrument.variable} min-h-dvh px-6 pt-24 pb-28 font-[family-name:var(--font-newsreader)] sm:px-10 lg:px-20 lg:pt-[20dvh]`}
    >
      <p className="label">
        {site.caption} · {lab.city} · <LocalTime />
      </p>

      <h1 className="mt-8 max-w-6xl animate-veil font-[family-name:var(--font-lab-instrument)] text-[clamp(2.5rem,6.5vw,6.25rem)] leading-[1.02] tracking-[-0.025em]">
        {site.name}
        {/* The portrait sits in the line like a word. */}
        <span className="mx-[0.18em] inline-block translate-y-[0.12em] align-baseline">
          <Portrait size={84} priority className="size-[0.85em]!" />
        </span>
        is a full stack engineer{" "}
        <em className="text-muted-foreground">focused on applied AI</em>,
        currently at{" "}
        <a
          href={work.href}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-foreground/20 decoration-2 underline-offset-[0.12em] transition-colors hover:decoration-foreground"
        >
          {work.company}
        </a>
        .
      </h1>

      <div className="mt-20 grid max-w-6xl animate-rise gap-14 border-t border-border/60 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-20">
        <div>
          <p className="max-w-sm text-[1.0625rem] leading-[1.6] text-muted-foreground">
            6+ years building for the web, mostly in TypeScript and Python.{" "}
            {lab.outside}
          </p>
          <MoreAbout href="/lab/about-c" className="mt-6" />
          <LabLinks className="mt-10" />
        </div>
        <div>
          <p className="label">Pinned</p>
          <LabPinned className="mt-5" />
        </div>
      </div>

      <LabNav slug="12" />
    </main>
  )
}
