"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  // const { setTheme, theme } = useTheme()

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-5xl mx-auto container">
        <div className="flex h-14 items-center justify-between">
          {/* Site Title */}
          <Link
            href="/"
            className="font-mono text-sm font-medium hover:text-primary transition-colors"
          >
            harry.dev
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-sm" asChild>
              <Link href="mailto:harryb0905@googlemail.com">Get in touch</Link>
            </Button>

            {/* Theme toggle */}
            {/* <Button
              variant="outline"
              size="icon"
              className="border-border/50 hover:bg-muted/50 transition-colors group"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <SunIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  )
}