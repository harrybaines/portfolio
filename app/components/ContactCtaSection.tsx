"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function ContactCtaSection() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-neutral-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          Want to work on a project together?
        </h2>
        <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
          I'm always open to collaborate on projects and explore new opportunities!
        </p>
        <Link
          href="mailto:harryb0905@googlemail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        >
          <Mail size={20} />
          Contact Me
        </Link>
      </motion.div>
    </div>
  );
}