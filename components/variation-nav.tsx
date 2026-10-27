"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import * as React from "react"

import { getVariation, nextSlug, prevSlug, variations } from "@/lib/variations"
import { cn } from "@/lib/utils"

const item =
  "font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-200 hover:text-foreground"

/**
 * The one piece of chrome shared by every variation: where you are,
 * how to get to the next one, and the light switch.
 */
export function VariationNav({
  slug,
  showTheme = true,
}: {
  slug: string
  /** Off for variations that place their own theme icon somewhere. */
  showTheme?: boolean
}) {
  const current = getVariation(slug)
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <>
      {current.shelved ? (
        <p className="fixed top-4 right-5 z-50 rounded-full border border-border bg-background/85 px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.16em] text-muted-foreground uppercase backdrop-blur sm:top-6 sm:right-8">
          Not considered for now
        </p>
      ) : null}
      <nav
        aria-label="Variations"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-6"
      >
        {/* Keeps the controls legible over whatever is scrolling underneath. */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background via-background/85 to-transparent"
        />

        <div className="pointer-events-auto flex items-center gap-4 sm:gap-6">
          <Link href="/" className={item}>
            ← Index
          </Link>
          <span className="hidden font-mono text-[0.6875rem] tracking-[0.16em] text-muted-foreground/60 sm:inline">
            {current.n} / {String(variations.length).padStart(2, "0")}
          </span>
        </div>

        <div className="pointer-events-auto flex items-center gap-4 sm:gap-6">
          {showTheme ? (
            <button
              type="button"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className={cn(item, "cursor-pointer")}
              aria-label="Toggle dark mode"
            >
              {/* CSS decides the label, so it is correct before hydration too. */}
              <span className="dark:hidden">Dark</span>
              <span className="hidden dark:inline">Light</span>
            </button>
          ) : null}
          <Link
            href={`/${prevSlug(slug)}`}
            className={cn(item, "hidden sm:inline")}
          >
            Prev
          </Link>
          <Link
            href={`/${nextSlug(slug)}`}
            className="group pointer-events-auto inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-[0.6875rem] tracking-[0.16em] uppercase transition-colors duration-200 hover:bg-foreground hover:text-background"
          >
            Next
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </nav>
    </>
  )
}
