"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ChatUI from "../components/ChatUI";

export default function AboutPage() {
  const userMessage = "Tell me more about Harry.";
  const aiResponse = `
Harry is a UK-based software engineer with 6 years of experience specializing in web applications, APIs, and developer tools. He's the founder of archtms, an architecture practice management system he built and successfully sold to a large architecture company.

His technical expertise spans TypeScript, Go, Python, and various full-stack frameworks including PERN, Django, and Next.js. Harry works with both SQL and NoSQL databases and is currently exploring Rust for performance-critical applications. His development environment includes Neovim and Warp, reflecting his love for terminal-based workflows and efficiency.

Harry worked part-time at Cassidy and Ashton Architects for 2 years building version 1 of the archtms system during his time at University. He then went on to work as a Software Engineer/Data Scientist at Yordas Digital for 2 years. He then went full time at Cassidy and Ashton for 2 years building a version 2 of the archtms system. His academic background includes an MSc in Data Science and a BSc in Computer Science from Lancaster University.

He's actively exploring Vercel's AI SDK and loves contributing to open-source projects. Beyond coding, Harry is a hybrid athlete, Liverpool FC supporter, and chess player. With stats including 6K GitHub contributions and a typing speed of 110 WPM, he combines technical skill with practical experience. Harry is always open to new opportunities, collaborations, or just chatting over coffee.
  `.trim();

  return (
    <div className="w-full min-h-screen relative">

      {/* Content */}
      <div className="relative z-10 w-full px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              <span>Back home</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <ChatUI
              userMessage={userMessage}
              aiResponse={aiResponse}
              userImage="/images/me.jpeg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}