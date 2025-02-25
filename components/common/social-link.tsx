"use client"

import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface SocialLinkProps {
  href: string
  icon: LucideIcon
  label: string
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="border-border/50 hover:bg-muted/50 transition-colors group"
      asChild
    >
      <Link href={href} target="_blank">
        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        <span className="sr-only">{label}</span>
      </Link>
    </Button>
  )
}