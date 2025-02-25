"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Breadcrumbs({ title }: { title: string }) {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  const section = segments[0] // 'blog' or 'work'

  const breadcrumbTitle = {
    blog: 'Blog',
    work: 'Work'
  }[section] || section

  return (
    <nav className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-16">
      <Link href="/" className="hover:text-foreground transition-colors">
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link
        href={`/${section}`}
        className="hover:text-foreground transition-colors"
      >
        {breadcrumbTitle}
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground">{title}</span>
    </nav>
  )
}