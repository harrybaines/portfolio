"use client"

import { SocialLink } from "@/components/common/social-link"
import { TypingAnimation } from "@/components/common/typing-animation"
import { PageHeading } from "@/components/ui/page-heading"
import { socialLinks } from "@/data/social-links"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  // Animation variants for consistent fade-in-up effect
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 }
    })
  }

  return (
    <section className="py-16 md:py-24">
      <div className="relative">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-8">
          <div className="space-y-8 md:space-y-8 max-w-3xl">

            {/* Profile Image - Hidden on small screens, visible on md and up */}
            <motion.div
              className="hidden md:block self-start"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-border shadow-lg">
                <Image
                  src="/images/profile/me.jpeg"
                  alt="Harry Baines"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div
              className="space-y-4 md:space-y-8"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <div className="space-y-4">
                <PageHeading label="SOFTWARE ENGINEER" />
                <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight leading-tight font-mono">
                  👋  Hi, I&apos;m Harry
                </h1>
              </div>

              <div className="space-y-4 text-muted-foreground text-md">
                <p className="leading-7">
                  I&apos;m a <span className="font-medium text-foreground">full-stack developer</span> from the <span className="font-medium text-foreground">UK 🇬🇧</span>{" "}
                  specialising in <span className="font-medium text-foreground">AI integration</span>, <span className="font-medium text-foreground">web development</span> and <span className="font-medium text-foreground">developer tooling</span>.
                  Founder of <Link href="/work/archtms" className="text-primary">archtms</Link>, a complete management system for architecture firms.
                </p>
                <TypingAnimation
                  segments={[
                    { text: "Mostly working with TypeScript, Python and Go. " },
                    { text: "I enjoy contributing to open-source projects and learning new things." },
                    { text: "I'm open to new opportunities, feel free to reach out!" }
                  ]}
                  speed={100}
                />
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              className="flex flex-col space-y-8"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <div className="flex items-center gap-6">
                <Link
                  href="/about"
                  className="group flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <span className="font-medium">About me</span>
                  <ArrowRight size={16} className="transition-transform" />
                </Link>
                <Link
                  href="/work"
                  className="group flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <span className="font-medium">My work</span>
                  <ArrowRight size={16} className="transition-transform" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-6">
                {socialLinks.map((link) => (
                  <SocialLink key={link.label} {...link} />
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}