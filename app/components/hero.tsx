"use client";

import { profileConfig } from "@/config";
import { getFormattedExperience } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import SocialLinks from "./social-links";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const profileImageAnimation = {
  hidden: { opacity: 0, scale: 0.95, rotateY: -10, rotateX: 5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      duration: 0.8
    }
  },
};

const lineDecoration = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.5 }
    }
  }
};

// Replace bouncing hover text animation with static display
const hoverTextAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.8,
    transition: { duration: 0.5 }
  },
};

// Add animation for the greeting text
const greetingAnimation = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Hero() {
  return (
    <div className="pt-52 pb-16">
      <div className="w-full max-w-4xl mx-auto px-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* Left Side Content */}
          <div className="md:col-span-3 flex flex-col space-y-7">

            {/* Greeting and Headline with less spacing */}
            <div className="space-y-2">
              <p className="text-zinc-400 text-base font-medium">Hi, I'm Harry 👋</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-sans leading-tight">
                I build software
              </h1>
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-lg max-w-lg">
              Full-stack developer with {getFormattedExperience(0)} of experience. Specialising in web dev, AI integration, API's and developer tooling.
            </p>

            {/* Experience and Location */}
            <div className="flex items-center text-sm text-zinc-400 font-medium">
              <span className="inline-flex items-center">
                <span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
                {getFormattedExperience()} experience
              </span>
              <span className="mx-4">•</span>
              <span>🇬🇧 United Kingdom</span>
            </div>

            {/* Social Links */}
            <SocialLinks className="mt-3 gap-5" />
          </div>

          {/* Right Side - Profile Image */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Hover prompt text - now static and grey */}
              <motion.div
                className="absolute -top-6 -right-1 z-20 text-[10px] font-mono text-zinc-400 font-medium pointer-events-none hidden md:block"
                variants={hoverTextAnimation}
                initial="hidden"
                animate="visible"
              >
                HOVER ME
              </motion.div>

              <motion.div
                variants={profileImageAnimation}
                className="relative w-42 h-42 md:w-46 md:h-46 rounded-3xl overflow-hidden shadow-xl border border-zinc-800 transition-all duration-300 perspective-1000 cursor-pointer"
              >
                <Image
                  src="/images/me.jpeg"
                  alt={profileConfig.name}
                  fill
                  className="object-cover transition-all duration-300 filter grayscale-0 md:grayscale group-hover:grayscale-0"
                  priority
                />
              </motion.div>

              {/* Greeting message - updated with mono font, grey color, smaller size, and fade-in downward animation */}
              <div className="absolute top-full left-0 right-0 pt-4 text-center overflow-hidden">
                <div
                  className="text-zinc-400 font-mono text-sm transform -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
                >
                  Hiya! 👋
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}