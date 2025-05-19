"use client";

import { motion } from "framer-motion";

const fadeInSection = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Footer() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInSection}
      className="flex items-center justify-center py-10 px-6 mt-12 text-center"
    >
      <p className="text-sm font-mono text-neutral-400">
        Handcrafted by Harry &copy; 2025, with a sprinkle of Claude 👨‍💻
      </p>
    </motion.div>
  );
}