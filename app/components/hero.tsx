"use client";

import SectionWrapper from "@/app/components/section-wrapper";
import { profileConfig } from "@/config";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./social-links";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <SectionWrapper bgColor="bg-white/40">
      <div className="max-w-6xl mx-auto py-24 md:py-10 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-7"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* Profile Image */}
          <div className="mx-auto w-28 h-28 md:w-32 md:h-32 relative mb-6">
            <div className="w-full h-full rounded-full overflow-hidden relative group">
              <Image
                src={"/images/brand_transparent.png"}
                alt={profileConfig.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl text-amber-500 font-medium mb-3">
              Hi, I&apos;m {profileConfig.name.split(' ')[0]} 👋
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-700">
              I build software
            </h1>
          </div>

          <p className="text-lg text-stone-700 max-w-xl mx-auto">
            Full-stack software engineer specialising in web dev, AI integration, terminals and developer tooling.
          </p>

          <div className="flex items-center justify-center gap-3 text-stone-600 text-sm">
            <span className="font-medium">
              {profileConfig.stats.yearsExperience} years experience
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>{profileConfig.location}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <Link
              href="/about"
              className="px-5 py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition-colors inline-flex items-center gap-2 font-medium"
            >
              About me
            </Link>
            <Link
              href={`mailto:${profileConfig.email}`}
              className="px-5 py-2 rounded-md border-1 border-stone-200 hover:border-amber-300 bg-white text-stone-700 hover:text-amber-700 transition-colors font-medium"
            >
              Get in touch
            </Link>
          </div>

          <SocialLinks className="justify-center" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}