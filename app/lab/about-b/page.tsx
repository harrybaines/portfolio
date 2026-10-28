import Link from "next/link"

import { LabLinks, LabNav, LocalTime, StatusDot } from "@/components/lab"
import { Portrait, Snapshot } from "@/components/portrait"
import { lab } from "@/lib/lab"
import { profile, site } from "@/lib/site"

/** About B, Fact sheet: writing on the left, quick facts pinned beside it. */
export default function AboutFactSheet() {
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
        <StatusDot className="label">{lab.status}</StatusDot>
      </aside>

      <main className="px-6 pt-14 pb-32 sm:px-12 sm:pt-20 lg:px-20 lg:pt-24">
        <Link
          href="/lab/4"
          className="label transition-colors hover:text-foreground"
        >
          ← {site.name}
        </Link>
        <h1 className="mt-8 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em]">
          {profile.lead}
        </h1>

        <div className="mt-12 grid gap-14 xl:grid-cols-[minmax(0,1fr)_16rem] xl:gap-16">
          <div>
            <div className="max-w-xl space-y-5 text-[1.0625rem] leading-[1.6] text-muted-foreground">
              {profile.intro.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>

            <section className="mt-12">
              <h2 className="label">Experience</h2>
              <ul className="mt-5 border-t border-border/50">
                {profile.experience.map((e) => (
                  <li
                    key={e.org + e.when}
                    className="border-b border-border/50 py-3.5"
                  >
                    <div className="flex items-baseline justify-between gap-6">
                      <p className="text-base">
                        {e.role}
                        <span className="text-muted-foreground">, {e.org}</span>
                      </p>
                      <span className="shrink-0 label">{e.when}</span>
                    </div>
                    <p className="mt-1 text-[0.875rem] leading-relaxed text-muted-foreground">
                      {e.note}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="label">Outside of work</h2>
              <div className="mt-5 max-w-xl space-y-5 text-[1.0625rem] leading-[1.6] text-muted-foreground">
                {profile.outside.map((o) => (
                  <p key={o.slice(0, 20)}>{o}</p>
                ))}
              </div>
            </section>
          </div>

          {/* The fact sheet stays in view on wide screens. */}
          <div className="xl:sticky xl:top-24 xl:self-start">
            <Snapshot caption="The desk, most days" />
            <dl className="mt-8 border-t border-border/50">
              {[
                ...profile.currently,
                ["Local time", <LocalTime key="t" />],
              ].map(([k, v]) => (
                <div
                  key={String(k)}
                  className="flex items-baseline justify-between gap-4 border-b border-border/50 py-2.5"
                >
                  <dt className="label">{k}</dt>
                  <dd className="text-right text-[0.875rem]">{v}</dd>
                </div>
              ))}
            </dl>
            <h2 className="mt-8 label">Education</h2>
            <ul className="mt-3 space-y-2 text-[0.875rem]">
              {profile.education.map((e) => (
                <li key={e.what}>
                  {e.what}
                  <span className="block label text-muted-foreground/70">
                    {e.where}, {e.when}
                  </span>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 label">Elsewhere</h2>
            <LabLinks className="mt-3 gap-x-5" />
          </div>
        </div>
      </main>

      <LabNav slug="about-b" />
    </div>
  )
}
