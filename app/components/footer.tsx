"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.3,
            duration: 0.8,
            ease: [0.17, 0.67, 0.83, 0.67]
          }
        }
      }}
      className="relative border-t border-neutral-200/60 dark:border-neutral-800/60 mt-24"
    >
      <div className="max-w-3xl w-full mx-auto px-8">
        <div className="py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
            {/* Left side - Name and tagline */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                Harry Baines
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">
                Building digital experiences and sharing knowledge.
              </p>
            </div>

            {/* Right side - Links and location */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-6">
                {[
                  { name: "Email", href: "mailto:harryb0905@googlemail.com" },
                  { name: "GitHub", href: "https://github.com/harrybaines" },
                  { name: "LinkedIn", href: "https://linkedin.com/in/harryb0905" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="mt-3 md:mt-0 text-sm text-neutral-500 dark:text-neutral-400 text-left md:text-right self-start md:self-end">
                📍 UK
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}