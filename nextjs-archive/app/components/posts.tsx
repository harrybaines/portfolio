import { formatDateFriendly, getBlogPosts } from "app/blog/utils";
import Link from "next/link";

export function Posts() {
  let posts = getBlogPosts();

  return (
    <div className="space-y-3">
      {posts
        .sort((a, b) => {
          if (
            new globalThis.Date(a.metadata.publishedAt) >
            new globalThis.Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <div key={post.slug} className="flex items-center justify-between w-full" style={{ listStyle: 'none' }}>
            <div className="flex items-center gap-2">
              <Link
                href={`/blog/${post.slug}`}
                className="text-neutral-900 dark:text-neutral-200 text-lg underline hover:no-underline transition-all"
              >
                {post.metadata.title}
              </Link>
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-500 font-mono">
              {formatDateFriendly(post.metadata.publishedAt)}
            </span>
          </div>
        ))}
    </div>
  );
}
