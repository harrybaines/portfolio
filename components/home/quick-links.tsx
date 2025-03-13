"use client"

import { PageHeading } from "@/components/ui/page-heading"
import { motion } from "framer-motion"
import { Code2, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface QuickLink {
  title: string
  description: string
  url: string
  icon: React.ReactNode
}

// This type mirrors the blog post structure from the server component
interface BlogPostProps {
  slug: string
  metadata: {
    title: string
    publishedAt: string
    summary: string
  }
}

// Client component that receives blog posts as props
export function QuickLinks({ blogPosts }: { blogPosts: BlogPostProps[] }) {
  const links: QuickLink[] = [
    {
      title: "Dotfiles",
      description: "My personal configuration files",
      url: "https://github.com/harrybaines/dotfiles",
      icon: <Github className="h-5 w-5 text-primary" />,
    },
    {
      title: "brewkit",
      description: "Open source boilerplate for full stack apps",
      url: "https://github.com/harrybaines/brewkit",
      icon: <Code2 className="h-5 w-5 text-primary" />,
    }
  ]

  return (
    <div className="container mx-auto px-4 relative z-10 mt-0">
      {/* Background elements similar to hero */}
      <div className="absolute -top-40 left-20 w-72 h-72 bg-primary/3 rounded-full blur-3xl z-0" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/3 rounded-full blur-3xl z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-6 relative z-10">
        {/* Left column - Quick Links */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-3 relative z-10"
          >
            <PageHeading label="QUICK LINKS" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            {links.map((link, index) => (
              <Link
                href={link.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border border-primary/5 bg-background/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-3 flex items-center gap-3 relative z-10">
                  <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md">
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center gap-1.5">
                      {link.title}
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Right column - Blog Posts */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-3 relative z-10"
          >
            <PageHeading label="WRITING" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-3"
          >
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block relative overflow-hidden rounded-xl border border-primary/5 bg-background/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 p-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-medium flex items-center gap-1.5">
                      {post.metadata.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {post.metadata.summary}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}