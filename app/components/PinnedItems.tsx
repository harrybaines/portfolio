"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface PinnedItem {
  title: string;
  description: string;
  url: string;
}

const pinnedItems: PinnedItem[] = [
  {
    title: "Next.js Starter",
    description: "Production-ready template with TypeScript & Tailwind",
    url: "https://github.com/harrybaines",
  },
  {
    title: "Wallpaper Pack",
    description: "Minimal wallpapers for developers",
    url: "#",
  },
  {
    title: "Dev Tools",
    description: "Curated development resources",
    url: "#",
  },
  {
    title: "UI Components",
    description: "React components with Tailwind",
    url: "#",
  }
];

export default function PinnedItems() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-2xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-3xl font-heading font-light text-neutral-900 mb-3">
            Featured Work
          </h2>
          <p className="text-neutral-600">
            Tools and resources for developers
          </p>
        </motion.div>

        <div className="space-y-6">
          {pinnedItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-neutral-900 hover:text-neutral-600 transition-colors font-mono text-sm underline underline-offset-4 decoration-1">
                        {item.title}
                      </span>
                      <ExternalLink className="text-neutral-400 group-hover:text-neutral-600 transition-colors" size={14} />
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-8">
          <Link
            href="https://github.com/harrybaines"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors font-mono text-sm underline underline-offset-4 decoration-1"
          >
            View more on GitHub
            <ExternalLink size={14} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}