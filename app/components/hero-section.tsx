'use client';

import { siteConfig } from '@/config/site';
import { getYearsOfExperience } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const socialLinks = [
    { icon: Github, href: siteConfig.social.github, label: "GitHub" },
    { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${siteConfig.social.email}`, label: "Email" }
  ];

  return (
    <section className="relative flex items-center justify-center overflow-hidden py-20 lg:py-40 3xl:py-80">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-0 items-center">
        {/* Text Content - 3 columns */}
        <div className="lg:col-span-3 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-0"
          >
            <span className="font-mono text-md text-[#64FFDA] tracking-wider block mb-3">Hi! I'm Harry 👋</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white whitespace-nowrap">
              I build software
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-300 max-w-xl leading-relaxed"
          >
            Full-stack developer with {getYearsOfExperience()} years of experience. Specialising in web dev, AI integration, terminals and developer tooling.
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-2 pr-4 md:pr-0"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-all duration-300 hover:-translate-y-1 whitespace-nowrap pr-3 py-1"
              >
                <social.icon size={16} strokeWidth={1.5} />
                <span className="text-xs font-medium">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Image - 2 columns */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 hidden sm:flex justify-center lg:justify-end"
        >
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 m-4">
            {/* Decorative borders with padding to prevent overflow */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-zinc-600/60 -translate-x-2 -translate-y-2 rounded-tl-md"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-zinc-600/60 translate-x-2 translate-y-2 rounded-br-md"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800 p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/profile.png"
                  alt="Harry Baines"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-zinc-600 font-mono">Scroll</span>
        <div className="h-8 w-px bg-zinc-800"></div>
      </motion.div>
    </section>
  );
}