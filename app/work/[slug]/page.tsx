import { baseUrl } from '@/app/sitemap'
import { CustomMDX } from '@/components/common/mdx'
import { PostLayout } from '@/components/layout/post-layout'
import { formatDate, getWorkProjects } from '@/lib/mdx-utils'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type tParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const posts = getWorkProjects()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata(props: { params: tParams }): Promise<Metadata> {
  const { slug } = await props.params
  const post = getWorkProjects().find((post) => post.slug === slug)

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
      url: `${baseUrl}/work/${slug}`,
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

export default async function Work(props: { params: tParams }) {
  const { slug } = await props.params;
  const post = getWorkProjects().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <PostLayout
      title={post.metadata.title}
      date={formatDate(post.metadata.publishedAt)}
      readingTime="5 min read"
      image={post.metadata.image || '/images/work-default.jpg'}
    >
      <CustomMDX source={post.content} />
    </PostLayout>
  )
}