import { formatDateFriendly, getBlogPosts } from 'app/blog/utils'
import Link from 'next/link'

export function Posts() {
  let posts = getBlogPosts()

  return (
    <div className="flex flex-col space-y-8">
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
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block relative rounded-lg"
          >
            <div className="flex">
              <div className="flex-1 pr-16">
                <h3 className="text-base font-medium text-neutral-800 hover:text-blue-600 transition-colors mb-1">
                  {post.metadata.title}
                </h3>
                <p className="text-neutral-500 text-sm">
                  {post.metadata.description}
                </p>
                {post.metadata.tags && post.metadata.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.metadata.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-blue-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-xs text-neutral-500 font-mono absolute right-0 top-1/2 transform -translate-y-1/2">
                {formatDateFriendly(post.metadata.publishedAt)}
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
