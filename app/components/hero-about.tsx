"use client";

import { profileConfig } from "@/config";
import { motion } from "framer-motion";
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

export default function HeroAbout() {
  return (
    <motion.div
      custom={0}
      initial="hidden"
      animate="visible"
      variants={fadeInSection}
      className="font-sans bg-zinc-900/80 border border-zinc-800 rounded-md w-full p-7"
    >
      <div className="space-y-8">
        <div>
          <h3 className="text-base font-medium text-zinc-300 mb-3">About</h3>
          <p className="text-md leading-relaxed text-zinc-300">
            Nowadays I'm building full-stack apps, automations, APIs and developer tools. I'm the founder of archtms, a complete architecture practice management system, which I built and sold to a large architecture company.
          </p>
          <p className="text-md leading-relaxed text-zinc-300 mt-3">
            I'm proficient in TypeScript, Go and Python, and I'm learning Rust to build performant applications. My go-to stack is PERN, Django, Next.js, or Go depending on the project. I'm comfortable with any kind of database (SQL/NoSQL). I love hacking around in the terminal using Neovim and Warp.
          </p>
          <p className="text-md leading-relaxed text-zinc-300 mt-3">
            Feel free to read more <Link href="/about" className="text-amber-500 hover:underline">about me</Link>!
          </p>
        </div>

        <div>
          <h3 className="text-base font-medium text-zinc-300 mb-3">Currently</h3>
          <div className="flex gap-6">
            <div className="flex-1">
              <ul className="space-y-2">
                {profileConfig.currently.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-base flex-shrink-0">{item.emoji}</span>
                    <span className="text-zinc-200 text-sm md:text-md leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-start mt-2">
          <div className="inline-flex items-center py-1.5 px-3 bg-zinc-800/50 rounded-md border border-zinc-700/30">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            <span className="text-green-400 text-xs font-medium">Available for opportunities</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}