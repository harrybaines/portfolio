import {
  LabLinks,
  LabNav,
  LabPinned,
  MoreAbout,
  YearProgress,
} from "@/components/lab"
import { Portrait } from "@/components/portrait"
import { lab } from "@/lib/lab"
import { site } from "@/lib/site"

/** 04 Anchored: the name sits low, like a title card; projects beside it. */
export default function Anchored() {
  return (
    <div className="font-[family-name:var(--font-newsreader)] lg:grid lg:grid-cols-[26%_1fr]">
      <aside className="hidden bg-muted/45 px-10 py-14 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-between">
        <div>
          <Portrait size={128} priority />
          <p className="mt-7 label">{site.caption}</p>
          <p className="mt-2.5 label text-muted-foreground/60">
            {lab.city}, UK
          </p>
        </div>
        <YearProgress className="label text-muted-foreground/60" />
      </aside>

      <main className="flex min-h-dvh flex-col px-6 pt-10 pb-28 sm:px-12 sm:pt-16 lg:justify-end lg:px-20 lg:pb-24">
        <p className="animate-rise pr-10 label sm:pr-0">
          {site.role} — {site.location} 🇬🇧
        </p>
        <div className="mt-7 flex items-center justify-between gap-5">
          <h1 className="animate-veil text-[clamp(3rem,10vw,7.5rem)] leading-[0.9] font-normal tracking-[-0.045em] lg:whitespace-nowrap">
            {site.first}{" "}
            <em className="text-muted-foreground italic">{site.last}</em>
          </h1>
          <Portrait size={64} className="shrink-0 lg:hidden" priority />
        </div>

        <div className="mt-14 grid animate-rise gap-14 border-t border-border/50 pt-10 xl:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] xl:gap-16">
          <div>
            <p className="text-[1.0625rem] leading-[1.6] text-muted-foreground">
              {lab.oneLiner} {lab.outside}
            </p>
            <MoreAbout href="/lab/about-b" className="mt-6" />
            <LabLinks className="mt-8" />
          </div>
          <div>
            <h2 className="label">Pinned</h2>
            <LabPinned limit={4} className="mt-4" />
          </div>
        </div>
      </main>

      <LabNav slug="4" />
    </div>
  )
}
