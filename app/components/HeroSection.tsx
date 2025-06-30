"use client";

import { getYearsOfExperience } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// YT, WPP
const pinnedItems = [
  {
    title: "archtms",
    description: "Practice management system for architecture firms",
    url: "https://www.archtms.app/",
    category: "pinned"
  },
  {
    title: "brewkit",
    description: "Modern Next.js starter kit",
    url: "https://github.com/harrybaines/brewkit",
    category: "pinned"
  },
  {
    title: "portfolio",
    description: "Personal portfolio site",
    url: "https://github.com/harrybaines/portfolio",
    category: "pinned"
  },
  {
    title: "dotfiles",
    description: "My dev setup config",
    url: "https://github.com/harrybaines/dotfiles",
    category: "pinned"
  },
  {
    title: "ai-avatar-generator",
    description: "Dreambooth Stable Diffusion model trained on my face",
    url: "https://github.com/harrybaines/ai-avatar-generator",
    category: "pinned"
  },
  {
    title: "torchgpt",
    description: "PyTorch code generator",
    url: "https://github.com/harrybaines/torchgpt",
    category: "pinned"
  },
  {
    title: "YT-to-text",
    description: "Transcribe a YT video to text using OpenAI Whisper",
    url: "https://github.com/harrybaines/gradio-whisper",
    category: "pinned"
  },
  {
    title: "Quark",
    description: "Programming language for smart contracts built with Go",
    url: "https://github.com/harrybaines/Quark",
    category: "pinned"
  },

  // Contributions
  {
    title: "tambo",
    description: "React package for adding generative components to your AI assistant",
    url: "https://github.com/tambo-ai/tambo",
    category: "contributed"
  },
  {
    title: "Ivy",
    description: "ML framework transpiler and unified framework",
    url: "https://github.com/unifyai/ivy",
    category: "contributed"
  },
  {
    title: "Buildspace Projects",
    description: "AI avatar tutorial project on Buildspace",
    url: "https://github.com/buildspace/buildspace-projects",
    category: "contributed"
  }
];


const filterCategories = [
  { id: "pinned", label: "Pinned" },
  { id: "projects", label: "Projects" }
];

export default function HeroSection() {
  const [activeFilter, setActiveFilter] = useState("pinned");

  const filteredItems = pinnedItems.filter(item => item.category === activeFilter);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="py-16 md:py-32">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-3xl mx-auto"
      >
        <motion.div variants={fadeIn} className="mb-16">
          <div className="text-center space-y-6">

            <div className="relative w-28 h-28 mx-auto">
              <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800">
                <Image
                  src="/images/gorilla.jpeg"
                  alt="Harry Baines"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                Harry Baines
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg font-medium font-mono">
                Software Engineer
              </p>
            </div>

            <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed max-w-md mx-auto">
              Developer with {getYearsOfExperience()} yrs experience from the <strong>UK</strong> 🇬🇧. <br />
              Passionate about <strong>full-stack dev</strong>, <strong>AI</strong> and <strong>dev tooling</strong>.<br />
              Read more about me <Link
                href="/about"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline underline-offset-4 decoration-1"
              >
                here
              </Link> or <Link
                href="/about-ai"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline underline-offset-4 decoration-1"
              >
                ask AI
              </Link>!
            </p>

            {/* Navigation Links */}
            <div className="flex items-center justify-center gap-8 pt-2">
              <Link
                href="/about"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors text-sm underline underline-offset-4 decoration-1"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors text-sm underline underline-offset-4 decoration-1"
              >
                Writing
              </Link>
              <Link
                href="mailto:harryb0905@googlemail.com"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors text-sm underline underline-offset-4 decoration-1"
              >
                Contact
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-5 pt-4">
              <Link
                href="https://github.com/harrybaines"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/harryb0905/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://x.com/HarryIsCoding"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="mailto:harryb0905@googlemail.com"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
            </div>

            <div className="pt-8">
              <Image
                src="/images/desk-1.png"
                alt="Warm, cozy workspace with code and ambient lighting"
                width={500}
                height={220}
                className="rounded-xl shadow-lg w-lg h-auto border border-neutral-200 dark:border-neutral-700 mx-auto filter brightness-70"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        {/* <motion.div variants={fadeIn} className="mb-8">
          <div className="flex justify-center">
            <div className="inline-flex gap-1">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-3 py-1 text-sm font-medium transition-all relative ${activeFilter === category.id
                    ? "text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                    }`}
                >
                  {category.label}
                  {activeFilter === category.id && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-neutral-400 dark:bg-neutral-500"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div> */}

        {/* Pinned Items */}
        <motion.div variants={fadeIn} className="space-y-6">
          <div className="lg:mx-22">
            {filteredItems.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg p-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
              >
                <div className="flex items-center gap-1 font-semibold text-neutral-900 dark:text-neutral-200 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
                  {item.title}
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300" />
                </div>
                <p className="text-md text-neutral-600 dark:text-neutral-400 leading-relaxed mt-0.5">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="https://github.com/harrybaines"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors text-md underline underline-offset-4 decoration-1"
            >
              View all projects
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}