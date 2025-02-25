"use client"

import { Activity } from "@/components/home/activity"
import { FeaturedProject } from "@/components/home/featured-project"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { PageHeading } from "@/components/ui/page-heading"
import { timeline } from "@/data/experience"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Brewkit",
    description: "A modern code boilerplate starter kit for quickly bootstrapping new projects with best practices and common configurations.",
    image: "/projects/brewkit/preview.png",
    link: "https://brewkit.dev",
    tags: ["TypeScript", "React", "Next.js", "Tailwind"]
  },
  {
    title: "AI Avatar Generator",
    description: "AI avatar generator trained on my face using Dreambooth Stable Diffusion, with the trained model hosted on Hugging Face.",
    image: "/projects/ai-avatars/me.png",
    link: "https://github.com/harrybaines/ai-avatar-generator",
    tags: ["Next.js", "Stable Diffusion", "Hugging Face", "Railway"]
  },
  {
    title: "TorchGPT",
    description: "Generate PyTorch code from natural language prompts using OpenAI's text-davinci-3 model.",
    image: "/projects/torchgpt/app.png",
    link: "https://github.com/harrybaines/torchgpt",
    tags: ["TypeScript", "OpenAI", "PyTorch", "Next.js"]
  },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="space-y-32">
        {/* Experience Section */}
        <div className="space-y-16">
          <div className="space-y-4">
            <PageHeading label="EXPERIENCE" />

            <h1 className="text-3xl font-bold tracking-tight">
              Where I&apos;ve Worked
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              My journey building products and leading engineering teams.
            </p>
          </div>

          <div className="space-y-6">
            {timeline
              .filter(item => item.type === "work")
              .map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Card className="group overflow-hidden hover:bg-muted/50 transition-colors">
                    <div className="p-5 space-y-4">
                      {/* Header */}
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-white/90 shadow-sm">
                          <Image
                            src={item.logo}
                            alt={item.company}
                            width={28}
                            height={28}
                            className="object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-4">
                            <h3 className="text-lg font-semibold tracking-tight">
                              {item.companyUrl ? (
                                <Link
                                  href={item.companyUrl}
                                  target="_blank"
                                  className="hover:text-primary transition-colors"
                                >
                                  {item.role}
                                </Link>
                              ) : (
                                item.role
                              )}
                            </h3>
                            {item.badge && (
                              <Badge variant="outline" className="shrink-0 font-mono text-xs">
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <span className="font-medium">{item.company}</span>
                            <span>•</span>
                            <span>{item.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>

                      {/* Tech Stack */}
                      {item.tech && (
                        <div className="flex flex-wrap gap-2">
                          {item.tech.map((tech, j) => (
                            <div
                              key={j}
                              className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 border border-border"
                            >
                              {tech.icon && (
                                <tech.icon className="h-3.5 w-3.5" />
                              )}
                              <span className="text-xs font-medium">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <PageHeading label="PROJECTS" />

            <h2 className="text-3xl font-bold tracking-tight">
              Things I&apos;ve Built
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of projects I&apos;ve worked on, from developer tools to AI experiments.
            </p>
          </div>

          <FeaturedProject />

          <div className="space-y-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link href={project.link} target="_blank">
                  <Card className="group overflow-hidden hover:bg-muted/50 transition-colors">
                    <div className="grid md:grid-cols-[1fr,3fr] gap-6">
                      <div className="relative aspect-[3/4] md:aspect-auto overflow-hidden bg-muted">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-5 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-4">
                            <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <div
                              key={tag}
                              className="px-2 py-1 text-xs font-medium rounded-md bg-muted/50 border border-border"
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Open Source Contributions */}
        <Activity />

      </div>
    </div>
  )
}