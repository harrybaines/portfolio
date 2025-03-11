import { baseUrl } from '@/app/sitemap'
import Comments from '@/components/blog/comments'
import { CustomMDX } from '@/components/common/mdx'
import { getBlogPosts } from '@/lib/mdx-utils'
import { ChevronLeft, Clock, MessageSquare, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type tParams = Promise<{ slug: string }>;

// Function to calculate reading time based on content length
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata(props: { params: tParams }) {
  const { slug } = await props.params
  const post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    return {}
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

// Extract tags from content or metadata
function extractTags(post: { metadata: { tags?: string | string[] } }): string[] {
  // If post has tags in metadata, use those
  if (post.metadata.tags) {
    return typeof post.metadata.tags === 'string'
      ? post.metadata.tags.split(',').map((tag: string) => tag.trim())
      : post.metadata.tags;
  }

  // Otherwise return some default tags
  return ['Coding', 'Development'];
}

export default async function Blog(props: { params: tParams }) {
  const { slug } = await props.params;
  const post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const readingTime = calculateReadingTime(post.content);
  // Fix the type error by casting post to the expected type
  const tags = extractTags(post as unknown as { metadata: { tags?: string | string[] } });

  return (
    <div className="relative max-w-5xl mx-auto font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 group"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to all posts</span>
        </Link>

      </nav>

      {/* Header */}
      <header className="space-y-6">
        {/* Title with decorative element */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gray-400 dark:bg-gray-600"></div>
            <span className="text-sm font-mono tracking-wider text-gray-600 dark:text-gray-400">
              {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 leading-tight">
            {post.metadata.title}
          </h1>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap items-center gap-6">
            {/* Reading time */}
            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span>{readingTime}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                >
                  <Tag className="w-3 h-3 mr-1.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.metadata.image && (
        <div className="mb-16 relative aspect-[21/9] w-full overflow-hidden rounded-xl shadow-lg">
          <Image
            src={post.metadata.image}
            alt={post.metadata.title}
            fill
            priority
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50"></div>
        </div>
      )}

      {/* Main content - full width now */}
      <article className="prose prose-lg dark:prose-invert max-w-none
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900 dark:prose-headings:text-gray-50
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-800 prose-h2:pb-2
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
        prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-7 prose-p:my-6
        prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
        prose-code:font-mono prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:rounded prose-code:px-1 prose-code:py-0.5
        prose-pre:bg-gray-900 dark:prose-pre:bg-black prose-pre:border prose-pre:border-gray-300 dark:prose-pre:border-gray-700 prose-pre:rounded-lg
        prose-blockquote:border-l-4 prose-blockquote:border-gray-400 dark:prose-blockquote:border-gray-600 prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:italic
        prose-img:rounded-lg prose-img:shadow-md
        prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:my-2
        prose-strong:text-gray-800 dark:prose-strong:text-gray-200 prose-strong:font-semibold
        prose-hr:border-gray-200 dark:prose-hr:border-gray-800 prose-hr:my-8
      ">
        <CustomMDX source={post.content} />
      </article>

      {/* Comments section */}
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-6">
          <MessageSquare className="w-5 h-5 text-blue-500 dark:text-blue-400" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Comments</h3>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
          <Comments />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Continue Reading</h3>
            <div className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              <Link href="/blog" className="inline-flex items-center gap-1">
                Browse all articles
                <ChevronLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}