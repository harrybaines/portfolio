"use client"

import { timeline } from "@/data/experience"
import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import Image from "next/image"

interface ExperienceListProps {
  /**
   * Optional filter to show only specific types of timeline items
   */
  filter?: "work" | "education"
  /**
   * Optional className for styling
   */
  className?: string
}

/**
 * ExperienceList component
 * Displays a list of work experiences from the timeline data
 */
export function ExperienceList({ filter = "work", className = "" }: ExperienceListProps) {
  // Filter timeline items based on the type
  const items = timeline.filter(item => item.type === filter)

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((job, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-6 p-6 rounded-lg border border-border"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + (i * 0.1), duration: 0.4 }}
        >
          {/* Logo with background container */}
          <div className="w-12 h-12 rounded-md bg-gray-200 dark:bg-gray-200 flex items-center justify-center flex-shrink-0">
            {job.logo ? (
              <Image
                src={job.logo}
                alt={`${job.company} logo`}
                width={32}
                height={32}
                className="rounded-sm"
              />
            ) : (
              <Briefcase className="w-6 h-6 text-muted-foreground" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-base font-mono font-medium">
                {job.role} @ {job.company}
              </h3>
              <span className="text-xs text-muted-foreground font-mono px-2 py-1 bg-primary/5 rounded-sm inline-block w-fit">
                {job.period}
              </span>
            </div>
            <p className="text-muted-foreground text-base">
              {job.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}