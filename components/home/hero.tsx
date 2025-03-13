"use client"

import { SocialLinks } from "@/components/common/social-links"
import { TypingAnimation } from "@/components/common/typing-animation"
import { personalConfig } from "@/data/personal"
import { motion } from "framer-motion"
import { ArrowRight, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-12 md:pt-60 pb-16 md:pb-32 flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20">
          {/* Left content */}
          <div className="w-full md:w-3/5 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-6 md:mb-8"
            >
              <TypingAnimation
                segments={[{ text: "HARRY BAINES", isLink: false }]}
                speed={300}
                className="text-sm md:text-base font-mono tracking-wider text-muted-foreground"
              />
              <h1 className="text-2xl md:text-5xl font-bold mt-2 mb-4 md:mb-6">
                <p className="text-gray-800 dark:text-foreground mb-2">Software Engineer</p>
                <p className="text-gray-500 dark:text-muted-foreground">from the UK 🇬🇧</p>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mb-8 md:mb-10"
            >
              <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed mb-4 md:mb-6 max-w-2xl">
                I&apos;m a <span className="font-medium text-foreground">full-stack developer</span> with <span className="font-medium text-foreground">6+ years of experience</span> specialising in <span className="font-medium text-foreground">web development</span>, <span className="font-medium text-foreground">AI integration</span> and <span className="font-medium text-foreground">developer tooling</span>.
              </p>
              <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed max-w-2xl">
                Founder of{" "}
                <Link href="/blog/archtms" className="text-primary hover:text-primary/80 transition-colors underline decoration-dotted underline-offset-4">
                  archtms
                </Link>, a complete management system for architecture firms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-col space-y-8"
            >
              <div className="flex items-center gap-6">
                <Link
                  href="/about"
                  className="group flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <span className="font-medium">About me</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="group flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <span className="font-medium">My work</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <SocialLinks variant="icon" className="gap-3 md:hidden" />
              <SocialLinks variant="button" className="gap-3 hidden md:flex" />
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            className="w-full md:w-2/5 order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative group pb-4 pr-4 pt-4 pl-0 md:pl-4">
              {/* Decorative elements - hidden on mobile */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/20 rounded-md hidden md:block" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-md hidden md:block" />

              {/* Hover me prompt - hidden on mobile */}
              <div className="absolute -top-4 right-3 text-xs font-mono text-muted-foreground/90 opacity-90 group-hover:opacity-0 transition-opacity duration-300 hidden md:block">
                hover me!
              </div>

              {/* Speech bubble on hover - hidden on mobile */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-30 bg-background/90 px-4 py-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
                <span className="text-base font-mono whitespace-nowrap">Yo, what&apos;s up? 👋</span>
                {/* Speech bubble triangle */}
                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-background/90 rotate-45"></div>
              </div>

              {/* Image container */}
              <div className="aspect-square w-full max-w-[180px] md:max-w-[320px] ml-0 md:mx-auto overflow-hidden rounded-md relative">
                {personalConfig.profileImage ? (
                  <>
                    <Image
                      src={personalConfig.profileImage}
                      alt={personalConfig.name}
                      width={640}
                      height={640}
                      className="w-full h-full object-cover filter md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
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
          <div className="w-px h-8 bg-muted-foreground/30" />
        </motion.div>
      </div>
    </section>
  )
}