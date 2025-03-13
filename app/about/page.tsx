"use client"

import { SocialLinks } from "@/components/common/social-links"
import { EducationList, ExperienceList } from "@/components/timeline"
import { PageHeading } from "@/components/ui/page-heading"
import { interests } from "@/data/interests"
import { personalConfig } from "@/data/personal"
import { motion } from "framer-motion"
import { User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

/**
 * About page component
 * Displays detailed information about the person, including experience, education, and interests
 */
export default function About() {
  return (
    <section className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero section - ultra minimal aesthetic */}
        <motion.section
          className="pt-6 md:pt-12 pb-16 md:pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8">
              <PageHeading label="ABOUT" />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-auto flex justify-center md:justify-start">
                <div className="relative w-[160px]">
                  <div className="w-full aspect-square overflow-hidden rounded-md relative">
                    {personalConfig.profileImage ? (
                      <>
                        <Image
                          src={personalConfig.profileImage}
                          alt={personalConfig.name}
                          fill
                          className="object-cover filter grayscale"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-background/5 opacity-50"></div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <User className="text-primary w-16 h-16" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="space-y-5">
                  <h1 className="font-mono text-lg md:text-xl font-medium text-foreground tracking-tight">
                    Software Engineer & AI Enthusiast
                  </h1>

                  <p className="font-sans text-md text-muted-foreground leading-relaxed max-w-lg">
                    I build software with a focus on clean code and performance.
                    Founder of <Link href="/blog/archtms" className="text-primary hover:text-primary/80 transition-colors underline decoration-dotted underline-offset-4">archtms</Link>, a complete architect management system.
                    Im always open to opportunities, feel free to ping me an email!
                  </p>

                  <SocialLinks variant="button" className="gap-2" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tech stack section */}
        <motion.section
          id="tech-stack"
          className="mb-20 max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="mb-6">
            <PageHeading label="TECH STACK" />
          </div>

          <motion.div
            className="rounded-lg border border-border bg-card/5 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <p className="text-muted-foreground text-base mb-8">
              I believe there is no perfect tech stack. I consider myself a full-stack developer, but I lean more towards the backend.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-mono font-medium mb-3">
                  Backend
                </h3>
                <p className="text-muted-foreground text-base">
                  I mainly work with Node.js and Go for backend systems. I&apos;ve also been exploring Rust for building high-performance APIs and CLI tools. I often use Prisma for type-safe database access. I use Supabase for auth, storage, and PostgreSQL database hosting. For deployment, I prefer containerized applications with Docker deployed to platforms like Fly.io, with CI/CD pipelines via GitHub Actions.
                </p>
              </div>

              <div>
                <h3 className="font-mono font-medium mb-3">
                  Frontend
                </h3>
                <p className="text-muted-foreground text-base">
                  I primarily work with TypeScript, Next.js and React for building modern web applications. For UI, I use Tailwind CSS and shadcn/ui for rapid development and consistent design systems.
                </p>
              </div>

              <div>
                <h3 className="font-mono font-medium mb-3">
                  AI / ML
                </h3>
                <p className="text-muted-foreground text-base">
                  Python and TypeScript are my go-to languages for AI work. I&apos;ve built several AI-powered applications including TorchGPT (generating PyTorch code from natural language) and custom avatar generators using Dreambooth Stable Diffusion. I&apos;ve contributed to the Ivy project, adding JAX to NumPy function conversions, and regularly integrate OpenAI&apos;s APIs into applications for enhanced functionality.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Desk image section */}
        <motion.section
          className="mb-20 max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          <motion.div
            className="overflow-hidden rounded-lg border border-border"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div className="relative aspect-[16/10] md:aspect-[21/11] w-full">
              <Image
                src="/images/setup/desk.jpg"
                alt="My workspace setup with split ergonomic keyboard and monitor"
                fill
                className="object-cover brightness-[0.85] contrast-[1.05] filter hover:brightness-[0.9] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-background/20 opacity-75"></div>
            </div>
            <div className="p-4 bg-card/5 backdrop-blur-sm border-t border-border">
              <p className="text-sm text-center font-mono text-muted-foreground">
                ~/My workspace
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Experience section */}
        <motion.section
          className="mb-20 max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="mb-6">
            <PageHeading label="EXPERIENCE" />
          </div>

          <ExperienceList />
        </motion.section>

        {/* Education section */}
        <motion.section
          className="mb-20 max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <div className="mb-6">
            <PageHeading label="EDUCATION" />
          </div>

          <EducationList />
        </motion.section>

        {/* Interests section */}
        <motion.section
          className="mb-20 max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <div className="mb-6">
            <PageHeading label="INTERESTS" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interests.map((hobby, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-lg border border-border"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.1), duration: 0.4 }}
              >
                <h3 className="text-base font-mono font-medium mb-2">
                  {hobby.title}
                </h3>
                <p className="text-muted-foreground text-base">
                  {hobby.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </motion.div>
    </section>
  )
}