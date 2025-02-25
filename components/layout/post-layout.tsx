"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Breadcrumbs } from "./breadcrumbs"

// Used for projects, blog posts and resources
export function PostLayout({
  children,
  date,
  readingTime,
  title,
  description,
  image
}: {
  children: React.ReactNode
  date?: string
  readingTime?: string
  title: string
  description?: string
  image?: string
}) {
  return (
    <div>
      <div className="mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Breadcrumbs title={title} />
        </motion.div>

        {/* Header */}
        <header className="text-center space-y-8 mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}

          <motion.div
            className="flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {date && <time dateTime={date}>{date}</time>}
            {date && readingTime && <span>•</span>}
            {readingTime && <span>{readingTime}</span>}
          </motion.div>
        </header>
      </div>

      {/* Hero Image - Full width */}
      {image && (
        <motion.div
          className="-mx-6 relative aspect-[2/1] mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      )}

      <div className="max-w-3xl mx-auto">
        {/* Article */}
        <motion.article
          className="prose prose-neutral dark:prose-invert mx-auto
            prose-h2:text-2xl prose-h2:font-semibold prose-h2:tracking-tight
            prose-h3:text-xl prose-h3:font-semibold
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-li:text-muted-foreground prose-li:marker:text-muted-foreground
            prose-blockquote:border-l-primary
            prose-code:text-foreground prose-code:bg-muted prose-code:rounded prose-code:px-1
            prose-pre:bg-black prose-pre:border
            max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {children}
        </motion.article>
      </div>
    </div>
  )
}