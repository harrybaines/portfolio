"use client";

import { techStackConfig } from "@/config";
import { motion } from "framer-motion";
import { useState } from "react";

// Animation variants
const fadeInSection = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
};

export default function TechStack() {
  const [techFilter, setTechFilter] = useState("all");

  // Filter technologies based on selected category
  const filteredTechs = techFilter === "all"
    ? techStackConfig.technologies
    : techStackConfig.technologies.filter(tech => tech.category === techFilter);

  return (
    <div className="w-full max-w-4xl mx-auto py-6 text-zinc-300 font-mono">
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeInSection}
        className="mb-8"
      >
        <h3 className="text-sm uppercase tracking-wider mb-4 flex items-center text-zinc-500 font-medium">
          Tech Stack
        </h3>

        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={() => setTechFilter("all")}
            className={`px-4 py-1.5 text-xs rounded-sm transition-colors ${techFilter === "all"
              ? "bg-amber-500/20 text-amber-500 border border-amber-900/50"
              : "bg-zinc-900/30 text-zinc-400 border border-zinc-800/50 hover:border-zinc-700/70"
              }`}
          >
            All
          </button>
          {techStackConfig.categories.map((category) => (
            <button
              key={category}
              onClick={() => setTechFilter(category)}
              className={`px-4 py-1.5 text-xs rounded-sm transition-colors ${techFilter === category
                ? "bg-amber-500/20 text-amber-500 border border-amber-900/50"
                : "bg-zinc-900/30 text-zinc-400 border border-zinc-800/50 hover:border-zinc-700/70"
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        key={techFilter}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
      >
        {filteredTechs.map((tech, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-3 rounded-sm bg-zinc-900/30 border border-zinc-800/50 hover:border-amber-600/30 transition-all"
          >
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0">
                {<tech.icon className="w-4 h-4 text-amber-500" />}
              </div>
              <span className="text-xs text-zinc-300">{tech.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}