import { formatDateFriendly, getBlogPosts } from 'app/blog/utils'
import Link from 'next/link'

export function Posts() {
  let posts = getBlogPosts()

  return (
    <div className="flex flex-col">
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`block py-4 px-3 rounded-md hover:bg-stone-50 dark:hover:bg-neutral-900 transition-colors ${index === posts.length - 1 ? '' : 'border-b border-stone-100 dark:border-neutral-900'}`}
          >
            <div className="flex justify-between items-baseline">
              <h3 className="text-base font-medium text-stone-900 dark:text-stone-100 hover:text-amber-700 dark:hover:text-amber-500 transition-colors">
                {post.metadata.title}
              </h3>
              <div className="text-xs text-stone-400 dark:text-stone-500 ml-3 whitespace-nowrap">{formatDateFriendly(post.metadata.publishedAt)}</div>
            </div>
            <p className="text-stone-600 dark:text-stone-300 text-sm leading-snug">
              {post.metadata.description}
            </p>
            {post.metadata.tags && post.metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-1">
                {post.metadata.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs text-amber-600 dark:text-amber-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
    </div>
  )
}
