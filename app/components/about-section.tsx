"use client";

import SectionWrapper from "@/app/components/section-wrapper";
import { experienceConfig, profileConfig } from "@/config";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const writings = experienceConfig.writings;
  return (
    <SectionWrapper bgColor="bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-amber-600 mb-2">
            <Code size={18} strokeWidth={1.5} />
            <span className="font-mono text-sm">about.md</span>
          </div>
          <h2 className="text-3xl font-semibold text-stone-900">
            About Me
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-grow md:w-4/5">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-stone-700 leading-relaxed">
                Hiya! I&apos;m a software engineer from the <span className="inline-flex items-center">🇬🇧 UK</span>.
                Nowadays I&apos;m building full-stack apps, automations, APIs and developer tools.
                I&apos;m the founder of <span className="text-amber-700">archtms</span>, a complete architecture practice management system,
                which I built and sold to a large architecture company.
              </p>

              <p className="text-lg text-stone-700 leading-relaxed">
                I&apos;m proficient in <span className="text-amber-700">TypeScript</span>, <span className="text-amber-700">Go</span> and <span className="text-amber-700">Python</span>, and I&apos;m learning <span className="text-amber-700">Rust</span> to build performant applications.
                My go-to stack is PERN, Django, Next.js, or Go depending on the project. I&apos;m comfortable with any kind of database (SQL/NoSQL). I love hacking around in the terminal using Neovim and Warp.
              </p>

              <p className="text-lg text-stone-700 leading-relaxed">
                I&apos;m currently exploring developer tools and <span className="text-amber-700">Vercel&apos;s AI SDK</span> to build AI-powered applications.
                I also enjoy contributing to OS projects, playing with AI tools and endlessly configuring my dev environment 😄. Outside of work I enjoy hybrid training, watching LFC, and playing chess.
              </p>

              {writings && writings.length > 0 && (
                <p className="text-lg text-stone-700 leading-relaxed">
                  <span className="inline-flex items-center gap-1 text-amber-700 font-medium">
                    <span>✨</span> Latest post:
                  </span>{" "}
                  <Link href={writings[0].url} className="text-amber-700 hover:text-amber-900 underline decoration-amber-200 decoration-2 underline-offset-2 font-medium transition-colors">
                    {writings[0].title}
                  </Link>
                </p>
              )}

              <div className="flex pt-2">
                <a
                  href="/about"
                  className="px-5 py-2.5 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition-colors inline-flex items-center gap-2 font-medium"
                >
                  Read more
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="md:w-2/5 ml-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-md aspect-square bg-gradient-to-tr from-amber-700 to-amber-400 w-full max-w-[420px] mx-auto">
              <Image
                src="/images/whale.JPG"
                alt={profileConfig.name}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}