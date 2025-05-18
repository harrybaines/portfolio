"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-blue-50/50 rounded-xl p-6 md:p-8 lg:p-12 mt-4 md:mt-8"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Left side - headline */}
        <div className="flex-1 self-start">
          <div className="text-sm md:text-base text-neutral-500 mb-4">Software Engineer from the UK 👨‍💻</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-blue-600 mb-6">
            Hi, I'm Harry 👋
          </h1>

          <p className="mb-6 text-neutral-600 leading-relaxed max-w-xl">
            Generalist software engineer building full-stack apps, dev tools, AI tools, and contributing to OS.
            I love hacking around in the terminal and learning new stuff.
          </p>

          {/* Social links moved inside hero under description */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="https://github.com/harrybaines"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-neutral-200 shadow-sm hover:border-blue-200 text-neutral-700 hover:text-blue-600 transition-colors"
            >
              <Github size={15} />
              <span className="font-medium text-xs">Github</span>
            </Link>

            <Link
              href="https://twitter.com/harryiscoding"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-neutral-200 shadow-sm hover:border-blue-200 text-neutral-700 hover:text-blue-600 transition-colors"
            >
              <Twitter size={15} />
              <span className="font-medium text-xs">Twitter</span>
            </Link>

            <Link
              href="https://linkedin.com/in/harryb0905"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-neutral-200 shadow-sm hover:border-blue-200 text-neutral-700 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={15} />
              <span className="font-medium text-xs">LinkedIn</span>
            </Link>

            <Link
              href="mailto:harryb0905@googlemail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-neutral-200 shadow-sm hover:border-blue-200 text-neutral-700 hover:text-blue-600 transition-colors"
            >
              <Mail size={15} />
              <span className="font-medium text-xs">Email</span>
            </Link>
          </div>
        </div>

        {/* Right side - profile image */}
        <div className="hidden md:block w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg overflow-hidden relative group flex-shrink-0">
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src="/images/me.jpeg"
            alt="Harry Baines"
            width={180}
            height={180}
            className="object-cover w-full h-full transition-all"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}