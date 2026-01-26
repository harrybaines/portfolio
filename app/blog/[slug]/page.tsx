import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";
import PostContent from "@/app/components/blog/post-content";
import SEOSchema from "@/app/components/blog/seo-schema";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }): Metadata | null {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return null;
  }

  const {
    title,
    publishedAt: publishedTime,
    description,
    image,
  } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${globalThis.encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function BlogPost({ params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toISOString().split("T")[0];
  };

  const wordsPerMinute = 225;
  const wordCount = post.content.trim().split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute));

  return (
    <div className="min-h-screen py-16 md:py-24 px-8">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <Link
            href="/"
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
          >
            Harry Baines
          </Link>
        </header>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 text-sm text-[var(--text-tertiary)] font-mono mb-4">
            <time>{formatDate(post.metadata.publishedAt)}</time>
            <span>·</span>
            <span>{readingTime} min read</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-normal leading-tight tracking-tight text-[var(--foreground)]">
            {post.metadata.title}
          </h1>
        </div>

        {/* Content */}
        <div className="prose">
          <PostContent content={post.content} />
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-[var(--border-color)]">
          <Link
            href="/blog"
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
          >
            Back to writing
          </Link>
        </div>

        <SEOSchema
          title={post.metadata.title}
          publishedAt={post.metadata.publishedAt}
          description={post.metadata.description}
          image={post.metadata.image}
          slug={post.slug}
          baseUrl={baseUrl}
        />
      </div>
    </div>
  );
}
