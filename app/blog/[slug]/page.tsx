import { getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import PostContent from '@/app/components/blog/post-content'
import SEOSchema from '@/app/components/blog/seo-schema'
import Link from 'next/link'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }): Metadata | null {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return null
  }

  let {
    title,
    publishedAt: publishedTime,
    description,
    image,
  } = post.metadata
  let ogImage = image
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
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Format date to match screenshot format
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="max-w-3xl mx-auto px-6 my-16 md:my-28">
      <header className="mb-6">
        <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
          ← Back home
        </Link>
        <h1 className="text-3xl font-bold mt-6 mb-3 font-mono">{post.metadata.title}</h1>
        <time className="text-gray-500 text-sm font-mono">{formatDate(post.metadata.publishedAt)}</time>
      </header>

      <main className="mb-10">
        <PostContent content={post.content} />
      </main>

      {/* <RelatedPosts posts={getBlogPosts()} currentPostSlug={post.slug} /> */}

      <SEOSchema
        title={post.metadata.title}
        publishedAt={post.metadata.publishedAt}
        description={post.metadata.description}
        image={post.metadata.image}
        slug={post.slug}
        baseUrl={baseUrl}
      />
    </div>
  )
}