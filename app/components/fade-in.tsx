"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Animate on mount instead of when scrolled into view. */
  immediate?: boolean;
};

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function FadeIn({ children, delay = 0, y = 16, className, immediate }: FadeInProps) {
  const target = { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(4px)" }}
      {...(immediate
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, margin: "0px 0px -40px 0px" } })}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
