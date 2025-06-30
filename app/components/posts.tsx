import { formatDateFriendly, getBlogPosts } from 'app/blog/utils'
import Link from 'next/link'

export function Posts() {
  let posts = getBlogPosts()

  return (
    <div className="space-y-3">
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
            className="group block p-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <span className="text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors font-mono text-lg">
                    {post.metadata.title}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500 font-mono">
                    {formatDateFriendly(post.metadata.publishedAt)}
                  </span>
                </div>
                <p className="text-md text-neutral-600 dark:text-neutral-400 leading-relaxed mb-2">
                  {post.metadata.description}
                </p>
                {post.metadata.tags && post.metadata.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.metadata.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-sm text-neutral-500 dark:text-neutral-500 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
