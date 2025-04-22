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
    <section className="relative flex items-center justify-center overflow-hidden pt-0 pb-20 lg:py-20">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-0 items-center">
        {/* Text Content - 3 columns */}
        <div className="lg:col-span-3 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-sm font-semibold text-neutral-400 tracking-wider block">Hi! I'm Harry 👋</span>
            <h1 className="text-4xl md:text-4xl font-bold tracking-tighter text-white whitespace-nowrap">
              I build software
            </h1>
          </div>

          <p className="text-neutral-300 max-w-xl leading-relaxed">
            Full-stack developer with {getYearsOfExperience()} years of experience. Specialising in web dev, AI integration, terminals and developer tooling.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-2 pr-4 md:pr-0">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-all duration-300 hover:-translate-y-1 whitespace-nowrap pr-3 py-1"
              >
                <social.icon size={16} strokeWidth={1.5} />
                <span className="text-xs font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Image - 2 columns with anti-clockwise fade in animation */}
        <motion.div
          initial={{ opacity: 0, rotate: 15, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-2 hidden sm:flex justify-center lg:justify-end"
        >
          <div className="relative w-44 h-44 m-4">
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
    </section>
  );
}