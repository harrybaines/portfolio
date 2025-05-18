"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full space-y-10 md:space-y-24"
    >
      {children}
    </motion.div>
  );
}