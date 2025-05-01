import { formatDateFriendly } from 'app/blog/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface RelatedPost {
  slug: string;
  metadata: {
    title: string;
    description: string;
    publishedAt: string;
    tags?: any;
  };
}

interface RelatedPostsProps {
  posts: RelatedPost[];
  currentPostSlug: string;
}

export default function RelatedPosts({ posts, currentPostSlug }: RelatedPostsProps) {
  // Sort posts by date (latest first)
  const sortedPosts = [...posts].sort((a, b) =>
    new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  // Find current post index
  const currentPostIndex = sortedPosts.findIndex(post => post.slug === currentPostSlug);

  // Get adjacent posts (previous = newer, next = older)
  const previousPost = currentPostIndex > 0 ? sortedPosts[currentPostIndex - 1] : null;
  const nextPost = currentPostIndex < sortedPosts.length - 1 ? sortedPosts[currentPostIndex + 1] : null;

  if (!previousPost && !nextPost) return null;

  return (
    <div className="max-w-4xl mx-auto mt-16 border-t border-zinc-800 pt-12">
      <h2 className="text-xl font-medium text-zinc-200 mb-8">
        Other Posts
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {previousPost && (
          <Link
            href={`/blog/${previousPost.slug}`}
            className="group flex flex-col"
          >
            <div className="text-sm text-amber-500 mb-2 flex items-center">
              <ArrowLeft size={14} className="mr-1" />
              <span>Newer</span>
            </div>
            <h3 className="text-lg font-medium text-zinc-300 group-hover:text-amber-500 transition-colors">
              {previousPost.metadata.title}
            </h3>
            <div className="text-sm text-zinc-500 mt-1">
              {formatDateFriendly(previousPost.metadata.publishedAt)}
            </div>
          </Link>
        )}

        {nextPost && (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group flex flex-col text-right"
          >
            <div className="text-sm text-amber-500 mb-2 flex items-center justify-end">
              <span>Older</span>
              <ArrowRight size={14} className="ml-1" />
            </div>
            <h3 className="text-lg font-medium text-zinc-300 group-hover:text-amber-500 transition-colors">
              {nextPost.metadata.title}
            </h3>
            <div className="text-sm text-zinc-500 mt-1">
              {formatDateFriendly(nextPost.metadata.publishedAt)}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}