"use client";

import { profileConfig } from "@/config";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./social-links";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

const profileImageAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      duration: 0.8
    }
  },
};

const staggerItems = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemFade = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export default function AboutHero() {
  return (
    <div className="text-zinc-300">
      {/* Warm, cozy top banner */}
      <div className="pt-32 pb-16 border-b border-zinc-800/40 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-col gap-10">
            {/* Back navigation */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-500 transition-all text-sm w-fit group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to home</span>
            </Link>

            {/* Warm, cozy header */}
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
              <motion.div
                variants={profileImageAnimation}
                initial="hidden"
                animate="visible"
                className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden flex-shrink-0 shadow-xl shadow-amber-900/20"
              >
                <Image
                  src={profileConfig.avatar}
                  alt={profileConfig.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 shadow-inner ring-1 ring-inset ring-white/10"></div>
              </motion.div>

              <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl font-bold text-white font-sans"
                >
                  Software engineer from the UK <span className="text-amber-500">🇬🇧</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-zinc-400 text-lg leading-relaxed w-full font-normal"
                >
                  I build web apps, APIs and dev tooling during the day, and tinker with OS projects at night.

                  I'm currently exploring Vercel's AI SDK to build AI applications. I also enjoy contributing to OS projects and endlessly configuring my dev environment 😄.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-zinc-400 text-lg leading-relaxed w-full md:pr-6 font-normal"
                >
                  Outside of work I enjoy hybrid training, watching LFC, and playing chess.

                  I'm always open to new opportunities, collaborations, or a chat over a coffee! ☕
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-2"
                >
                  <SocialLinks className="gap-5 justify-center md:justify-start" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Enhanced */}
      <div className="w-full max-w-4xl mx-auto py-12">
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInSection}
        >
          <h3 className="text-sm uppercase tracking-wider mb-6 flex items-center text-zinc-500 font-medium">
            Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-sm p-5 hover:border-amber-600/30 transition-colors duration-300">
              <div className="text-2xl font-mono font-bold text-amber-500">{profileConfig.stats.yearsExperience}</div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mt-1">Years<br />experience</div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 rounded-sm p-5 hover:border-amber-600/30 transition-colors duration-300">
              <div className="text-2xl font-mono font-bold text-amber-500">{profileConfig.stats.typingSpeed}</div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mt-1">Typing<br />speed</div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 rounded-sm p-5 hover:border-amber-600/30 transition-colors duration-300">
              <div className="text-2xl font-mono font-bold text-amber-500">{profileConfig.stats.githubContributions}</div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mt-1">GitHub<br />contributions</div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 rounded-sm p-5 hover:border-amber-600/30 transition-colors duration-300">
              <div className="text-2xl font-mono font-bold text-amber-500">{profileConfig.stats.mechanicalKeyboards}</div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mt-1">Mechanical<br />keyboards</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}