import { formatDateFriendly, getBlogPosts } from 'app/blog/utils'
import Link from 'next/link'

export function Posts() {
  let posts = getBlogPosts()

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link href={`/blog/${post.slug}`} className="block p-6 bg-white hover:bg-amber-50 transition-colors rounded-md border border-amber-100 hover:border-amber-200 shadow-sm hover:shadow">
            <div className="text-sm text-stone-500 mb-2">{formatDateFriendly(post.metadata.publishedAt)}</div>
            <h3 className="text-lg font-medium text-stone-900 group-hover:text-amber-700 transition-colors mb-3">
              {post.metadata.title}
            </h3>
            <p className="text-stone-600 mb-4 line-clamp-3">
              {post.metadata.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {post.metadata.tags?.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs text-amber-600 hover:text-amber-800 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
    </div>
  )
}
