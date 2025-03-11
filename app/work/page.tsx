"use client"

import { FeaturedProject } from "@/components/common/featured-project"
import { Activity } from "@/components/home/activity"
import { JourneyTimeline } from "@/components/home/journey-timeline"
import { PageHeading } from "@/components/ui/page-heading"
import { projects } from "@/data/projects"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function WorkPage() {
  return (
    <section className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero section - minimal design */}
        <motion.section
          className="mb-16 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Compact header */}
          <div className="max-w-5xl mx-auto px-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <PageHeading label="WORK" />
              <h1 className="text-2xl md:text-4xl font-bold mt-3 mb-3 max-w-lg">
                Things I&apos;ve Built
              </h1>
              <p className="text-muted-foreground text-base">
                I love building things that can help make people&apos;s lives better.
              </p>
            </motion.div>
          </div>

          {/* Featured Project Section */}
          <motion.section
            className="mb-16 max-w-5xl mx-auto px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="mb-6">
              <PageHeading label="FEATURED PROJECT" />
            </div>

            <FeaturedProject />
          </motion.section>

          {/* Side Projects Section */}
          <motion.section
            className="mb-16 max-w-5xl mx-auto px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className="mb-6">
              <PageHeading label="SIDE PROJECTS" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  className="relative p-6 rounded-lg border border-border bg-card/5 backdrop-blur-sm overflow-hidden group hover:bg-card/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1), duration: 0.4 }}
                >
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="absolute inset-0 z-10"
                      aria-label={`View ${project.title} project`}
                    >
                      <span className="sr-only">View {project.title} project</span>
                    </Link>
                  )}

                  <div className="flex flex-col h-full relative z-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base font-mono font-medium group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.link && (
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      )}
                    </div>

                    <p className="text-muted-foreground text-base mb-4 group-hover:text-muted-foreground/80 transition-colors">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.title}-${tag}`}
                          className="text-xs font-mono px-2 py-1 bg-primary/5 rounded-full text-muted-foreground group-hover:text-muted-foreground/80 transition-colors pointer-events-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="https://github.com/harrybaines"
                target="_blank"
                className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                View more on GitHub
              </Link>
            </div>
          </motion.section>

          {/* Open Source Contributions */}
          <motion.section
            className="mb-16 max-w-5xl mx-auto px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div className="mb-6">
              <PageHeading label="OPEN SOURCE" />
            </div>

            <Activity />
          </motion.section>

          {/* Experience Section */}
          <motion.section
            className="mb-16 max-w-5xl mx-auto px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <div className="mb-6">
              <PageHeading label="EXPERIENCE" />
            </div>

            <JourneyTimeline />
          </motion.section>
        </motion.section>
      </motion.div>
    </section>
  )
}