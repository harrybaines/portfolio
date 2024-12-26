import { formatDate, getBlogPosts } from '@/app/blog/utils'
import Link from 'next/link'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="divide-y divide-[#3c3836]">
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 py-3 first:pt-0 last:pb-0 group"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-[#928374] w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-[#ebdbb2] group-hover:text-[#b8bb26] transition-colors tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}