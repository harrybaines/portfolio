"use client";

import { getYearsOfExperience } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const pinnedItems = [
  {
    title: "Next.js Starter",
    description: "Production-ready template with TypeScript & Tailwind",
    url: "https://github.com/harrybaines",
    category: "projects"
  },
  {
    title: "Wallpaper Pack",
    description: "Minimal wallpapers for developers",
    url: "#",
    category: "misc"
  },
  {
    title: "Dev Tools",
    description: "Curated development resources",
    url: "#",
    category: "pinned"
  },
  {
    title: "UI Components",
    description: "React components with Tailwind",
    url: "#",
    category: "projects"
  },
  {
    title: "Reading List",
    description: "Technical books and articles I recommend",
    url: "#",
    category: "pinned"
  },
  {
    title: "Setup Guide",
    description: "My development environment configuration",
    url: "#",
    category: "misc"
  }
];

const filterCategories = [
  { id: "pinned", label: "Pinned" },
  { id: "projects", label: "Projects" },
  { id: "misc", label: "Misc" }
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
    <div className="py-16 md:py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-2xl mx-auto"
      >
        {/* Main Profile Card */}
        <motion.div variants={fadeIn} className="mb-16">
          <div className="text-center space-y-6">
            {/* Profile Image */}
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

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                Harry Baines
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm font-mono">
                Software Engineer
              </p>
            </div>

            {/* Description */}
            <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed max-w-lg mx-auto">
              Building digital experiences with {getYearsOfExperience()} years of expertise.
              Passionate about clean code and thoughtful design.
            </p>

            {/* Navigation Links */}
            <div className="flex items-center justify-center gap-8 pt-2">
              <Link
                href="/about-me"
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
                href="https://linkedin.com/in/harrybaines"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com/harrybaines"
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
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div variants={fadeIn} className="mb-8">
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
        </motion.div>

        {/* Pinned Items */}
        <motion.div variants={fadeIn} className="space-y-6">
          <div className="space-y-3">
            {filteredItems.map((item, index) => (
              <div key={index} className="group">
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors underline underline-offset-4 decoration-1"
                >
                  {item.title}
                  <ExternalLink className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors" size={14} />
                </Link>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="https://github.com/harrybaines"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors text-sm underline underline-offset-4 decoration-1"
            >
              View all projects
              <ExternalLink size={14} />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}