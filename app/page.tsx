"use client";

import { motion } from "framer-motion";
import { ChevronRight, ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

      <main className="relative z-10 min-h-screen pt-12 md:pt-20 pb-10 flex flex-col">
        <div className="max-w-4xl mx-auto w-full px-5 md:px-8 flex-1 flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl w-full space-y-10 md:space-y-14"
            >
              {/* Main headline and intro with image */}
              <div>
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                  <div className="flex-1">
                    <div className="font-mono text-sm text-blue-500 mb-2 md:mb-3">Hi, I'm Harry 👋</div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                      <div className="bg-clip-text text-blue-600">
                        Software Engineer
                      </div>
                      <div className="text-neutral-400 font-normal mt-1">
                        from the UK <span className="ml-1">🇬🇧</span>
                      </div>
                    </h2>


                    <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-5">
                      <Link
                        href="https://github.com/harrybaines"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-2.5 py-1.5 rounded-md bg-white border border-neutral-200 text-neutral-700 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"
                      >
                        <Github size={14} className="mr-1" />
                        <span className="font-mono text-xs">Github</span>
                      </Link>

                      <Link
                        href="https://twitter.com/harryiscoding"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-2.5 py-1.5 rounded-md bg-white border border-neutral-200 text-neutral-700 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"
                      >
                        <Twitter size={14} className="mr-1" />
                        <span className="font-mono text-xs">Twitter</span>
                      </Link>

                      <Link
                        href="https://linkedin.com/in/harryb0905"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-2.5 py-1.5 rounded-md bg-white border border-neutral-200 text-neutral-700 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"
                      >
                        <Linkedin size={14} className="mr-1" />
                        <span className="font-mono text-xs">LinkedIn</span>
                      </Link>

                      <Link
                        href="mailto:harryb0905@googlemail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-2.5 py-1.5 rounded-md bg-white border border-neutral-200 text-neutral-700 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"
                      >
                        <Mail size={14} className="mr-1" />
                        <span className="font-mono text-xs">Email</span>
                      </Link>
                    </div>
                  </div>

                  <div className="w-28 h-28 md:w-40 md:h-40 rounded-lg overflow-hidden border border-neutral-200 shadow-sm relative group flex-shrink-0">
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src="/images/profile.jpg"
                      alt="Harry Baines"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full transition-all"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* About section with code-inspired container */}
              <div className="relative rounded-xl border border-neutral-200 bg-white p-4 md:p-6 shadow-sm">
                <div className="absolute -top-2.5 left-4 px-2 bg-white font-mono text-xs text-neutral-400">
                  about.tsx
                </div>

                <p className="text-neutral-700 leading-relaxed text-base">
                  Hiya! I'm Harry, a developer from the UK. I build web apps, AI integrations, dev tools and automations. I'm the founder of{" "}
                  <Link href="https://archtms.app" target="_blank" rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium">
                    archtms
                  </Link>.
                  Nowadays, I mainly code in TypeScript, Go and Python.
                  When I'm not coding, I enjoy hybrid training, playing chess, drinking coffee and watching LFC.
                  Feel free to check out my{" "}
                  <Link href="https://wwoi1vvxbb.ufs.sh/f/0PyPE3K0Z8cs0kY19aK0Z8csDMV7O5NnFXCRgKvSGA3t42Tq" target="_blank" rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium ml-1">
                    CV <ExternalLink size={12} className="ml-1" />
                  </Link> or ping me an email for a chat! 🤙
                </p>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="flex-1 text-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center group text-sm"
                >
                  Ask AI About Me
                  <ChevronRight size={14} className="ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/blog"
                  className="flex-1 text-center px-5 py-2.5 border border-neutral-200 bg-white text-neutral-800 font-medium rounded-lg hover:bg-neutral-50 shadow-sm transition-colors text-sm"
                >
                  Read My Blog
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}