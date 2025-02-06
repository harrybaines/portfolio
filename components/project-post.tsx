import type { Project } from '@/app/projects/utils'
import { formatDate } from '@/app/projects/utils'
import { CustomMDX } from '@/components/mdx'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

interface ProjectPostProps {
  project: Project
}

export default function ProjectPost({ project }: ProjectPostProps) {
  return (
    <main className="min-h-screen flex flex-col md:justify-center px-6 sm:px-8 max-w-3xl mx-auto py-24 md:py-40">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors font-mono -mt-6 md:mt-0"
          >
            <BsArrowLeft className="text-xs" />
            Back to projects
          </Link>

          <div className="space-y-4">
            <p className="font-mono text-sm text-primary">~/Project</p>
            <div className="space-y-3">
              <h1 className="font-sans text-2xl font-semibold text-text">
                {project.metadata.title}
              </h1>
              {/* <div className="flex flex-wrap gap-2">
                {project.metadata.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary rounded-md text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div> */}
              <p className="font-mono text-md text-text-muted">
                {formatDate(project.metadata.publishedAt)}
              </p>
              {project.metadata.link && (
                <a
                  href={project.metadata.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-primary hover:underline font-mono"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none prose-p:font-sans prose-p:text-text prose-headings:font-sans prose-headings:text-text prose-p:mt-4 prose-headings:mt-6 prose-h1:text-xl prose-h2:text-lg prose-h3:text-base">
          <CustomMDX source={project.content} />
        </article>
      </div>
    </main>
  )
}