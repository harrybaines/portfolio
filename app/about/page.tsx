import type { Metadata } from "next"
import Link from "next/link"

import { Portrait } from "@/components/portrait"
import { links, profile, site, work } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = { title: "About — Harry Baines" }

const row = "border-b border-border/50 py-3.5"

function Section({
  label,
  className,
  children,
}: {
  label: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section className={cn("mt-16 sm:mt-20", className)}>
      <h2 className="label">{label}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

export default function About() {
  return (
    <div className="font-[family-name:var(--font-newsreader)] lg:grid lg:grid-cols-[30%_1fr]">
      <aside className="hidden bg-muted/45 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:items-center lg:justify-center">
        {/* No entrance animation: the portrait has already appeared on the home page. */}
        <div className="text-center">
          <Portrait size={176} priority />
          <p className="mt-8 label">{site.caption}</p>
        </div>
      </aside>

      <main className="px-6 pt-14 pb-32 sm:px-12 sm:pt-20 sm:pb-40 lg:px-20 lg:pt-24">
        <Link
          href="/"
          className="inline-flex animate-rise items-center gap-2 label transition-colors hover:text-foreground"
        >
          <span aria-hidden>←</span>
          {site.name}
        </Link>

        <div className="mt-8 flex items-center justify-between gap-5 sm:mt-10">
          <h1 className="max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] font-normal tracking-[-0.03em]">
            {profile.lead}
          </h1>
          <Portrait
            size={64}
            className="shrink-0 sm:size-20! lg:hidden"
            priority
          />
        </div>

        <div className="mt-10 max-w-xl animate-rise space-y-5 text-[1.0625rem] leading-[1.6] text-muted-foreground sm:mt-12">
          {profile.intro.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>

        <Section label="Currently">
          <dl className="max-w-xl border-t border-border/50">
            {profile.currently.map(([k, v]) => (
              <div
                key={k}
                className={cn(row, "flex items-baseline justify-between gap-6")}
              >
                <dt className="label">{k}</dt>
                <dd className="text-right text-[0.9375rem]">
                  {k === "Role" ? (
                    <a
                      href={work.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
                    >
                      {v}
                    </a>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section label="Experience">
          <ul className="max-w-2xl border-t border-border/50">
            {profile.experience.map((e) => (
              <li key={e.org + e.when} className={row}>
                <div className="flex items-baseline justify-between gap-6">
                  <p className="text-base">
                    {e.role}
                    <span className="text-muted-foreground">, {e.org}</span>
                  </p>
                  <span className="shrink-0 label">{e.when}</span>
                </div>
                <p className="mt-1 max-w-xl text-[0.875rem] leading-relaxed text-muted-foreground">
                  {e.note}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Education">
          <ul className="max-w-2xl border-t border-border/50">
            {profile.education.map((e) => (
              <li
                key={e.what}
                className={cn(row, "flex items-baseline justify-between gap-6")}
              >
                <p className="text-base">
                  {e.what}
                  <span className="text-muted-foreground">, {e.where}</span>
                </p>
                <span className="shrink-0 label">{e.when}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Outside of work">
          <div className="max-w-xl space-y-5 text-[1.0625rem] leading-[1.6] text-muted-foreground">
            {profile.outside.map((o) => (
              <p key={o.slice(0, 20)}>{o}</p>
            ))}
          </div>
        </Section>

        <Section label="Elsewhere">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  title={l.note}
                  className="font-mono text-[0.6875rem] tracking-[0.16em] text-muted-foreground uppercase underline decoration-muted-foreground/40 underline-offset-[6px] transition-colors hover:text-foreground hover:decoration-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>
    </div>
  )
}
