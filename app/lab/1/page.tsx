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

/** 01 Quiet: fewer words, more air, and a live clock under the portrait. */
export default function Quiet() {
  return (
    <div className="font-[family-name:var(--font-newsreader)] lg:grid lg:grid-cols-[30%_1fr]">
      <aside className="hidden bg-muted/45 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:items-center lg:justify-center">
        <div className="text-center">
          <Portrait size={176} priority />
          <p className="mt-8 label">{site.caption}</p>
          <p className="mt-2.5 label text-muted-foreground/60">
            {lab.city} · <LocalTime />
          </p>
        </div>
      </aside>

      <main className="px-6 pt-10 pb-28 sm:px-12 sm:pt-16 lg:px-20 lg:pt-[max(6rem,calc(36dvh-6rem))]">
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

        <p className="mt-12 max-w-lg animate-rise text-[1.25rem] leading-[1.5]">
          {lab.oneLiner}
        </p>
        <p className="mt-5 max-w-lg animate-rise text-[1.0625rem] leading-[1.6] text-muted-foreground">
          Currently a {work.title.toLowerCase()} at{" "}
          <a
            href={work.href}
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline decoration-foreground/30 underline-offset-[5px] hover:decoration-foreground"
          >
            {work.company}
          </a>
          . {lab.outside}
        </p>
        <MoreAbout href="/lab/about-a" className="mt-8" />

        <LabLinks className="mt-14 animate-rise" />

        <section className="mt-20 animate-rise">
          <h2 className="label">Pinned</h2>
          <LabPinned limit={3} className="mt-5" />
        </section>
      </main>

      <LabNav slug="1" />
    </div>
  )
}
