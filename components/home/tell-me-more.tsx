"use client"

import { TypingAnimation } from "@/components/common/typing-animation"
import { PageHeading } from "@/components/ui/page-heading"
import { motion } from "framer-motion"

export function TellMeMore() {
  return (
    <section>
      <motion.div
        className="space-y-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Introduction */}
        <div className="space-y-12">
          <div className="flex flex-col space-y-6 overflow-hidden">
            <PageHeading label="TELL ME MORE" />
            <motion.p
              className="text-md md:text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <TypingAnimation
                segments={[
                  { text: 'Full-stack engineer with 5+ years experience. ' },
                  { text: "Founder of " },
                  {
                    text: "archtms",
                    isLink: true,
                    href: "https://archtms.com"
                  },
                  { text: ", a complete architect management system. " },
                  { text: "Building " },
                  {
                    text: "brewkit",
                    isLink: true,
                    href: "https://brewkit.dev"
                  },
                  { text: ", a code boilerplate starter kit. " },
                  { text: "Also experimenting with AI agents and tools. " },
                  { text: "I'm open to new opportunities, feel free to reach out!" },
                ]}
                speed={150}
              />
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}