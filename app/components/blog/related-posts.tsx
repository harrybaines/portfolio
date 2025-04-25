import { formatDateFriendly } from 'app/blog/utils';
import Link from 'next/link';

interface RelatedPost {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    tags?: any;
  };
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 my-16">
      <h2 className="text-2xl font-semibold text-stone-900 mb-8">
        More articles you might enjoy
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}
            className="p-6 bg-white hover:bg-amber-50 transition-colors rounded-md border border-amber-100 hover:border-amber-200 shadow-sm hover:shadow">
            <div className="text-sm text-stone-500 mb-2">{formatDateFriendly(post.metadata.publishedAt)}</div>
            <h3 className="text-lg font-medium text-stone-900 hover:text-amber-700 transition-colors mb-3">
              {post.metadata.title}
            </h3>
            <p className="text-stone-600 mb-4 line-clamp-3">
              {post.metadata.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(post.metadata.tags)
                ? post.metadata.tags.map((tag, index) => (
                  <span key={index} className="text-xs text-amber-600">#{tag}</span>
                ))
                : post.metadata.tags && typeof post.metadata.tags === 'string'
                  ? post.metadata.tags.split(',').map((tag, index) => (
                    <span key={index} className="text-xs text-amber-600">#{tag.trim()}</span>
                  ))
                  : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}