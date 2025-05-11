"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SocialLink from "./components/SocialLink";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center h-screen px-8">
        <div className="max-w-4xl w-full flex flex-col items-center">
          {/* Profile Image - Rotated with Animation */}
          <motion.div
            className="relative w-40 h-40 mb-16"
            initial={{
              opacity: 0,
              x: -20,
              y: 20,
              rotate: -5
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 1
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.5
            }}
          >
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center leading-tight">
              I build high quality software.
            </h1>
            <p className="mx-auto text-center text-gray-500 max-w-lg font-sans leading-normal text-md space-x-1">
              <span className="font-mono">Software Engineer</span>
              <span className="font-mono">⋅</span>
              <span className="font-mono">6 yrs experience</span>
              <span className="font-mono">⋅</span>
              <span className="font-mono whitespace-nowrap">UK 🇬🇧</span>
            </p>
            <p className="mx-auto text-center text-neutral-500 max-w-xl font-sans leading-8 text-lg">
              I build web apps, AI integrations and automations.
              I'm the founder of <Link href="https://archtms.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors">archtms</Link>.
              I mainly code in TypeScript, Go and Python.
              I enjoy hybrid training, drinking coffee and watching LFC.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Link
              href="/about"
              className="text-blue-500 hover:text-blue-600 transition-colors shadow-sm font-medium border border-gray-200 rounded-md px-4 py-2 hover:bg-gray-50"
            >
              Ask AI About Me
            </Link>
          </div>

          {/* Pinned Projects Grid */}
          {/* <div className="grid grid-cols-2 gap-3 w-full max-w-md mx-auto mt-12">
            <Link
              href="https://ai.resources"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-blue-500 hover:text-blue-600 transition-colors text-sm lowercase"
            >
              <span>ai.resources</span>
              <ArrowUpRight size={14} className="ml-1" />
            </Link>

            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-blue-500 hover:text-blue-600 transition-colors text-sm lowercase"
            >
              <span>dotfiles</span>
              <ArrowUpRight size={14} className="ml-1" />
            </Link>
          </div> */}

          {/* Social Links - Outline Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10 font-mono">
            <SocialLink
              href="https://github.com/harrybaines"
              label="GitHub"
              icon={Github}
            />

            <SocialLink
              href="https://twitter.com/harryiscoding"
              label="Twitter"
              icon={Twitter}
            />

            <SocialLink
              href="https://linkedin.com/in/harryb0905"
              label="LinkedIn"
              icon={Linkedin}
            />

            <SocialLink
              href="mailto:harryb0905@googlemail.com"
              label="Email"
              icon={Mail}
            />
          </div>
        </div>
      </div>
    </div>
  );
}