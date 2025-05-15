"use client";

import { motion } from "framer-motion";
import { ChevronRight, Code, ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SocialLink from "./components/SocialLink";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 overflow-hidden">
      {/* Subtle code pattern background */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Header with navigation */}
      <header className="fixed top-0 left-0 right-0 z-20 py-4 px-6 md:px-8 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-sm text-neutral-500 flex items-center"
          >
            <Code size={16} className="mr-2 text-blue-500" />
            <span>harrybaines</span>
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

      {mounted && (
        <main className="relative z-10 min-h-screen pt-14 md:pt-24 pb-12 flex flex-col">
          <div className="max-w-5xl mx-auto w-full px-6 md:px-10 flex-1 flex flex-col justify-center">
            <div className="flex flex-col items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl w-full space-y-12 md:space-y-16"
              >
                {/* Main headline and intro with image */}
                <div>
                  <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">
                    <div className="flex-1">
                      <div className="font-mono text-md text-blue-500 mb-3 md:mb-4">Hi, I'm Harry 👋</div>

                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        <div className="bg-clip-text text-blue-600">
                          Software Engineer
                        </div>
                        <div className="text-neutral-400 font-normal mt-1 md:mt-2">
                          from the UK <span className="ml-1">🇬🇧</span>
                        </div>
                      </h2>


                      <div className="flex flex-wrap items-center gap-3 mt-5 md:mt-7">
                        <Link
                          href="https://github.com/harrybaines"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3 py-2 rounded-md bg-white border border-neutral-200 text-neutral-700 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"
                        >
                          <Github size={16} className="mr-1.5" />
                          <span className="font-mono text-sm">Github</span>
                        </Link>

                        <Link
                          href="https://twitter.com/harryiscoding"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3 py-2 rounded-md bg-white border border-neutral-200 text-neutral-700 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"
                        >
                          <Twitter size={16} className="mr-1.5" />
                          <span className="font-mono text-sm">Twitter</span>
                        </Link>

                        <Link
                          href="https://linkedin.com/in/harryb0905"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3 py-2 rounded-md bg-white border border-neutral-200 text-neutral-700 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"
                        >
                          <Linkedin size={16} className="mr-1.5" />
                          <span className="font-mono text-sm">LinkedIn</span>
                        </Link>

                        <Link
                          href="mailto:harryb0905@googlemail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3 py-2 rounded-md bg-white border border-neutral-200 text-neutral-700 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"
                        >
                          <Mail size={16} className="mr-1.5" />
                          <span className="font-mono text-sm">Email</span>
                        </Link>
                      </div>
                    </div>

                    <div className="w-36 h-36 md:w-52 md:h-52 rounded-lg overflow-hidden border border-neutral-200 shadow-sm relative group flex-shrink-0">
                      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Image
                        src="/images/me.jpeg"
                        alt="Harry Baines"
                        width={208}
                        height={208}
                        className="object-cover w-full h-full transition-all"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* About section with code-inspired container */}
                <div className="relative rounded-xl border border-neutral-200 bg-white p-5 md:p-7 shadow-sm">
                  <div className="absolute -top-2.5 left-4 px-2 bg-white font-mono text-xs text-neutral-400">
                    about.tsx
                  </div>

                  <p className="text-neutral-700 leading-relaxed text-lg">
                    Hiya! I'm Harry, a developer from the UK. I build web apps, AI integrations and automations. I'm the founder of{" "}
                    <Link href="https://archtms.app" target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium">
                      archtms
                    </Link>, a complete management system for architecture firms.
                    Nowadays, I mainly code in TypeScript, Go and Python.
                    I'm currently exploring AI integration, developer tools, and building my own apps.
                    When I'm not coding, I enjoy hybrid training, drinking coffee and watching LFC.
                    Feel free to check out my{" "}
                    <Link href="https://wwoi1vvxbb.ufs.sh/f/0PyPE3K0Z8csFYf74iQetTgjU2srHSFxLoADOE8u4KRmazk1" target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium ml-1">
                      CV <ExternalLink size={14} className="ml-1" />
                    </Link> or ping me an email for a chat! 🤙
                  </p>
                </div>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/about"
                    className="flex-1 text-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center group"
                  >
                    Ask AI About Me
                    <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="/blog"
                    className="flex-1 text-center px-6 py-3 border border-neutral-200 bg-white text-neutral-800 font-medium rounded-lg hover:bg-neutral-50 shadow-sm transition-colors"
                  >
                    Read My Blog
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}