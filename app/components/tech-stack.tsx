"use client";

import { techStackConfig } from "@/config";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useState } from "react";
import SectionWrapper from "./section-wrapper";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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
    <SectionWrapper bgColor="bg-white">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 text-amber-600 mb-2">
          <Terminal size={18} strokeWidth={1.5} />
          <span className="font-mono text-sm">tools_and_technologies</span>
        </div>
        <h2 className="text-3xl font-semibold text-stone-900 mb-6">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setTechFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${techFilter === "all"
              ? "bg-amber-600 text-white"
              : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
          >
            All
          </button>
          {techStackConfig.categories.map((category) => (
            <button
              key={category}
              onClick={() => setTechFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${techFilter === category
                ? "bg-amber-600 text-white"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
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
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
      >
        {filteredTechs.map((tech, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-3 rounded-lg bg-white shadow-sm border hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                {<tech.icon className="w-4 h-4 text-stone-800" />}
              </div>
              <span className="font-medium text-stone-800 truncate">{tech.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}