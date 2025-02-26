import Link from "next/link"

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm font-medium hover:text-primary transition-colors"
          >
            harry.dev
          </Link>
          <nav className="flex items-center gap-8">
            <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}