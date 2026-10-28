import Link from "next/link"

import { LabLinks, LabNav, LocalTime } from "@/components/lab"
import { Portrait, Snapshot } from "@/components/portrait"
import { lab } from "@/lib/lab"
import { profile, site } from "@/lib/site"

/** About A, Timeline: experience on a vertical line, a photo inline. */
export default function AboutTimeline() {
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

      <main className="px-6 pt-14 pb-32 sm:px-12 sm:pt-20 lg:px-20 lg:pt-24">
        <Link
          href="/lab/1"
          className="label transition-colors hover:text-foreground"
        >
          ← {site.name}
        </Link>
        <h1 className="mt-8 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em]">
          {profile.lead}
        </h1>
        <div className="mt-10 max-w-xl space-y-5 text-[1.0625rem] leading-[1.6] text-muted-foreground">
          <p>{profile.intro[0]}</p>
        </div>

        <Snapshot
          className="mt-12 max-w-sm"
          caption="Where most of it gets built"
        />

        <section className="mt-14">
          <h2 className="label">Timeline</h2>
          <ol className="relative mt-6 max-w-2xl border-l border-border/60 pl-8">
            {profile.experience.map((e) => (
              <li key={e.org + e.when} className="relative pb-9 last:pb-0">
                <span className="absolute top-2 -left-[2.3rem] size-2.5 rounded-full border border-border bg-background" />
                <p className="label">{e.when}</p>
                <p className="mt-2 text-base">
                  {e.role}
                  <span className="text-muted-foreground">, {e.org}</span>
                </p>
                <p className="mt-1.5 max-w-xl text-[0.875rem] leading-relaxed text-muted-foreground">
                  {e.note}
                </p>
              </li>
            ))}
            {profile.education.map((e) => (
              <li key={e.what} className="relative pb-6 last:pb-0">
                <span className="absolute top-2 -left-[2.3rem] size-2.5 rounded-full bg-border" />
                <p className="label">{e.when}</p>
                <p className="mt-2 text-base">
                  {e.what}
                  <span className="text-muted-foreground">, {e.where}</span>
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="label">Outside of work</h2>
          <div className="mt-5 max-w-xl space-y-5 text-[1.0625rem] leading-[1.6] text-muted-foreground">
            {profile.outside.map((o) => (
              <p key={o.slice(0, 20)}>{o}</p>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="label">Elsewhere</h2>
          <LabLinks className="mt-5" />
        </section>
      </main>

      <LabNav slug="about-a" />
    </div>
  )
}
