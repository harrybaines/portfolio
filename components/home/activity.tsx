"use client"

import { GitHubContributions } from "@/components/common/github-contributions";
import { PageHeading } from "@/components/ui/page-heading";
import { motion } from "framer-motion";

export function Activity() {
  return (
    <section id="projects">
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-6">
          <PageHeading label="OPEN SOURCE" />
          <p className="text-muted-foreground mb-6">
            I love building in public and contributing to open source.
          </p>
          {/* <OSContributions /> */}
          <GitHubContributions />
        </div>
      </motion.div>
    </section>
  )
}