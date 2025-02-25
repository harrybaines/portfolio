"use client"

import { SocialLink } from "@/components/common/social-link"
import { Button } from "@/components/ui/button"
import { socialLinks } from "@/data/social-links"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="flex min-h-[40vh] items-center justify-center">
      <div className="relative flex flex-col max-w-3xl mx-auto space-y-8">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <motion.p
                className="font-mono text-md tracking-widest text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                HARRY BAINES
              </motion.p>
              <motion.h1
                className="text-4xl font-bold font-sans tracking-tight sm:text-5xl/tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Software Engineer
              </motion.h1>
            </div>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Building thoughtful software solutions that help people work better.<br />
              Passionate about full-stack web development, AI and developer tooling.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Read more about me <Link href="/about" className="text-primary hover:text-primary/80 transition-colors">here</Link>.
            </motion.p>
            <motion.div
              className="flex items-center justify-center gap-4 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex gap-4">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[120px]"
                  size="lg"
                  asChild
                >
                  <Link href="mailto:harryb0905@googlemail.com">Get in touch</Link>
                </Button>
              </div>
              <div className="flex gap-3">
                {socialLinks.map(link => (
                  <SocialLink key={link.label} {...link} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}