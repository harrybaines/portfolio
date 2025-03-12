"use client"

import { SocialLinks } from "@/components/common/social-links"
import { PageHeading } from "@/components/ui/page-heading"
import { timeline } from "@/data/experience"
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
        {/* Hero section - stunning minimal aesthetic with banner */}
        <motion.section
          className="pt-12 md:pt-20 pb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl mx-auto px-4">
            {/* Banner with overlay */}
            <div className="relative w-full h-[180px] md:h-[240px] mb-12 md:mb-16 rounded-lg overflow-hidden">
              {/* Banner image */}
              <Image
                src="/images/setup/desk.png"
                alt="My workspace"
                fill
                className="object-cover object-center"
                priority
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-background/30 z-10"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <PageHeading label="ABOUT ME" />
                  <h1 className="text-3xl md:text-5xl font-bold mt-2 md:mt-3 max-w-md mb-4">
                    Harry Baines
                  </h1>
                  <p className="text-muted-foreground text-xl">
                    Full-stack developer with 6+ years of experience
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Main content with visual impact */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              {/* Left column - profile image */}
              <motion.div
                className="md:col-span-3 flex justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="relative w-full max-w-[140px] md:max-w-none">
                  {/* Image frame with subtle effects */}
                  <div className="w-full aspect-[4/5] overflow-hidden rounded-md relative group">
                    {personalConfig.profileImage ? (
                      <>
                        <Image
                          src={personalConfig.profileImage}
                          alt={personalConfig.name}
                          fill
                          className="object-cover filter md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
                          priority
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-60 md:group-hover:opacity-40 transition-opacity duration-500"></div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <User className="text-primary w-16 h-16" />
                      </div>
                    )}

                    {/* Badge - moved inside the image container to ensure consistent positioning */}
                    <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm border border-border rounded-md px-2 py-0.5 shadow-sm z-20">
                      <span className="text-xs font-mono text-primary">UK 🇬🇧</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right column - content */}
              <motion.div
                className="md:col-span-9"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {/* Content with clean typography */}
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Hi there, I&apos;m Harry. I&apos;m currently focused on <span className="text-foreground font-medium">full-stack web development</span> and <span className="text-foreground font-medium">AI integration</span>. Building{" "}
                    <Link href="/blog/archtms" className="text-primary hover:text-primary/80 transition-colors underline decoration-dotted underline-offset-4">
                      archtms
                    </Link>, a complete management system for architecture firms.
                  </p>

                  <p>
                    I mainly code in <span className="text-foreground font-medium">TypeScript</span>, <span className="text-foreground font-medium">Go</span> and <span className="text-foreground font-medium">Python</span>. Recently, I&apos;ve been learning <span className="text-foreground font-medium">Rust</span> to build API&apos;s and CLI&apos;s.
                  </p>

                  <p>
                    I&apos;m always open to new opportunities, feel free to ping me an email!
                  </p>
                </div>

                {/* Actions with visual distinction */}
                <div className="mt-6">
                  <SocialLinks variant="icon" className="gap-3" />
                </div>
              </motion.div>
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
              I believe there is no perfect tech stack. I believe in using the right tool for the job. And if that means learning a new language, I&apos;m all for it!
              I consider myself a full-stack developer, but I lean more towards the backend and infrastructure.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-mono font-medium mb-3 text-lg">
                  Backend & Infrastructure
                </h3>
                <p className="text-muted-foreground text-base">
                  I mainly work with Node.js and Go for backend systems. I&apos;ve also been exploring Rust for building high-performance APIs and CLI tools. I often use Prisma for type-safe database access. I use Supabase for auth, storage, and PostgreSQL database hosting. For deployment, I prefer containerized applications with Docker deployed to platforms like Fly.io, with CI/CD pipelines via GitHub Actions.
                </p>
              </div>

              <div>
                <h3 className="font-mono font-medium mb-3 text-lg">
                  Frontend Development
                </h3>
                <p className="text-muted-foreground text-base">
                  I primarily work with TypeScript, Next.js and React for building modern web applications. For UI, I use Tailwind CSS and shadcn/ui for rapid development and consistent design systems.
                </p>
              </div>

              <div>
                <h3 className="font-mono font-medium mb-3 text-lg">
                  AI & Machine Learning
                </h3>
                <p className="text-muted-foreground text-base">
                  Python is my go-to language for machine learning and AI work. I&apos;ve built several AI-powered applications including TorchGPT (generating PyTorch code from natural language) and custom avatar generators using Stable Diffusion. I&apos;ve contributed to the Ivy project, adding JAX to NumPy function conversions, and regularly integrate OpenAI&apos;s APIs into applications for enhanced functionality.
                </p>
              </div>
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

          <div className="space-y-4">
            {timeline.filter(item => item.type === "work").map((job, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-lg border border-border bg-card/5 backdrop-blur-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.1), duration: 0.4 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-1">
                  <h3 className="text-base font-mono font-medium">
                    {job.role} @ {job.company}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono px-2 py-1 bg-primary/5 rounded-full inline-block md:ml-2 w-fit">
                    {job.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-base">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
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

          <div className="space-y-4">
            {timeline.filter(item => item.type === "education").map((edu, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-lg border border-border bg-card/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.1), duration: 0.4 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-1">
                  <h3 className="text-base font-mono font-medium">
                    {edu.role} @ {edu.company}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono px-2 py-1 bg-primary/5 rounded-full inline-block md:ml-2 w-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-base">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
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
                className="p-6 rounded-lg border border-border bg-card/5 backdrop-blur-sm"
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