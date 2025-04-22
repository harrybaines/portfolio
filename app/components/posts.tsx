import { getBlogPosts } from 'app/blog/utils'
import Link from 'next/link'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
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
            className="flex flex-col space-y-1 mb-4 hover:opacity-100 transition-opacity duration-300"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex space-x-0 justify-between items-end">
              <p className="text-lg tracking-tight border-b border-dashed">
                {post.metadata.title}
              </p>
              <p className="text-neutral-400 text-sm whitespace-nowrap">
                {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
