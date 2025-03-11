"use client"
import { motion } from "framer-motion"
import { Calendar, Clock, MessageSquare, Tag } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Breadcrumbs } from "./breadcrumbs"

// Used for projects, blog posts and resources
export function PostLayout({
  children,
  date,
  readingTime,
  title,
  image,
  tags
}: {
  children: React.ReactNode
  date?: string
  readingTime?: string
  title: string
  image?: string
  tags?: string[]
}) {
  const pathname = usePathname()

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <Breadcrumbs title={title} />
      </motion.div>

      {/* Hero Banner - Full width with gradient overlay */}
      {image && (
        <motion.div
          className="relative w-full h-[400px] rounded-xl overflow-hidden mb-10 shadow-xl"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />

          {/* Title and metadata overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {title}
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-6 text-white/90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={date} className="font-mono text-sm">{date}</time>
                </div>
              )}

              {readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="font-mono text-sm">{readingTime}</span>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mr-2">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Tags:</span>
          </div>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium font-mono"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      )}

      {/* If no image, show title and metadata here */}
      {!image && (
        <header className="mb-16 space-y-6">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          <motion.div
            className="flex items-center gap-6 text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {date && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={date} className="font-mono text-sm">{date}</time>
              </div>
            )}

            {readingTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="font-mono text-sm">{readingTime}</span>
              </div>
            )}
          </motion.div>
        </header>
      )}

      {/* Article with code-themed styling */}
      <motion.article
        className="prose prose-neutral dark:prose-invert mx-auto
          prose-h2:text-2xl prose-h2:font-semibold prose-h2:tracking-tight
          prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
          prose-h3:text-xl prose-h3:font-semibold
          prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-muted-foreground prose-p:leading-7 prose-p:mb-5
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-li:text-muted-foreground prose-li:marker:text-primary/70 prose-li:leading-7 prose-li:pl-2
          prose-ul:my-5
          prose-blockquote:border-l-primary prose-blockquote:bg-secondary/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-md
          prose-code:text-foreground prose-code:bg-muted prose-code:rounded prose-code:px-1 prose-code:font-mono
          prose-pre:bg-[#1a1b26] prose-pre:border prose-pre:border-border/50 prose-pre:rounded-lg prose-pre:shadow-md
          prose-strong:text-foreground
          prose-strong:font-bold
          w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.article>

      {/* Comments section */}
      <motion.div
        className="mt-16 pt-8 border-t border-border"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold">Comments</h3>
        </div>

        <div className="bg-card/5 backdrop-blur-sm border border-border rounded-lg p-6">
          {/* You can integrate any comment system here like Giscus, Utterances, or Disqus */}
          <p className="text-muted-foreground text-center py-8">
            Comments are coming soon! In the meantime, feel free to reach out via email or social media.
          </p>
        </div>
      </motion.div>
    </div>
  )
}