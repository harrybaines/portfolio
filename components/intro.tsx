'use client'

import ProfileImage from "@/public/assets/me.jpg";
import Image from "next/image";
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
      <div>
        <div className="inline-flex items-center rounded-full border border-[#3c3836] bg-[#32302f] px-3 py-1 text-xs font-medium text-[#b8bb26] mb-10">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b8bb26] opacity-30"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b8bb26]"></span>
          </span>
          Available for work
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-[#b8bb26] font-mono mb-2">Hi, my name is</p>
            <h1 className="font-sans font-bold text-3xl text-[#ebdbb2]">
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
          <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-[#504945] flex-shrink-0">
            <Image src={ProfileImage} alt="Harry Baines" className="object-cover" />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-[#d5c4a1] leading-relaxed max-w-2xl">
          Focused on building elegant software solutions. Currently developing{" "}
          <a
            href="https://archtms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-dashed border-[#504945] hover:border-[#b8bb26] transition-colors"
          >
            archtms
          </a>
          , a complete architect management system.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-[#928374] hover:text-[#b8bb26] transition-colors"
          >
            About me
            <BsArrowRight className="text-md" />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#928374] hover:text-[#b8bb26] transition-colors"
          >
            Blog
            <BsArrowRight className="text-md" />
          </Link>
          {/* <Link
            href="https://ko-fi.com/harrybaines"
            className="inline-flex items-center gap-2 text-sm text-[#928374] hover:text-[#b8bb26] transition-colors"
          >
            Buy me a coffee
            <BsArrowRight className="text-md" />
          </Link> */}
        </div>
        <div className="flex items-center gap-6 pt-4">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.name as keyof typeof iconMap];
            return (
              <a
                key={social.name}
                href={social.link}
                className="text-[#928374] hover:text-[#b8bb26] transition-colors"
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