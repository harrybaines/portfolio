"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeInSection = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

export default function HeroPinned() {
  // Get pinned projects
  const pinnedProjects: any[] = [];
  // Type assertion to avoid TS errors
  const keyProjects = siteConfig.keyProjects as any[];

  // Manually iterate and check for pinned status
  for (let i = 0; i < keyProjects.length; i++) {
    if (keyProjects[i].pinned) {
      pinnedProjects.push(keyProjects[i]);
    }
  }

  return (
    <motion.div
      custom={3}
      initial="hidden"
      animate="visible"
      variants={fadeInSection}
    >
      <h3 className="text-sm uppercase tracking-wider mb-4 flex items-center text-zinc-400 font-medium">
        Pinned
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pinnedProjects.map((project: any, index: number) => (
          <Link
            key={index}
            href={project.url}
            className="bg-zinc-900/50 border border-zinc-800 rounded-sm p-4 flex flex-col hover:border-amber-600/30 transition-colors group"
          >
            <div className="relative w-full aspect-video overflow-hidden rounded bg-zinc-800/50 mb-2">
              {project.imagePath ? (
                <Image
                  src={project.imagePath}
                  alt={`${project.title} Preview`}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 group-hover:from-zinc-700 group-hover:to-zinc-800 transition-all">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center mb-1 group-hover:bg-amber-600/20 transition-colors">
                      <ImageIcon className="w-5 h-5 text-zinc-400 group-hover:text-amber-500/80 transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 group-hover:text-zinc-400 transition-colors">Preview</span>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-3">
              <h4 className="text-base text-zinc-200 font-medium">{project.title}</h4>
              <p className="text-sm text-zinc-400 mt-1">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}