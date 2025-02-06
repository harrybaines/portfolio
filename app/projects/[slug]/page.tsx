import { baseUrl } from '@/app/sitemap'
import ProjectPost from '@/components/project-post'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjects, Project } from '../utils'

interface Params {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: Params): Metadata {
  let project = getProjects().find((project: Project) => project.slug === params.slug)
  if (!project) {
    return {}
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = project.metadata
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
      url: `${baseUrl}/projects/${project.slug}`,
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

export default function ProjectPage({ params }: Params) {
  let project = getProjects().find((project: Project) => project.slug === params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectPost project={project} />
}
