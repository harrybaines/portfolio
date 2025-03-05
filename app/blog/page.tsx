import { PageHeading } from "@/components/ui/page-heading";
import { getBlogPosts } from "@/lib/mdx-utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

// Format date to a more readable format (e.g., "Jan 15, 2023")
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

export default function Page() {
  const posts = getBlogPosts()
  const featuredPost = posts[0] // Most recent post as featured
  const remainingPosts = posts.slice(1)

  return (
    <section>
      <div className="max-w-5xl space-y-10">

        {/* Header */}
        <div className="space-y-4">
          <PageHeading label="BLOG" />
          <p className="text-3xl font-bold tracking-tight">
            My Posts
          </p>
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featuredPost.slug}`} className="group block">
          <article className="space-y-3">
            <div className="text-sm text-muted-foreground font-mono">
              <time>{formatDate(featuredPost.metadata.publishedAt)}</time>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight group-hover:text-primary">
              {featuredPost.metadata.title}
            </h2>
            <p className="text-muted-foreground">
              {featuredPost.metadata.summary}
            </p>
            <div className="flex items-center text-primary font-medium pt-1">
              Read article
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </article>
        </Link>

        {/* Post List - Minimal Coder Aesthetic */}
        <div className="pt-8">
          <div className="space-y-6">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block hover:text-primary"
              >
                <div className="flex justify-between items-start py-2">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <h3 className="font-medium">
                        {post.metadata.title}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground">
                        {formatDate(post.metadata.publishedAt)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {post.metadata.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-current mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}