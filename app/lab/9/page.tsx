import {
  LabLinks,
  LabNav,
  LabPinned,
  LocalTime,
  MoreAbout,
  StatusDot,
} from "@/components/lab"
import { Portrait } from "@/components/portrait"
import { lab } from "@/lib/lab"
import { site, work } from "@/lib/site"

import { instrument } from "../fonts"

/** 09 Banner: the grey panel turns sideways into a band across the top. */
export default function Banner() {
  return (
    <div
      className={`${instrument.variable} min-h-dvh font-[family-name:var(--font-newsreader)]`}
    >
      <header className="bg-muted/45 px-6 pt-20 pb-12 sm:px-10 lg:px-16 lg:pt-28 lg:pb-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-10">
          <Portrait size={136} priority className="shrink-0 animate-rise" />
          <div>
            <p className="label">
              {site.role} — {site.location} 🇬🇧
            </p>
            <h1 className="mt-4 animate-veil font-[family-name:var(--font-lab-instrument)] text-[clamp(3.5rem,10vw,9rem)] leading-[0.85] tracking-[-0.035em]">
              {site.first}{" "}
              <em className="text-muted-foreground">{site.last}</em>
            </h1>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 label">
          <span>{site.caption}</span>
          <span>
            {lab.city} · <LocalTime />
          </span>
          <StatusDot>{lab.status}</StatusDot>
        </div>
      </header>

      <main className="grid gap-14 px-6 pt-14 pb-28 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-20 lg:px-16 lg:pt-20">
        <div className="animate-rise">
          <p className="label">About</p>
          <p className="mt-5 max-w-md text-[1.0625rem] leading-[1.6] text-muted-foreground">
            <span className="text-foreground">
              {work.title} at {work.company}.
            </span>{" "}
            {lab.intro}
          </p>
          <MoreAbout href="/lab/about-a" className="mt-6" />
          <LabLinks className="mt-10" />
        </div>
        <div className="animate-rise">
          <p className="label">Pinned</p>
          <LabPinned className="mt-5" />
        </div>
      </main>

      <LabNav slug="9" />
    </div>
  )
}
