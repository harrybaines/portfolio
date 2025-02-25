"use client"

import { PageHeading } from "@/components/ui/page-heading"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface Post {
  slug: string
  metadata: {
    title: string
    publishedAt: string
  }
}

export function PostsWrapper({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-6">
      <PageHeading label="WRITING" />

      <div className="space-y-2">
        {posts.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-center justify-between py-3 hover:bg-muted/50 px-4 -mx-4 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-sm text-muted-foreground">
                  {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric'
                  })}
                </span>
                <span className="font-mono text-sm group-hover:text-primary transition-colors">
                  {post.metadata.title}
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}