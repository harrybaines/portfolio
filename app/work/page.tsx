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
    <div className="space-y-32">

      {/* Projects Section */}
      <div className="space-y-16">
        <div className="space-y-4">
          <PageHeading label="PROJECTS" />
          <p className="text-3xl font-bold tracking-tight">
            Things I&apos;ve Built
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I love building things that can help make people&apos;s lives better. Here are a few projects which I&apos;m most proud of.  You can find more of my work on{" "}
            <Link href="https://github.com/harrybaines" className="underline underline-offset-4 hover:text-foreground">
              GitHub
            </Link>
            .
          </p>
        </div>

        <div className="space-y-6">
          <PageHeading label="FEATURED PROJECT" />
          <FeaturedProject />
        </div>

        <div className="space-y-6">
          <PageHeading label="SIDE PROJECTS" />
          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={project.link ?? ""}
                  target="_blank"
                  className="group block text-foreground hover:text-primary/80"
                >
                  <div className="flex justify-between items-center">
                    <div className="space-y-1.5">
                      <h3 className="font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-current" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Source Contributions */}
      <Activity />

      {/* Experience Section */}
      <div className="space-y-16">
        <div className="space-y-4">
          <PageHeading label="EXPERIENCE" />

          <p className="text-3xl font-bold tracking-tight">
            Where I&apos;ve Worked
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My professional journey in industry.
          </p>
        </div>

        <JourneyTimeline />
      </div>
    </div>
  )
}