"use client"

import { useEffect, useState } from "react"

export function BackgroundPattern() {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Square grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-16">
          {Array.from({ length: 16 * 12 }).map((_, i) => (
            <div key={i} className="relative">
              <div className="absolute inset-1 border border-foreground/20 rounded-sm"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-accent/3 rounded-full blur-3xl" />

      {/* Additional decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/5 rounded-full opacity-20" />
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border border-accent/5 rounded-full opacity-10" />
    </div>
  )
}