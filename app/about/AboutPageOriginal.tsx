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
export default function AboutOriginal() {
  return (
    <section className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero section - completely overhauled */}
        <motion.section
          className="min-h-[90vh] flex flex-col justify-center mb-32 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle background element */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              {/* Left content */}
              <div className="w-full md:w-3/5 order-2 md:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="mb-8"
                >
                  <span className="text-sm font-mono tracking-wider text-primary">ABOUT</span>
                  <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 leading-tight">
                    Software Engineer <br />
                    <span className="text-muted-foreground">from the UK 🇬🇧</span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="mb-10"
                >
                  <p className="text-xl text-muted-foreground/90 leading-relaxed mb-6 max-w-2xl">
                    Hi there! I&apos;m Harry, a developer with <span className="font-medium text-foreground">6+ years of experience</span> in software. Currently focused on full-stack web development and AI integration.
                  </p>
                  <p className="text-xl text-muted-foreground/90 leading-relaxed max-w-2xl">
                    Building{" "}
                    <Link href="https://archtms.com" className="text-primary hover:text-primary/80 transition-colors underline decoration-dotted underline-offset-4">
                      archtms
                    </Link>, a complete management system for architecture firms.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                >
                  <SocialLinks variant="button" className="gap-3" />
                </motion.div>
              </div>

              {/* Right image */}
              <motion.div
                className="w-full md:w-2/5 order-1 md:order-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 border border-primary/20 rounded-md" />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-primary/20 rounded-md" />

                  {/* Image container */}
                  <div className="aspect-square w-full max-w-[320px] mx-auto overflow-hidden rounded-md relative">
                    {personalConfig.profileImage ? (
                      <Image
                        src={personalConfig.profileImage}
                        alt={personalConfig.name}
                        width={640}
                        height={640}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <User className="text-primary w-16 h-16" />
                      </div>
                    )}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-60" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="text-xs font-mono text-muted-foreground mb-2">SCROLL</span>
              <div className="w-px h-12 bg-muted-foreground/30" />
            </motion.div>
          </div>
        </motion.section>

        {/* Tech stack section - moved above experience section */}
        <motion.section
          className="mb-16 space-y-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <PageHeading label="TECH STACK" />
          </h2>

          <motion.div
            className="rounded-sm border border-border bg-card/5 backdrop-blur-sm p-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <h3 className="text-base font-mono font-medium mb-4">
              LANGUAGES & TECHNOLOGIES
            </h3>
            <p className=" text-base mb-4">
              I mainly code in TypeScript, Go and Python. Recently, I&apos;ve been learning Rust to build API&apos;s and CLI&apos;s.
              I&apos;m open to full-time opportunities and part-time work, feel free to get in touch and we can have a chat!
            </p>
          </motion.div>

          <motion.div
            className="rounded-sm border border-border bg-card/5 backdrop-blur-sm p-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h3 className="text-base font-mono font-medium mb-3">
              MY APPROACH TO TECHNOLOGY
            </h3>
            <p className="text-muted-foreground/90 text-base mb-4">
              There is no perfect tech stack. I believe in using the right tool for the job, focusing on technologies that prioritize developer experience without sacrificing performance. My approach balances cutting-edge innovation with battle-tested reliability, ensuring that the solutions I build are both maintainable and future-proof.
            </p>
            <p className="text-muted-foreground/90 text-base mb-4">
              For frontend development, I&apos;ve found that React with TypeScript provides the perfect combination of flexibility and type safety. Next.js has become my framework of choice due to its excellent developer experience, built-in performance optimizations, and versatile rendering strategies. I&apos;m particularly excited about the React Server Components paradigm and how it&apos;s reshaping frontend architecture.
            </p>
            <p className="text-muted-foreground/90 text-base">
              On the backend, I gravitate toward Node.js for its JavaScript ecosystem consistency, though I&apos;m increasingly exploring Rust for performance-critical applications. I&apos;m currently deepening my knowledge of AI integration patterns, serverless architectures, and edge computing to build more responsive, intelligent applications.
            </p>
          </motion.div>

          <motion.div
            className="rounded-sm border border-border bg-card/5 backdrop-blur-sm p-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <h3 className="text-base font-mono font-medium mb-3">
              CURRENT TOOLS & TECHNOLOGIES
            </h3>
            <p className="text-muted-foreground/90 text-base mb-6">
              My current development environment spans several domains, each with carefully selected technologies:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-mono font-medium mb-2">
                  FRONTEND
                </h4>
                <p className="text-muted-foreground/90 text-base">
                  My UI work centers around React with TypeScript for type safety and Next.js for its versatile rendering strategies. I style applications with Tailwind CSS for its utility-first approach and rapid development capabilities. This combination allows me to build responsive, accessible, and performant user interfaces.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-mono font-medium mb-2">
                  BACKEND
                </h4>
                <p className="text-muted-foreground/90 text-base">
                  I build server-side applications with Node.js, Python, and Django, choosing the right tool based on project requirements. For data persistence, I rely on PostgreSQL for relational data, Redis for caching and real-time features, and Supabase for its Firebase-like developer experience with PostgreSQL underpinnings.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-mono font-medium mb-2">
                  AI INTEGRATION
                </h4>
                <p className="text-muted-foreground/90 text-base">
                  I leverage OpenAI&apos;s APIs to build intelligent features into applications, from content generation to semantic search and natural language processing. I&apos;m particularly interested in the intersection of traditional software development and AI capabilities.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Experience section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <PageHeading label="EXPERIENCE" />
          </h2>
          <div className="space-y-6">
            {timeline.filter(item => item.type === "work").map((job, i) => (
              <motion.div
                key={i}
                className="p-5 rounded-sm border border-border bg-card/5 backdrop-blur-sm relative overflow-hidden group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.1), duration: 0.4 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base font-mono font-medium">
                    {job.role} @ {job.company}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">
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
          className="mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <PageHeading label="EDUCATION" />
          </h2>
          <div className="space-y-3">
            {timeline.filter(item => item.type === "education").map((edu, i) => (
              <motion.div
                key={i}
                className="p-5 rounded-sm border border-border bg-card/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base font-mono font-medium">
                    {edu.role} @ {edu.company}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">
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

        <motion.section
          className="mx-auto mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <PageHeading label="INTERESTS" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((hobby, i) => (
              <motion.div
                key={i}
                className="p-5 rounded-sm border border-border bg-card/5 backdrop-blur-sm relative overflow-hidden group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.1), duration: 0.4 }}
              >
                <h3 className="text-base font-mono font-medium">
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