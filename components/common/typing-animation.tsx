"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

interface TextSegment {
  text: string
  isLink?: boolean
  href?: string
}

interface TypingAnimationProps {
  segments: TextSegment[]
  speed?: number
}

export function TypingAnimation({ segments, speed = 50 }: TypingAnimationProps) {
  const [displayedWords, setDisplayedWords] = useState<TextSegment[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Convert segments into words while preserving links
  const words = segments.flatMap(segment => {
    if (segment.isLink) {
      return [segment]
    }
    return segment.text.split(" ").map(word => ({
      text: word + " ",
      isLink: false
    }))
  })

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedWords(prev => [...prev, words[currentIndex]])
        setCurrentIndex(currentIndex + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, words, speed])

  return (
    <span className="typing leading-9">
      {displayedWords.map((segment, i) =>
        segment.isLink ? (
          <Link
            key={i}
            href={segment.href || '#'}
            className="text-primary hover:text-primary/80 transition-colors"
            target="_blank"
          >
            {segment.text}
          </Link>
        ) : (
          <span key={i}>{segment.text}</span>
        )
      )}
      <span className="inline-block w-[0.5em] h-[1.1em] -mb-[1px] ml-[1px] bg-primary animate-[cursor_0.8s_infinite]" />
    </span>
  )
}