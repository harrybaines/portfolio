import { getBlogPosts } from '@/app/blog/utils'
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

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
              <span className="font-mono text-sm text-sonokai-text">{post.metadata.title}</span>
              <BsArrowUpRight className="text-xs text-sonokai-text-muted group-hover:text-sonokai-green transition-colors" />
            </Link>
            {index < allBlogs.length - 1 && (
              <div className="h-[1px] bg-sonokai-text-muted/10 mt-1" />
            )}
          </div>
        ))}
    </div>
  )
}