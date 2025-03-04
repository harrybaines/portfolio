"use client"

import { SocialLink } from "@/components/common/social-link"
import { socialLinks } from "@/data/social-links"
import { motion } from "framer-motion"
import { Code, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="relative">
        {/* Status indicator */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm font-mono text-muted-foreground">open to work</span>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8 max-w-3xl">
            {/* Main headline */}
            <motion.div
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight leading-tight font-mono">
                Harry Baines
              </h1>

              <p className="text-lg text-muted-foreground leading-8">
                Software engineer building thoughtful digital products. Specializing in full-stack development, AI integration, and developer tooling. Read more <Link href="/about" className="text-primary hover:underline transition-colors">about me</Link>.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/work"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                <Code size={16} />
                <span>Work</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                <User size={16} />
                <span>About</span>
              </Link>
              <div className="flex gap-4 sm:gap-5">
                {socialLinks.map((link) => (
                  <SocialLink key={link.label} {...link} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Profile Image - Hidden on small screens, visible on md and up */}
          <motion.div
            className="hidden md:block self-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-border">
              <Image
                src="/images/profile/me.jpeg"
                alt="Harry Baines"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}