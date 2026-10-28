"use client"

import Link from "next/link"
import * as React from "react"

import { labAbouts, labHomes } from "@/lib/lab"
import { links, projects } from "@/lib/site"
import { cn } from "@/lib/utils"

/** Current time in the UK, ticking. Blank until mounted so SSR can't drift. */
export function LocalTime({ className }: { className?: string }) {
  const [now, setNow] = React.useState<string | null>(null)
  React.useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/London",
    })
    const tick = () => setNow(fmt.format(new Date()))
    tick()
    const id = window.setInterval(tick, 15_000)
    return () => window.clearInterval(id)
  }, [])
  return (
    <time className={cn("tabular-nums", className)} suppressHydrationWarning>
      {now ?? "--:--"}
    </time>
  )
}

/** A small pulsing green dot with a label. */
export function StatusDot({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/70 motion-reduce:hidden" />
        <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
      </span>
      {children}
    </span>
  )
}

const linkClass =
  "font-mono text-[0.6875rem] tracking-[0.16em] text-muted-foreground uppercase underline decoration-muted-foreground/40 underline-offset-[6px] transition-colors hover:text-foreground hover:decoration-foreground"

/** GitHub, LinkedIn, Instagram, X. */
export function LabLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-x-7 gap-y-3", className)}>
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

/** The Pinned list, optionally cut short. */
export function LabPinned({
  limit,
  numbered,
  className,
}: {
  limit?: number
  numbered?: boolean
  className?: string
}) {
  const items = limit ? projects.slice(0, limit) : projects
  return (
    <ul className={cn("max-w-2xl border-t border-border/50", className)}>
      {items.map((p, i) => {
        const inner = (
          <>
            {numbered ? (
              <span className="w-6 shrink-0 label">
                {String(i + 1).padStart(2, "0")}
              </span>
            ) : null}
            <span className="transition-colors group-hover:text-muted-foreground">
              {p.name}
            </span>
            <span className="flex-1 text-muted-foreground">{p.blurb}</span>
            {p.year ? <span className="shrink-0 label">{p.year}</span> : null}
          </>
        )
        const row =
          "flex items-baseline gap-4 border-b border-border/50 py-2.5 text-[0.9375rem]"
        return (
          <li key={p.name}>
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className={cn(row, "group")}
              >
                {inner}
              </a>
            ) : (
              <div className={row}>{inner}</div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

/** "More about me →", pointed at a lab about page. */
export function MoreAbout({
  href,
  className,
}: {
  href: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 label transition-colors hover:text-foreground",
        className
      )}
    >
      More about me <span aria-hidden>→</span>
    </Link>
  )
}

/** Floating pill to step through the lab. Bottom right, out of the way. */
export function LabNav({ slug }: { slug: string }) {
  const all = [...labHomes, ...labAbouts]
  const i = all.findIndex((p) => p.slug === slug)
  const page = all[i]
  const prev = all[(i - 1 + all.length) % all.length]
  const next = all[(i + 1) % all.length]
  const item = "transition-colors hover:text-foreground text-muted-foreground"
  return (
    <nav
      aria-label="Design lab"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-4 rounded-full border border-border/60 bg-background/85 px-4 py-2 font-mono text-[0.625rem] tracking-[0.16em] uppercase backdrop-blur sm:right-6 sm:bottom-6"
    >
      <Link href="/lab" className={item}>
        Lab
      </Link>
      <span className="text-foreground">
        {page.n} {page.title}
      </span>
      <Link href={`/lab/${prev.slug}`} className={item} aria-label="Previous">
        ←
      </Link>
      <Link href={`/lab/${next.slug}`} className={item} aria-label="Next">
        →
      </Link>
    </nav>
  )
}

/** "2026 is 82% done". Read on the client only, so it's always today's. */
export function YearProgress({ className }: { className?: string }) {
  const text = React.useSyncExternalStore(noop, yearProgressText, () => null)
  return <span className={className}>{text ?? "\u00a0"}</span>
}

function noop() {
  return () => {}
}

function yearProgressText() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 1).getTime()
  const end = new Date(now.getFullYear() + 1, 0, 1).getTime()
  const pct = Math.floor(((now.getTime() - start) / (end - start)) * 100)
  return `${now.getFullYear()} is ${pct}% done`
}
