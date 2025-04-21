'use client';

import { siteConfig } from '@/app/config/site';
import { getYearsOfExperience } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [cursorVisible, setCursorVisible] = useState(true);

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Staggered animation for children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.45, 0.15, 1]
      }
    }
  };

  const socialItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-10">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left side - image */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -12, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.19, 1, 0.22, 1],
            rotate: { duration: 0.7, ease: "easeOut" }
          }}
          className="w-36 md:w-40 lg:w-44 relative"
        >
          <div className="relative aspect-square rounded-md overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="Harry Baines"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right side - content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 space-y-4"
        >
          <motion.div variants={item}>
            <span className="font-mono text-sm text-[#64FFDA]">Hi! I&apos;m Harry 👋</span>
            <div className="flex items-center mt-1">
              <h1 className="text-2xl md:text-3xl font-bold text-white">I build software</h1>
              <div
                className={`w-2 h-6 md:h-7 bg-[#64FFDA] ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
              ></div>
            </div>
          </motion.div>

          <motion.p
            variants={item}
            className="text-base text-[#B8B8B8] max-w-md"
          >
            Full-stack developer with {getYearsOfExperience()} years experience.
            Specialising in web dev, AI integration, terminals and developer tooling.
          </motion.p>

          <motion.div
            className="flex items-center gap-5 pt-1"
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.3, staggerChildren: 0.05 }}
          >
            <motion.a
              variants={socialItem}
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A8A8A] hover:text-[#64FFDA] transition-colors duration-200"
              aria-label="GitHub"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              variants={socialItem}
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A8A8A] hover:text-[#64FFDA] transition-colors duration-200"
              aria-label="Twitter"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              variants={socialItem}
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A8A8A] hover:text-[#64FFDA] transition-colors duration-200"
              aria-label="LinkedIn"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              variants={socialItem}
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A8A8A] hover:text-[#64FFDA] transition-colors duration-200"
              aria-label="YouTube"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <Youtube size={20} />
            </motion.a>
            <motion.a
              variants={socialItem}
              href={`mailto:${siteConfig.social.email}`}
              className="text-[#8A8A8A] hover:text-[#64FFDA] transition-colors duration-200"
              aria-label="Email"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}