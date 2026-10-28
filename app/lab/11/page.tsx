import {
  LabLinks,
  LabNav,
  LabPinned,
  LocalTime,
  MoreAbout,
  StatusDot,
  YearProgress,
} from "@/components/lab"
import { Portrait } from "@/components/portrait"
import { lab } from "@/lib/lab"
import { site, work } from "@/lib/site"

import { instrument } from "../fonts"

const tile = "rounded-2xl border border-border/60 p-6 sm:p-8"

/** 11 Bento: everything in hairline tiles, plenty of gap between them. */
export default function Bento() {
  return (
    <main
      className={`${instrument.variable} mx-auto min-h-dvh max-w-6xl px-4 pt-20 pb-28 font-[family-name:var(--font-newsreader)] sm:px-8 lg:pt-24`}
    >
      <div className="grid animate-rise gap-4 md:grid-cols-6 lg:gap-5">
        <section
          className={`${tile} flex flex-col justify-between gap-10 bg-muted/35 md:col-span-4 md:row-span-2`}
        >
          <p className="label">
            {site.role} — {site.location} 🇬🇧
          </p>
          <div>
            <h1 className="font-[family-name:var(--font-lab-instrument)] text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] tracking-[-0.035em]">
              {site.first}
              <br />
              <em className="text-muted-foreground">{site.last}</em>
            </h1>
            <p className="mt-8 max-w-md text-[1.0625rem] leading-[1.6] text-muted-foreground">
              {lab.oneLiner}
            </p>
          </div>
        </section>

        <section
          className={`${tile} flex flex-col items-center justify-center text-center md:col-span-2`}
        >
          <Portrait size={112} priority />
          <p className="mt-5 label">{site.caption}</p>
        </section>

        <section
          className={`${tile} flex flex-col justify-between gap-6 md:col-span-2`}
        >
          <p className="label">Local time</p>
          <p className="font-[family-name:var(--font-lab-instrument)] text-6xl tracking-[-0.03em]">
            <LocalTime />
          </p>
          <p className="label">{lab.city}, UK</p>
        </section>

        <section className={`${tile} md:col-span-3`}>
          <p className="label">Now</p>
          <p className="mt-4 text-[1.0625rem] leading-[1.6] text-muted-foreground">
            <span className="text-foreground">
              {work.title} at {work.company}.
            </span>{" "}
            {lab.intro}
          </p>
          <MoreAbout href="/lab/about-a" className="mt-6" />
        </section>

        <section
          className={`${tile} flex flex-col justify-between gap-8 md:col-span-3`}
        >
          <div>
            <p className="label">Elsewhere</p>
            <LabLinks className="mt-5" />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 label">
            <StatusDot>{lab.status}</StatusDot>
            <YearProgress className="text-muted-foreground/60" />
          </div>
        </section>

        <section className={`${tile} md:col-span-6`}>
          <p className="label">Pinned</p>
          <LabPinned className="mt-5 max-w-none" />
        </section>
      </div>

      <LabNav slug="11" />
    </main>
  )
}
