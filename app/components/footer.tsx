"use client";

import { motion } from "framer-motion";

const fadeInSection = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const linkVariants = {
  hover: {
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={fadeInSection}
      className="relative border-t border-neutral-200/60"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
            {/* Brand Section - Larger */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 tracking-tight">
                  Harry Baines
                </h3>
                <p className="lg:text-md text-neutral-600 leading-relaxed max-w-lg">
                  I build things and write a lot of code.
                  I talk about the things I learn on this site.
                  Website handcrafted with Next.js and Tailwind CSS.
                </p>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-neutral-600 font-medium">Available for new opportunities</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-medium text-neutral-900 uppercase tracking-wider">Connect</h4>
              <div className="space-y-3">
                {[
                  { name: "Email", href: "mailto:harryb0905@googlemail.com" },
                  { name: "GitHub", href: "https://github.com/harrybaines" },
                  { name: "LinkedIn", href: "https://linkedin.com/in/harrybaines" },
                  { name: "Twitter", href: "https://twitter.com/harrybaines" }
                ].map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    variants={linkVariants}
                    whileHover="hover"
                    className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Status/Info */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-medium text-neutral-900 uppercase tracking-wider">Details</h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-600">
                  <span className="font-mono">📍 Blackpool, UK 🇬🇧</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300/50 to-transparent"></div>
      </div>
    </motion.footer>
  );
}