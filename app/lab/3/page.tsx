import { LabLinks, LabNav, LabPinned, MoreAbout } from "@/components/lab"
import { Portrait } from "@/components/portrait"
import { lab } from "@/lib/lab"
import { site, work } from "@/lib/site"

/** 03 Open column: no grey panel, a bigger portrait and a hairline rule. */
export default function OpenColumn() {
  return (
    <div className="font-[family-name:var(--font-newsreader)] lg:grid lg:grid-cols-[30%_1fr]">
      <aside className="hidden border-r border-border/60 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:items-center lg:justify-center">
        <Portrait size={240} priority />
        <p className="mt-9 label">{site.caption}</p>
        <p className="mt-2.5 font-[family-name:var(--font-newsreader)] text-[0.9375rem] text-muted-foreground italic">
          Building since {site.since}
        </p>
        <p className="absolute top-8 label text-muted-foreground/60">
          Press <kbd className="text-foreground">d</kbd> for the lights
        </p>
      </aside>

      <main className="px-6 pt-10 pb-28 sm:px-12 sm:pt-16 lg:px-24 lg:pt-[max(6rem,calc(36dvh-6rem))]">
        <p className="animate-rise pr-10 label sm:pr-0">
          {site.role} — {site.location} 🇬🇧
        </p>
        <div className="mt-7 flex items-center justify-between gap-5">
          <h1 className="animate-veil text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] font-normal tracking-[-0.035em] lg:whitespace-nowrap">
            {site.first}{" "}
            <em className="text-muted-foreground italic">{site.last}</em>
          </h1>
          <Portrait size={64} className="shrink-0 lg:hidden" priority />
        </div>

        <p className="mt-12 max-w-xl animate-rise text-[1.0625rem] leading-[1.65] text-muted-foreground">
          <span className="text-foreground">
            {work.title} at {work.company}.
          </span>{" "}
          {lab.intro}
        </p>
        <MoreAbout href="/lab/about-b" className="mt-7" />

        <LabLinks className="mt-12 animate-rise" />

        <section className="mt-16 animate-rise">
          <h2 className="label">Pinned</h2>
          <LabPinned className="mt-5" />
        </section>
      </main>

      <LabNav slug="3" />
    </div>
  )
}
