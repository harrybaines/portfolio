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
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-green transition-colors font-mono -mt-6 md:mt-0"
          >
            <BsArrowLeft className="text-md" />
            Back
          </Link>

          <div className="space-y-4">
            <p className="font-mono text-md text-green">~/Project</p>
            <div className="space-y-3">
              <h1 className="font-sans text-xl font-semibold text-primary">
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
              <p className="font-mono text-md text-muted">
                {formatDate(project.metadata.publishedAt)}
              </p>
              {project.metadata.link && (
                <a
                  href={project.metadata.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-green hover:text-green/80 font-mono"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none
          prose-p:font-sans prose-p:text-primary
          prose-headings:font-mono prose-headings:text-green
          prose-p:mt-4 prose-headings:mt-6
          prose-h1:text-xl prose-h2:text-lg prose-h3:text-base
          prose-li:text-primary prose-strong:text-primary
          prose-pre:bg-surface prose-pre:border prose-pre:border-overlay
          prose-code:text-primary prose-code:bg-surface prose-code:px-1 prose-code:rounded-md
          prose-pre:rounded-lg
          prose-a:no-underline hover:prose-a:text-green">
          <CustomMDX source={project.content} />
        </article>
      </div>
    </main>
  )
}