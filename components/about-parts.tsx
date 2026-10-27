import Link from "next/link"

import { aboutPage, work } from "@/lib/site"
import { cn } from "@/lib/utils"

/** The body copy, shared by every about page. Framing is each page's own job. */
export function AboutText({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      {aboutPage.paragraphs.map((p) => (
        <p key={p.slice(0, 24)}>{p}</p>
      ))}
    </div>
  )
}

/** The short facts table. */
export function Currently({ className }: { className?: string }) {
  return (
    <dl className={cn("border-t border-border", className)}>
      {aboutPage.currently.map(([k, v]) => (
        <div
          key={k}
          className="flex items-baseline justify-between gap-6 border-b border-border py-3"
        >
          <dt className="label">{k}</dt>
          <dd className="label text-foreground">
            {k === "Building" ? (
              <a
                href="https://archtms.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {v}
              </a>
            ) : k === "Role" ? (
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
  )
}

/** Back to the variation this about page belongs to. */
export function BackLink({
  slug,
  className,
  label = "Back",
}: {
  slug: string
  className?: string
  label?: string
}) {
  return (
    <Link
      href={`/${slug}`}
      className={cn(
        "label inline-flex items-center gap-2 transition-colors hover:text-foreground",
        className
      )}
    >
      <span aria-hidden>←</span>
      {label}
    </Link>
  )
}
