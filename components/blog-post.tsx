import { formatDate } from '@/app/blog/utils'
import { baseUrl } from '@/app/sitemap'
import { CustomMDX } from '@/components/mdx'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

interface BlogPostProps {
  post: {
    slug: string
    content: string
    metadata: {
      title: string
      publishedAt: string
      summary: string
      image?: string
    }
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <section className="min-h-screen">
      <div className="h-[5vh]" />
      <div className="w-full">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-500 transition-colors mb-10"
        >
          <BsArrowLeft className="text-md" />
          Back to blog
        </Link>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                '@type': 'Person',
                name: 'harrybaines',
              },
            }),
          }}
        />
        <h1 className="title font-semibold text-2xl tracking-tighter">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <article className="prose prose-invert prose-emerald max-w-none">
          <CustomMDX source={post.content} />
        </article>
      </div>
    </section>
  )
}