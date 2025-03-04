"use client"

import { FeaturedProject } from "@/components/common/featured-project";
import { PageHeading } from "@/components/ui/page-heading";
import { motion } from "framer-motion";

export function HomeFeaturedProject() {
  return (
    <section>
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <PageHeading label="FEATURED PROJECT" />
        <FeaturedProject />
      </motion.div>
    </section>
  )
}