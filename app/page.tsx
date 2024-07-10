"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import {
  BsArrowRight,
  BsEnvelope,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter
} from "react-icons/bs";

const nameVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const socialLinks = [
  { name: "Email", icon: BsEnvelope, link: "mailto:harryb0905@googlemail.com" },
  { name: "X/Twitter", icon: BsTwitter, link: "https://x.com/HarryIsCoding" },
  { name: "GitHub", icon: BsGithub, link: "https://github.com/harrybaines" },
  {
    name: "LinkedIn",
    icon: BsLinkedin,
    link: "https://www.linkedin.com/in/harryb0905/",
  },
  {
    name: "Instagram",
    icon: BsInstagram,
    link: "https://www.instagram.com/harryiscoding_/",
  },
];

const pinnedProjects = [
  {
    title: "archbase",
    date: "January 1st, 2023",
    status: "In Progress",
    logoUrl: "/assets/archbase.png",
    description:
      "Architect management system: timesheets, projects, fees and holiday requests.",
  },
  {
    title: 'microstarter',
    date: 'June 6th, 2024',
    status: 'In Progress',
    logoUrl: '/assets/microstarter.png',
    description: 'A starter template builder for developers to build micro apps faster.'
  },
  {
    title: "BrewKit",
    date: "June 6th, 2024",
    status: "In Progress",
    logoUrl: "/assets/brewkit.png",
    description:
      "Boilerplate template for developers to ship their startup ideas fast.",
  },
];

export default function Home() {
  return (
    <section className="h-full py-20">
      <div className="container mx-auto h-full">
        {/* Intro */}
        <div className="flex flex-col xl:flex-row items-center justify-between mb-4 xl:pt-8">
          <div className="text-center max-w-4xl xl:text-left">
            {/* Available for work */}
            <Badge className="text-green-700 bg-green-100 mb-6 animate-from-bottom" style={{ "--index": 3 } as React.CSSProperties}>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-300"></span>
                </span>
                Available for work
              </div>
            </Badge>
            {/* Subheading */}
            <p className="text-lg text-gray-500 mb-1.5 animate-from-bottom" style={{ "--index": 1 } as React.CSSProperties}>
              Software Engineer
            </p>
            {/* Name */}
            {/* <motion.div
              initial="hidden"
              animate="visible"
              variants={nameVariants}
            > */}
            <p className="text-4xl mb-10 font-semibold animate-from-bottom font-mono">
              Harry Baines
            </p>
            {/* </motion.div> */}
            <p className=" dark:text-white/80 animate-from-bottom" style={{ "--index": 1 } as React.CSSProperties}>
              Full-stack software engineer and freelancer from the 🇬🇧 <span className="font-semibold">UK</span>. I specialise
              in <span className="font-semibold">web development</span>, <span className="font-semibold">automations</span> and <span className="font-semibold">developer tooling</span>. I mostly
              work with <span className="font-semibold">Next.js</span>, <span className="font-semibold">TypeScript</span> and <span className="font-semibold">Python</span>. I also contribute to
              open source (
              <a
                href={"https://unify.ai/"}
                className="font-semibold underline underline-offset-4"
              >
                UnifyAI
              </a>{" "}
              and{" "}
              <a
                href={"https://github.com/buildspace/buildspace-projects"}
                className="font-semibold underline underline-offset-4"
              >
                Buildspace
              </a>).
            </p>
          </div>
        </div>
        {/* Links */}
        <div className="flex items-center gap-6 my-8 text-sm animate-from-bottom" style={{ "--index": 1 } as React.CSSProperties}>
          <div className="relative group">
            <Link
              href="/"
              className="flex items-center gap-2 relative z-10"
            >
              Work
              <BsArrowRight className="relative z-10" />
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </div>
          <div className="relative group">
            <Link
              href="/"
              className="flex items-center gap-2 relative z-10"
            >
              About Me
              <BsArrowRight className="relative z-10" />
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </div>
        </div>
        {/* Contact links */}
        <div className="mb-16 animate-from-bottom" style={{ "--index": 2 } as React.CSSProperties}>
          {/* <h1 className="text-gray-600 mb-2">Connect with me:</h1>
          <div className="flex flex-row gap-3">
            {socialLinks.map((link) => (
              <SocialLink key={link.name} label={link.name} href={link.link} icon={link.icon} />
            ))}
          </div> */}

          {/* <div className="flex gap-6">
            {socialLinks.map((socialLink, index) => {
              return (
                <SocialLink
                  key={index}
                  name={socialLink.name}
                  link={socialLink.link}
                  icon={socialLink.icon}
                />
              );
            })}
          </div> */}
        </div>
        {/* Pinned projects */}
        <div className="mb-16 animate-from-bottom" style={{ "--index": 3 } as React.CSSProperties}>
          <h1 className="font-semibold mb-4 text-gray-500">Pinned Projects</h1>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-10">
            {pinnedProjects.map((project) => {
              return (
                <div key={project.title}>
                  <div className="flex items-center gap-4 mb-3">
                    <Image
                      src={project.logoUrl}
                      alt={project.title}
                      width={40}
                      height={40}
                    />
                    <div>
                      <h2 className="font-semibold">
                        {project.title}
                      </h2>
                      <div className="flex gap-4">
                        <p className="text-sm text-gray-500">{project.date}</p>
                        <Badge variant="outline">{project.status}</Badge>
                      </div>
                    </div>
                  </div>
                  <p className="mb-2 text-sm leading-6">
                    {project.description}
                  </p>
                  {/* <div className="relative group borderw-fit">
                    {project.link && (
                      <a
                        href="/work"
                        className="flex items-center gap-2 relative z-10"
                      >
                        View
                        <BsArrowRight className="relative z-10" />
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                      </a>
                    )}
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-gray-50 p-20 rounded-xl text-center animate-from-bottom" style={{ "--index": 4 } as React.CSSProperties}>
          <h2 className="text-xl font-bold mb-2">
            Do you need bespoke software for your business?
          </h2>
          <p className="mb-4">I&apos;ll build an <span className="font-bold text-gray-900">exceptional</span> solution for you.</p>
          <a href="https://www.cal.com/harrybaines/" className="bg-gray-900 text-white px-4 py-2 rounded-full">
            Lets chat
          </a>
        </div>
      </div>
    </section>
  );
}
