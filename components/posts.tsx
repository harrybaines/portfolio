import { getBlogPosts } from '@/app/blog/utils'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

// Not in use yet
export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="space-y-1">
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post, index) => (
          <div key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-center justify-between group py-1.5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-md text-text">{post.metadata.title}</span>
                <BsArrowRight className="text-xs text-text-muted group-hover:text-primary transition-colors" />
              </div>
            </Link>
            {index < allBlogs.length - 1 && (
              <div className="h-[1px] text-muted/10 mt-1" />
            )}
          </div>
        ))}
    </div>
  )
}