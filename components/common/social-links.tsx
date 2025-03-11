"use client";

import { socialLinks } from "@/data/social-links";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

type SocialLinksProps = {
  variant?: "icon" | "button" | "text";
  className?: string;
};

export function SocialLinks({ variant = "icon", className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((link, i) => {
        const Icon = link.icon;

        if (variant === "icon") {
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.2 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-card hover:bg-primary/10 border border-border transition-colors"
                aria-label={link.label}
              >
                <Icon className="w-4 h-4 text-muted-foreground" />
              </Link>
            </motion.div>
          );
        }

        if (variant === "button") {
          return (
            <motion.div
              key={i}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.2 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-card hover:bg-primary/10 border border-border transition-colors"
                aria-label={link.label}
              >
                <Icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{link.label}</span>
              </Link>
            </motion.div>
          );
        }

        return (
          <motion.div
            key={i}
            whileHover={{ x: 3 }}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.2 }}
          >
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}