'use client';

import { HobbyCard } from "@/app/components/hobby-card";
import { PhotoGallery } from "@/app/components/photo-gallery";
import { SectionHeading } from "@/app/components/section-heading";
import { SocialLinks } from "@/app/components/social-links";
import { SubsectionHeading } from "@/app/components/subsection-heading";
import { getFormattedExperience } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookOpen, Dumbbell, Gamepad2, LucideGamepad } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const photoData = [
    {
      src: "/graduation.png",
      alt: "Graduation day",
      caption: "Lancaster University graduation, 2021",
      initialRotation: -4,
      hoverRotation: 0
    },
    {
      src: "/running.jpeg",
      alt: "Running by the coast",
      caption: "Fleetwood promenade parkrun, 2022",
      initialRotation: -1,
      hoverRotation: 0
    },
    {
      src: "/maldives.jpeg",
      alt: "Cycling in the Maldives",
      caption: "Cycling in the Maldives, 2018",
      initialRotation: 4,
      hoverRotation: 0
    }
  ];

  const hobbyData = [
    {
      icon: Dumbbell,
      title: "hybrid training",
      description: "Balancing weight lifting and running. Best of both worlds!"
    },
    {
      icon: LucideGamepad,
      title: "chess",
      description: "I like to think I'm half decent. In reality, I'm probably worse than average."
    },
    {
      icon: BookOpen,
      title: "learning",
      description: "I strive to learn something new every day. Embrace the 1% rule."
    },
    {
      icon: Gamepad2,
      title: "dead by daylight",
      description: "After a hard day at work, I like to unwind with a stressful horror game."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#1C1C1C] text-white">
      <main className="flex-1 flex items-start md:items-start justify-center pt-16 md:pt-48">
        <motion.div
          className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-col gap-8">
            <motion.div
              className="flex justify-start"
              variants={item}
            >
              <Link href="/" className="text-white/70 hover:text-white transition-colors font-mono">
                ← back home
              </Link>
            </motion.div>

            <motion.section
              className="mb-8"
              variants={item}
            >
              <PhotoGallery photos={photoData} />
            </motion.section>

            <motion.section
              className="mb-8"
              variants={item}
            >
              <SectionHeading>who am i</SectionHeading>
              <motion.p className="text-white/70 leading-relaxed mb-6">
                I&apos;m Harry, a software engineer from the UK 🇬🇧 with {getFormattedExperience()} of experience.
                I&apos;m the founder of {" "}
                <Link
                  href="/blog/archtms"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4 hover:text-white/80 transition-colors"
                >
                  archtms
                </Link>
                , a complete architect management system.
              </motion.p>
              <motion.p className="text-white/70 leading-relaxed mb-6">
                I specialise in web development, AI integration and developer tooling.
                I also enjoy contributing to open-source projects, and exploring new technologies.
              </motion.p>
              <p className="text-white/70 leading-relaxed mb-6">
                I&apos;m always open to new opportunities, collaborations, or a chat over a coffee!
                Feel free to check out my CV {" "}
                <Link
                  href="https://wwoi1vvxbb.ufs.sh/f/0PyPE3K0Z8csQjh97SZY6qKNRiTeyxmBabh2s1nMr98tvg4E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white underline underline-offset-4 transition-colors"
                  download
                >
                  here
                </Link>.
              </p>
              <div className="mt-8">
                <SocialLinks />
              </div>
            </motion.section>

            <motion.section
              className="mb-8"
              variants={item}
            >
              <SectionHeading>tech stack</SectionHeading>
              <div className="rounded-lg overflow-hidden w-full relative h-[350px] mb-6">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <Image
                  src="/desk.jpg"
                  alt="My development workspace with multiple monitors showing code"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <SubsectionHeading>Backend Development</SubsectionHeading>
              <p className="text-white/70 leading-relaxed mb-8">
                I&apos;m proficient in Python and TypeScript, have production experience with Go, and am currently learning Rust. My backend expertise includes Node.js, Django, Flask, and building robust APIs and microservices. I&apos;m also planning to create CLI tools with Rust.
              </p>

              <SubsectionHeading>Frontend Development</SubsectionHeading>
              <p className="text-white/70 leading-relaxed mb-8">
                For frontend development, I work with React, TypeScript, Next.js, and shadcn/ui, focusing on creating accessible and performant interfaces. I use Tailwind CSS for styling and implement smooth animations and responsive designs.
              </p>

              <SubsectionHeading>Databases & Infrastructure</SubsectionHeading>
              <p className="text-white/70 leading-relaxed mb-8">
                I&apos;m experienced with both SQL and NoSQL databases, and I&apos;ve been working on integrating AI capabilities with the Vercel AI SDK and OpenAI API&apos;s. I also implement modern DevOps practices with CI/CD pipelines, containerization, and cloud infrastructure on AWS and Google Cloud.
              </p>

              <SubsectionHeading>Development Environment</SubsectionHeading>
              <p className="text-white/70 leading-relaxed mb-3">
                I&apos;m passionate about optimizing my development environment. Here are the tools I use daily:
              </p>
              <ul className="list-disc list-inside text-white/70 leading-relaxed mb-8 space-y-1 ml-2">
                <li>Neovim with Lazy configuration</li>
                <li>Cursor IDE</li>
                <li>Claude Sonnet AI</li>
                <li>Wezterm terminal (and sometimes Warp)</li>
                <li>Moonlander Mark 2 split mechanical keyboard</li>
              </ul>
            </motion.section>

            <motion.section
              className="mb-8"
              variants={item}
            >
              <SectionHeading className="mb-6">beyond code</SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hobbyData.map((hobby) => (
                  <HobbyCard
                    key={hobby.title}
                    icon={hobby.icon}
                    title={hobby.title}
                    description={hobby.description}
                  />
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </main>
      <div className="h-24 md:h-32"></div>
    </div>
  );
}