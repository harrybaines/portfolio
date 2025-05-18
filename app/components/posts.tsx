import { formatDateFriendly, getBlogPosts } from 'app/blog/utils'
import Link from 'next/link'

export function Posts() {
  let posts = getBlogPosts()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts
        .sort((a, b) => {
          if (
            new globalThis.Date(a.metadata.publishedAt) > new globalThis.Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <div className="flex flex-col space-y-2">
              <div className="text-sm text-neutral-500 font-mono">
                {formatDateFriendly(post.metadata.publishedAt)}
              </div>
              <h3 className="text-lg font-medium text-neutral-800 group-hover:text-blue-600 transition-colors">
                {post.metadata.title}
              </h3>
              <p className="text-neutral-500 text-base">
                {post.metadata.description}
              </p>
              {post.metadata.tags && post.metadata.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.metadata.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs text-neutral-600 font-semibold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
    </div>
  )
}
