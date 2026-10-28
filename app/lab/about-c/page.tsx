import Link from "next/link"

import { LabLinks, LabNav } from "@/components/lab"
import { Portrait, Snapshot } from "@/components/portrait"
import { lab } from "@/lib/lab"
import { profile, site, work } from "@/lib/site"

const inline =
  "text-foreground underline decoration-foreground/30 underline-offset-[5px] transition-colors hover:decoration-foreground"

/** About C, Long form: prose first, a photo mid-way, details as footnotes. */
export default function AboutLongForm() {
  return (
    <div className="font-[family-name:var(--font-newsreader)] lg:grid lg:grid-cols-[30%_1fr]">
      <aside className="hidden bg-muted/45 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:items-center lg:justify-center">
        <div className="text-center">
          <Portrait size={176} priority />
          <p className="mt-8 label">{site.caption}</p>
          <p className="mt-2 text-[0.9375rem] text-muted-foreground italic">
            usually somewhere near {lab.city}
          </p>
        </div>
      </aside>

      <main className="px-6 pt-14 pb-32 sm:px-12 sm:pt-20 lg:px-20 lg:pt-24">
        <article className="max-w-xl">
          <Link
            href="/lab/5"
            className="label transition-colors hover:text-foreground"
          >
            ← {site.name}
          </Link>
          <h1 className="mt-8 text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.03em]">
            {profile.lead}
          </h1>

          <div className="mt-10 space-y-5 text-[1.125rem] leading-[1.7] text-muted-foreground">
            <p>{profile.intro[0]}</p>
            <p>
              Right now I&apos;m a {work.title.toLowerCase()} at{" "}
              <a
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className={inline}
              >
                {work.company}
              </a>
              <sup className="ml-0.5 label">1</sup>, where I build and maintain
              the LLM integrations behind Athena and built Clara, an AI
              analytics assistant, end to end.
            </p>
            <p>
              Before that I spent seven years, on and off, building archtms
              <sup className="ml-0.5 label">2</sup> for Cassidy and Ashton
              Architects: first part time during university, then full time. In
              between I was a software engineer and data scientist at Yordas
              Digital<sup className="ml-0.5 label">3</sup>.
            </p>
          </div>

          <Snapshot
            className="my-12 max-w-sm"
            caption="Most days, this is the view"
          />

          <div className="space-y-5 text-[1.125rem] leading-[1.7] text-muted-foreground">
            {profile.outside.map((o) => (
              <p key={o.slice(0, 20)}>{o}</p>
            ))}
          </div>

          <LabLinks className="mt-12" />

          {/* Footnotes carry the dates and details the prose leaves out. */}
          <ol className="mt-16 space-y-3 border-t border-border/50 pt-6 text-[0.875rem] leading-relaxed text-muted-foreground">
            {[
              profile.experience[0],
              profile.experience[1],
              profile.experience[2],
            ].map((e, i) => (
              <li key={e.org + e.when} className="flex gap-3">
                <span className="label">{i + 1}</span>
                <span>
                  <span className="text-foreground">{e.role}</span>, {e.org},{" "}
                  {e.when}.
                </span>
              </li>
            ))}
            <li className="flex gap-3">
              <span className="label">·</span>
              <span>
                {profile.education
                  .map((e) => `${e.what}, ${e.where}, ${e.when}`)
                  .join(". ")}
                .
              </span>
            </li>
          </ol>
        </article>
      </main>

      <LabNav slug="about-c" />
    </div>
  )
}
