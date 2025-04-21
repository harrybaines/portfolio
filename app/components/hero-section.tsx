'use client';

import { siteConfig } from '@/app/config/site';
import { getYearsOfExperience } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl flex flex-col items-start"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-lg text-[#64FFDA] mb-1 font-mono">
          Hi, I'm Harry 👋
        </p>

        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-[#F5F5F5]">
            I build software
          </h1>
          <div className="w-3 h-6 bg-[#8A8A8A] ml-1 animate-pulse"></div>
        </div>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="relative w-44 h-44 rounded-md overflow-hidden flex-shrink-0"
        >
          <Image
            src="/images/profile.png"
            alt="Harry Baines"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-col gap-4"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-2">
              About
            </p>
            <p className="text-lg text-[#B8B8B8]">
              Full-stack developer from the UK with {getYearsOfExperience()} years experience. Specialising in web dev, AI integration and developer tooling.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex items-center gap-5"
          >
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8B8B8] hover:text-[#64FFDA] transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8B8B8] hover:text-[#64FFDA] transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8B8B8] hover:text-[#64FFDA] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8B8B8] hover:text-[#64FFDA] transition-all duration-200"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="text-[#B8B8B8] hover:text-[#64FFDA] transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}