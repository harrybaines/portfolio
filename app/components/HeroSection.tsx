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
      className="pt-8 md:pt-16 pb-12 md:pb-20"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20 items-start">
        {/* Left side - profile image */}
        <div className="w-[60%] sm:w-1/2 md:w-1/3 lg:w-2/5 mx-auto md:mx-0">
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

        {/* Right side - content */}
        <div className="w-full md:w-2/3 lg:w-3/5 mt-2 md:mt-0">
          <div className="space-y-6 md:space-y-8">
            {/* Intro */}
            <div>
              <p className="text-neutral-500 font-mono text-sm mb-3">Hi, I'm Harry 👋</p>
              <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-3 md:mb-4 flex items-center">
                Software Engineer
                <span className="inline-block w-[3px] h-[1em] bg-neutral-900 ml-1 cursor-blink"></span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 max-w-md">
                Building full-stack apps, dev tools, AI integrations, and contributing to open source.
              </p>
            </div>

            {/* About description */}
            <div className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              <p>
                Nowadays, I mainly code in TypeScript, Go and Python.
                I'm the founder of{" "}
                <Link href="https://archtms.app" target="_blank" rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium">
                  archtms
                </Link>.
                When I'm not coding, I enjoy hybrid training, playing chess, drinking coffee and watching LFC.
              </p>
            </div>

            {/* Connect with me */}
            <div>
              <h3 className="font-mono text-sm text-neutral-500 mb-2 md:mb-3">Connect with me</h3>
              <div className="flex flex-wrap gap-2">
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
            <div className="flex flex-col sm:flex-row gap-3 pt-1 md:pt-2">
              <Link
                href="/about"
                className="flex-1 text-center px-4 sm:px-5 py-2.5 sm:py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center text-sm"
              >
                🤖 Ask AI About Me
              </Link>
              <Link
                href="/growth-map"
                className="flex-1 text-center px-4 sm:px-5 py-2.5 sm:py-3 border border-neutral-200 bg-white text-neutral-900 font-medium rounded-lg hover:bg-neutral-50 hover:border-neutral-300 transition-colors text-sm"
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