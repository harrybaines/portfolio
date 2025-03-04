"use client"

import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface SocialLinkProps {
  href: string
  icon: LucideIcon
  label: string
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  )
}