"use client";

import { getYearsOfExperience } from "@/lib/utils";
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
      className="pt-0 md:pt-16 pb-12 md:pb-20"
    >
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 lg:gap-20 items-center">
        {/* Left side - profile image (appears below content on mobile) */}
        <div className="w-[60%] sm:w-1/2 md:w-1/3 lg:w-2/6 mx-auto md:mx-0 mt-8 md:mt-0">
          <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/whale.jpg"
              alt="Harry Baines"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right side - content (appears first on mobile) */}
        <div className="w-full md:w-2/3 lg:w-4/6 mt-0 md:mt-4">
          <div className="space-y-7 md:space-y-6">
            {/* Intro */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-neutral-500 font-mono text-sm md:mb-2">Hi, I'm Harry 👋</p>
              <h1 className="font-mono text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-4 md:mb-5 flex items-center">
                Software Engineer
                <span className="inline-block w-[3px] h-[1em] bg-neutral-900 ml-1.5 cursor-blink"></span>
              </h1>
            </div>

            {/* About description */}
            <div className="text-neutral-600 leading-relaxed text-sm sm:text-base max-w-xl">
              <p>
                Developer from the 🇬🇧 UK with {getYearsOfExperience()} years experience.
                I build full-stack apps, dev tools, AI integrations, and contribute to OS.
                Nowadays, I mainly code in TypeScript, Python and Go.
                I'm the founder of{" "}
                <Link href="https://archtms.app" target="_blank" rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium">
                  archtms
                </Link>.
                When I'm not coding, I enjoy hybrid training, playing chess, drinking coffee and watching LFC.
              </p>
            </div>

            {/* Connect with me */}
            <div className="pt-1">
              <h3 className="font-mono text-sm text-neutral-500 mb-3 md:mb-4">Connect with me</h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="https://github.com/harrybaines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 transition-colors text-xs sm:text-sm"
                >
                  <Github size={16} />
                  <span className="font-medium">Github</span>
                </Link>

                <Link
                  href="https://twitter.com/harryiscoding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 transition-colors text-xs sm:text-sm"
                >
                  <Twitter size={16} />
                  <span className="font-medium">Twitter</span>
                </Link>

                <Link
                  href="https://linkedin.com/in/harryb0905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 transition-colors text-xs sm:text-sm"
                >
                  <Linkedin size={16} />
                  <span className="font-medium">LinkedIn</span>
                </Link>

                <Link
                  href="mailto:harryb0905@googlemail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 transition-colors text-xs sm:text-sm"
                >
                  <Mail size={16} />
                  <span className="font-medium">Email</span>
                </Link>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2 md:pt-3">
              <Link
                href="/about"
                className="flex-1 text-center px-3 sm:px-4 py-2 sm:py-2.5 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center text-sm"
              >
                🤖 Ask AI About Me
              </Link>
              <Link
                href="/growth-map"
                className="flex-1 text-center px-3 sm:px-4 py-2 sm:py-2.5 border border-neutral-200 bg-white text-neutral-900 font-medium rounded-lg hover:bg-neutral-50 hover:border-neutral-300 transition-colors text-sm"
              >
                🗺️ Growth Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}