"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

/**
 * The light switch, as an icon. Which glyph shows is decided in CSS so it's
 * correct before hydration. Each variation places this somewhere different.
 */
export function ThemeToggle({
  className,
  size = "md",
}: {
  className?: string
  size?: "sm" | "md"
}) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "inline-grid shrink-0 place-items-center text-muted-foreground transition-colors duration-200 hover:text-foreground",
        size === "sm" ? "size-7" : "size-9",
        className
      )}
    >
      <Moon
        className={cn("dark:hidden", size === "sm" ? "size-3.5" : "size-4")}
        strokeWidth={1.5}
      />
      <Sun
        className={cn(
          "hidden dark:block",
          size === "sm" ? "size-3.5" : "size-4"
        )}
        strokeWidth={1.5}
      />
    </button>
  )
}
