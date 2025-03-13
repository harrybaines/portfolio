"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface FeaturedImageProps {
  /**
   * The source path for the image
   */
  src: string
  /**
   * Alt text for the image
   */
  alt: string
  /**
   * Optional caption text to display below the image
   */
  caption?: string
  /**
   * Optional className for additional styling
   */
  className?: string
}

/**
 * FeaturedImage component
 * Displays a large image with an optional caption in a minimal aesthetic
 */
export function FeaturedImage({ src, alt, caption, className = "" }: FeaturedImageProps) {
  return (
    <motion.div
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overflow-hidden rounded-lg border border-border">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
      </div>

      {caption && (
        <div className="mt-3 text-center">
          <p className="text-sm text-muted-foreground font-mono">{caption}</p>
        </div>
      )}
    </motion.div>
  )
}