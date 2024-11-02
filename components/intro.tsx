'use client'

import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
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
      <div className="space-y-2">
        {/* <div className="inline-flex items-center rounded-full border border-gray-800 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500 mb-6">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for work
        </div> */}
        <p className="text-emerald-500 font-mono">Hi, my name is</p>
        <h1 className="text-4xl font-sans font-bold tracking-normal">
          Harry Baines
        </h1>
        <p className="text-zinc-400 font-mono text-xl pt-1">
          <TypeAnimation
            sequence={[
              'Software Engineer',
            ]}
            wrapper="span"
            cursor={false}
            repeat={0}
            speed={60}
          />
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-zinc-300 leading-relaxed max-w-2xl">
          I build elegant solutions to complex problems. Focused on creating efficient,
          scalable applications with clean code and exceptional user experiences.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-500 transition-colors"
          >
            About me
            <BsArrowRight className="text-md" />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-500 transition-colors"
          >
            Blog
            <BsArrowRight className="text-md" />
          </Link>
          <Link
            href="https://ko-fi.com/harrybaines"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-500 transition-colors"
          >
            Buy me a coffee
            <BsArrowRight className="text-md" />
          </Link>
        </div>
        <div className="flex items-center gap-4 pt-4">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.name as keyof typeof iconMap];
            return (
              <a
                key={social.name}
                href={social.link}
                className="text-zinc-400 hover:text-emerald-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}