import { baseUrl } from '@/app/sitemap'
import { CustomMDX } from '@/components/common/mdx'
import { PostLayout } from '@/components/layout/post-layout'
import { formatDate, getBlogPosts } from '@/lib/mdx-utils'
import { notFound } from 'next/navigation'

interface Params {
  slug: string
}

interface PageProps {
  params: Params
  searchParams: Record<string, string | string[] | undefined>
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
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
      url: `${baseUrl}/blog/${post.slug}`,
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

export default async function Blog({ params }: PageProps) {
  const post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <PostLayout
      title={post.metadata.title}
      description={post.metadata.summary}
      date={formatDate(post.metadata.publishedAt)}
      readingTime="5 min read"
      image={post.metadata.image || '/images/blog-default.jpg'}
    >
      <CustomMDX source={post.content} />
    </PostLayout>
  )
}