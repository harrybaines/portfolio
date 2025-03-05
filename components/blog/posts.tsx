import { PageHeading } from '@/components/ui/page-heading'
import { formatDate, getBlogPosts } from '@/lib/mdx-utils'
import Link from 'next/link'

export function BlogPosts() {
  const allBlogs = getBlogPosts()
  return (
    <div className="space-y-6">
      <PageHeading label="WRITING" />
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 pb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col justify-between items-center md:flex-row space-x-0 md:space-x-2">
              <div className="flex flex-col space-y-1">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {post.metadata.summary}
                </p>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}