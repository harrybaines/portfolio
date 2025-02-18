'use client'

import ProfileImage from "@/public/assets/me.jpg";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';

const iconMap = {
  "Email": MdAlternateEmail,
  "X/Twitter": BsTwitterX,
  "GitHub": BsGithub,
  "LinkedIn": BsLinkedin,
};

const socialLinks = [
  { name: "Email", link: "mailto:harryb0905@googlemail.com" },
  { name: "X/Twitter", link: "https://x.com/HarryIsCoding" },
  { name: "GitHub", link: "https://github.com/harrybaines" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/harryb0905/" },
];

export default function Intro() {
  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center rounded-full border border-overlay bg-surface px-3 py-1 text-xs font-medium text-green mb-10">
          <div className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-30"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
          </div>
          Available for hire
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-green font-mono mb-2">Hi, my name is</p>
            <h1 className="font-sans font-bold text-3xl text-primary">
              <TypeAnimation
                sequence={[
                  'Harry Baines',
                ]}
                wrapper="span"
                cursor={false}
                repeat={0}
                speed={60}
              />
            </h1>
          </div>
          <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-highlight flex-shrink-0">
            <Image
              src={ProfileImage}
              alt="Harry Baines"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-primary leading-relaxed max-w-2xl">
          Software engineer from the UK with 5+ years of experience.
          I&apos;m passionate about developer tooling and productivity, learning new technologies and building software that provides real value.
        </p>
        <p className="text-muted leading-relaxed max-w-2xl">
          Currently focused on full-stack web development and AI integration. Building{" "}
          <Link
            href="https://archtms.com"
            target="_blank"
          >
            archtms
          </Link>
          , a complete architect management system.
        </p>
        <div className="flex items-center space-x-4">
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 text-primary hover:text-green transition-colors"
          >
            <span>More about me</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-primary hover:text-green transition-colors"
          >
            <span>View projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/harrybaines"
            className="text-muted hover:text-green transition-colors"
            target="_blank"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/harry-baines"
            className="text-muted hover:text-green transition-colors"
            target="_blank"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com/harryb_uk"
            className="text-muted hover:text-green transition-colors"
            target="_blank"
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}