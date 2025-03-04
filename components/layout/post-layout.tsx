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
  image
}: {
  children: React.ReactNode
  date?: string
  readingTime?: string
  title: string
  image?: string
}) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Breadcrumbs title={title} />
        </motion.div>

        {/* Header */}
        <header className="text-center space-y-6 mb-16">
          <motion.h1
            className="text-3xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h1>

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
            prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-xl prose-h3:font-semibold
            prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-7 prose-p:mb-5
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-li:text-muted-foreground prose-li:marker:text-muted-foreground prose-li:leading-7 prose-li:pl-2
            prose-ul:my-5
            prose-blockquote:border-l-primary
            prose-code:text-foreground prose-code:bg-muted prose-code:rounded prose-code:px-1
            prose-pre:bg-black prose-pre:border
            prose-strong:text-muted-foreground
            prose-strong:font-bold
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