"use client";

import { profileConfig } from "@/config";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInSection = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

export default function CollaborationSection() {
  return (
    <motion.div
      custom={6}
      initial="hidden"
      animate="visible"
      variants={fadeInSection}
      className="py-16 px-8 bg-zinc-900/30 border border-zinc-800 rounded-sm text-center"
    >
      <h3 className="text-xl font-medium text-white mb-4">Let's build something together!</h3>
      <p className="text-zinc-400 text-sm md:text-md max-w-lg mx-auto mb-6">
        Have an interesting project in mind? Let's chat!
      </p>
      <Link
        href={`mailto:${profileConfig.email}`}
        className="py-2 px-6 border border-amber-900/50 text-amber-500 hover:bg-amber-500/10 transition-colors inline-block text-sm md:text-md"
      >
        Get in touch
      </Link>
    </motion.div>
  );
}