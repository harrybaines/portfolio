"use client"

import { timeline } from "@/data/experience"
import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import Image from "next/image"

interface EducationListProps {
  /**
   * Optional className for styling
   */
  className?: string
}

/**
 * EducationList component
 * Displays a list of education items from the timeline data
 */
export function EducationList({ className = "" }: EducationListProps) {
  // Filter timeline items to only show education
  const educationItems = timeline.filter(item => item.type === "education")

  return (
    <div className={`space-y-4 ${className}`}>
      {educationItems.map((edu, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-6 p-6 rounded-lg border border-border"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + (i * 0.1), duration: 0.4 }}
        >
          {/* Logo with background container */}
          <div className="w-12 h-12 rounded-md bg-gray-200 dark:bg-gray-200 flex items-center justify-center flex-shrink-0">
            {edu.logo ? (
              <Image
                src={edu.logo}
                alt={`${edu.company} logo`}
                width={32}
                height={32}
                className="rounded-sm"
              />
            ) : (
              <GraduationCap className="w-6 h-6 text-muted-foreground" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="mb-2">
              <h3 className="text-base font-mono font-medium">
                {edu.role} @ {edu.company}
              </h3>
            </div>
            <p className="text-muted-foreground text-base">
              {edu.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}