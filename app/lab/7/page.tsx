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

/** 07 Masthead: a full-width name like a newspaper title, columns below. */
export default function Masthead() {
  return (
    <div
      className={`${instrument.variable} min-h-dvh px-6 pt-16 pb-28 font-[family-name:var(--font-newsreader)] sm:px-10 lg:px-16 lg:pt-20`}
    >
      {/* The dateline: small grey mono, ruled above and below. */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-y border-border/60 py-3 label">
        <span>{site.role}</span>
        <span>Est. {site.since}</span>
        <span>
          {lab.city}, UK · <LocalTime />
        </span>
      </div>

      <h1 className="mt-8 animate-veil font-[family-name:var(--font-lab-instrument)] text-[clamp(4rem,21.5vw,22rem)] leading-[0.82] tracking-[-0.04em] whitespace-nowrap">
        {site.first} <em className="text-muted-foreground">{site.last}</em>
      </h1>

      <div className="mt-14 grid animate-rise gap-12 border-t border-border/60 pt-10 md:grid-cols-[12rem_minmax(0,1fr)] lg:grid-cols-[14rem_minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-14">
        <div>
          <Portrait size={128} priority />
          <p className="mt-5 label">{site.caption}</p>
        </div>

        <div>
          <p className="label">About</p>
          <p className="mt-4 text-[1.0625rem] leading-[1.6] text-muted-foreground">
            <span className="text-foreground">
              {work.title} at {work.company}.
            </span>{" "}
            {lab.intro}
          </p>
          <MoreAbout href="/lab/about-b" className="mt-6" />
          <LabLinks className="mt-8 gap-x-5" />
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <p className="label">Pinned</p>
          <LabPinned className="mt-4" />
        </div>
      </div>

      <LabNav slug="7" />
    </div>
  )
}
