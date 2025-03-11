"use client"

import { ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  // Adjust this offset value to account for fixed elements like the navbar
  const SCROLL_OFFSET = 120 // Increased for better positioning

  // Extract headings from content
  useEffect(() => {
    const extractHeadings = () => {
      // Regular expression to match markdown headings (## Heading)
      const headingRegex = /^(#{2,4})\s+(.+)$/gm
      const matches = [...content.matchAll(headingRegex)]

      const extractedHeadings = matches.map((match) => {
        const level = match[1].length
        const text = match[2].trim()
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')

        return { id, text, level }
      })

      setHeadings(extractedHeadings)
    }

    extractHeadings()
  }, [content])

  // Track active heading on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (headings.length === 0) return

      // Find all heading elements in the document
      const headingElements = headings.map(heading =>
        document.getElementById(heading.id)
      ).filter(Boolean) as HTMLElement[]

      // Find the heading that's currently at the top of the viewport
      const scrollPosition = window.scrollY + SCROLL_OFFSET // Using the adjusted offset

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const currentHeading = headingElements[i]
        if (currentHeading && currentHeading.offsetTop <= scrollPosition) {
          setActiveId(currentHeading.id)
          break
        }
      }

      // If we're at the top of the page, set the first heading as active
      if (scrollPosition < SCROLL_OFFSET && headingElements.length > 0) {
        setActiveId(headingElements[0].id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings])

  // Scroll to heading when clicked
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Calculate the exact position accounting for the offset
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - SCROLL_OFFSET

      // Smooth scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      setActiveId(id)
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
      <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-4 flex items-center">
        <span className="mr-2 inline-block w-1 h-4 bg-blue-500 rounded-full"></span>
        Table of Contents
      </h3>

      <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={`
              w-full text-left flex items-center py-1.5 text-sm transition-colors duration-200
              ${heading.level === 2 ? 'font-medium' : 'pl-4 text-xs'}
              ${activeId === heading.id
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'}
            `}
          >
            <ChevronRight className={`w-3 h-3 mr-1.5 transition-transform ${activeId === heading.id ? 'text-blue-500' : 'text-gray-400'}`} />
            <span className="truncate">{heading.text}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}