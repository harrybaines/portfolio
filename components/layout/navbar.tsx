import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
        <div className="flex h-14 items-center justify-between">
          <nav className="flex items-center gap-8 font-mono">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}