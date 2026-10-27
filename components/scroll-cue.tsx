"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Sits at the bottom of a hero to say there's more below. Clicking it scrolls
 * on; it fades out as soon as the visitor starts scrolling themselves.
 */
export function ScrollCue({
  label = "More below",
  className,
}: {
  label?: string
  className?: string
}) {
  const [past, setPast] = React.useState(false)

  React.useEffect(() => {
    function onScroll() {
      setPast(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      tabIndex={past ? -1 : 0}
      onClick={() =>
        window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" })
      }
      className={cn(
        "group inline-flex items-center gap-2.5 transition-opacity duration-500",
        past ? "pointer-events-none opacity-0" : "opacity-100",
        className
      )}
    >
      <span className="label transition-colors group-hover:text-foreground">
        {label}
      </span>
      <svg
        viewBox="0 0 16 16"
        aria-hidden
        className="animate-nudge size-3.5 text-muted-foreground transition-colors group-hover:text-foreground"
      >
        <path
          d="M8 2v11M3.5 8.5 8 13l4.5-4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
