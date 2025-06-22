"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/back-button";

export default function AboutMe() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen w-full text-neutral-900 overflow-hidden">
      <div className="relative z-10 min-h-screen pt-12 md:pt-10 pb-10 flex flex-col">
        <div className="mx-auto w-full flex-1 flex flex-col">
          <ContentWrapper>
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <BackButton href="/" />
            </motion.div>

            <div className="py-12 md:py-16">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-3xl mx-auto"
              >
                {/* Title */}
                <motion.div variants={fadeIn} className="mb-12 text-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
                    About Me
                  </h1>
                </motion.div>

                {/* Desk Image */}
                {/* <motion.div variants={fadeIn} className="mb-12">
                  <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-neutral-200/50">
                    <Image
                      src="/images/desk.png"
                      alt="My workspace setup"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                </motion.div> */}

                {/* About Content */}
                <motion.div variants={fadeIn} className="space-y-6">
                  <p className="text-lg text-neutral-700 font-geist-sans leading-relaxed">
                    I'm a software engineer who finds joy in crafting digital experiences that feel both thoughtful and effortless. My journey started with curiosity about how things work, and that same curiosity drives me to build tools that make people's lives a little easier.
                  </p>

                  <p className="text-lg text-neutral-700 font-geist-sans leading-relaxed">
                    When I'm not writing code, you'll find me exploring new places, reading about technology and design, or tinkering with side projects that probably won't see the light of day but teach me something valuable along the way.
                  </p>

                  <p className="text-lg text-neutral-700 font-geist-sans leading-relaxed">
                    I'm always happy to connect with fellow builders, designers, and anyone who shares a passion for creating meaningful digital experiences. Whether you want to collaborate on something interesting or just chat about technology over coffee, I'd love to hear from you.
                  </p>
                </motion.div>

                {/* Contact Link */}
                <motion.div variants={fadeIn} className="mt-12 text-center">
                  <Link
                    href="mailto:harryb0905@googlemail.com"
                    className="text-neutral-600 hover:text-neutral-900 transition-colors font-geist-sans text-lg underline underline-offset-4 decoration-1"
                  >
                    Get in touch
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
}
