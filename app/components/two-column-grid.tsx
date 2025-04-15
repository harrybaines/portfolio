'use client';

import { motion } from "framer-motion";
import { BlogPosts } from "./posts";
import { Projects } from "./projects";

export function TwoColumnGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Projects Column */}
        <div>
          <h3 className="text-sm uppercase tracking-wide text-white/50 font-mono mb-6">
            projects
          </h3>
          <Projects />
        </div>

        {/* Writing Column */}
        <div>
          <h3 className="text-sm uppercase tracking-wide text-white/50 font-mono mb-6">
            writing
          </h3>
          <BlogPosts />
        </div>
      </div>
    </motion.div>
  );
}