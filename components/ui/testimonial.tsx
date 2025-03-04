"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface TestimonialProps {
  quote: string
  author: {
    name: string
    role: string
    company: string
    image?: string
  }
  className?: string
}

export function Testimonial({ quote, author, className }: TestimonialProps) {
  const initials = author.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className={cn("flex items-start gap-6 py-8", className)}>
      {/* Author Avatar */}
      <Avatar className="h-16 w-16 flex items-center justify-center overflow-hidden">
        {author.image ? (
          <AvatarImage
            src={author.image}
            alt={author.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <AvatarFallback className="text-base">
            {initials}
          </AvatarFallback>
        )}
      </Avatar>

      {/* Content */}
      <div className="flex-1">
        <h4 className="font-semibold text-base leading-none mt-1.5">
          {author.name} at {author.company}
        </h4>
        <span className="text-muted-foreground leading-relaxed">
          {quote}
        </span>
      </div>
    </div >
  )
}