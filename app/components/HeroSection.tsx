"use client";

import { getYearsOfExperience } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
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
    <div className="lg:min-h-[50vh] lg:flex lg:items-center py-8 md:py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="w-full mx-auto"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Content */}
          <motion.div variants={fadeIn} className="lg:col-span-7 space-y-7">
            {/* Terminal-style intro */}
            <div className="space-y-4">

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-lg md:text-xl text-neutral-600 mt-5">
                  <span className="font-mono">Software Engineer 👨‍💻</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900">
                  Hi, I'm Harry 👋
                </h1>
              </div>
            </div>

            {/* About */}
            <div className="space-y-6 max-w-xl">
              <p className="text-lg md:text-xl leading-relaxed text-neutral-700">
                Developer from the UK 🇬🇧 with {getYearsOfExperience()} years experience. I build full-stack apps, dev tools and contribute to OS.
                Feel free to check out my GitHub or ping me for a chat!
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-700 transition-colors text-sm border border-neutral-200"
              >
                Ask AI About Me
              </Link>
              <Link
                href="mailto:harryb0905@googlemail.com"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-neutral-900 font-medium rounded-lg hover:bg-neutral-100 transition-colors text-sm border border-neutral-200"
              >
                Contact Me
              </Link>
            </div>

            {/* Connect with me */}
            <div className="pt-2">
              <h3 className="font-mono text-sm text-neutral-500 mb-4 uppercase tracking-wider">Connect with me</h3>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://github.com/harrybaines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition-colors text-sm"
                >
                  <Github size={16} />
                  <span className="font-medium">GitHub</span>
                </Link>
                <Link
                  href="https://twitter.com/harryiscoding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition-colors text-sm"
                >
                  <Twitter size={16} />
                  <span className="font-medium">Twitter</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/harryb0905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition-colors text-sm"
                >
                  <Linkedin size={16} />
                  <span className="font-medium">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:harryb0905@googlemail.com"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span className="font-medium">Email</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={fadeIn}
            className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-96 lg:h-[32rem]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-200 shadow-xl">
                <Image
                  src="/images/whale.jpg"
                  alt="Harry Baines"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}