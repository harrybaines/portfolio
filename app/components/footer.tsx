"use client";

import { motion } from "framer-motion";

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

export default function Footer() {
  return (
    <motion.div
      custom={5}
      initial="hidden"
      animate="visible"
      variants={fadeInSection}
      className="flex items-center justify-center py-20 px-6 mt-20 text-center"
    >
      <p className="text-sm text-zinc-400">
        Handcrafted with ❤️ by Harry &copy; 2025, with coffee and a sprinkle of Claude 👨‍💻
      </p>
    </motion.div>
  );
}