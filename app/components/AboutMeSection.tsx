"use client";

import { motion } from "framer-motion";

export default function AboutMeSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const gridItems = [
    {
      title: "Tech Stack",
      emoji: "🚀",
      content: "Nowadays I mainly use Python, Go and TypeScript. For full-stack apps I use PERN, Next.js, FastAPI or a React frontend and Go backend. I tend to deploy with Docker on AWS, Fly or Railway. I enjoy the flexibility of working with different tech stacks depending on the project."
    },
    {
      title: "Current Focus",
      emoji: "📝",
      content: (
        <>
          I enjoy building full-stack web apps, creating dev tools, integrating AI into apps, and playing with terminals and shell scripts. I'm currently finalising{" "}
          <a
            href="https://archtms.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 transition-colors"
          >
            archtms
          </a>
          , a practice management system for architecture firms, and experimenting with OS dev tools.
        </>
      )
    },
    {
      title: "Learning",
      emoji: "👨‍💻",
      content: "Lifelong learner, always willing to learn new things and share what I learn on this blog. Helping and teaching others is a big part of my learning process. I'm currently learning advanced Go, Rust, and OS developer tools.",
    },
    {
      title: "Outside Work",
      emoji: "🏋️‍♀️",
      content: "I'm passionate about hybrid training, supporting LFC, playing chess, and drinking large amounts of coffee. I love working on side projects and learning new technologies outside of work."
    },
  ];

  return (
    <div className="w-full mx-auto space-y-20 my-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-800">
          About Me
        </h2>
      </motion.div>

      {/* Grid Items */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-16"
      >
        {gridItems.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeIn}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label={item.title}>
                  {item.emoji}
                </span>
                <h3 className="text-2xl font-bold text-neutral-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {item.content}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}