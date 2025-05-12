"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SocialLink from "./components/SocialLink";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#fefefe] text-neutral-800">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 z-0 opacity-[0.01]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* Header with navigation */}
      <header className="absolute top-0 left-0 right-0 z-20 py-5 px-6 md:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-sm text-neutral-500"
          >
            <span className="text-blue-500">~</span>/harrybaines
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center space-x-3"
          >
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
          </motion.div>
        </div>
      </header>

      <main className="relative z-10 min-h-screen flex flex-col justify-center py-16">
        <div className="max-w-4xl mx-auto w-full px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Content column */}
            <div className="order-2 md:order-1 md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="space-y-3">
                  <div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="text-neutral-500 text-md mb-3 mt-5"
                    >
                      Hi, I'm Harry 👋
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="text-3xl md:text-4xl font-bold leading-tight"
                    >
                      I build quality software.
                    </motion.h1>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-neutral-600 space-y-5"
                >
                  <p className="leading-relaxed">
                    Software Engineer with 6 years of experience based in the UK 🇬🇧. I specialize in building web apps, AI integrations and automations.
                    Founder of <Link href="https://archtms.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                      archtms
                      <ExternalLink size={12} className="ml-1" />
                    </Link>.
                  </p>

                  <div className="font-mono text-sm border border-neutral-200 p-4 rounded-md bg-white shadow-sm max-w-md">
                    <div className="text-neutral-400 mb-3"># Technologies I work with</div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-xs border border-blue-100">TypeScript</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-xs border border-blue-100">Python</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-xs border border-blue-100">Next.js</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-xs border border-blue-100">Go</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href="/about"
                    className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    Ask AI About Me
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-block px-4 py-2 border border-neutral-300 bg-white text-neutral-700 text-sm font-medium rounded hover:bg-neutral-50 transition-colors shadow-sm"
                  >
                    Blog
                  </Link>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="text-neutral-500 text-sm"
                >
                  Feel free to reach out for collaborations or just a chat! Contact me <a href="mailto:harryb0905@googlemail.com" className="text-blue-600 hover:text-blue-800">here</a>.
                </motion.p>
              </motion.div>
            </div>

            {/* Image column */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 md:order-2 flex justify-center md:justify-end"
            >
              <div className="w-40 h-40 md:w-52 md:h-52 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-md relative">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}