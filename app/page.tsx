"use client";

import SocialLink from "@/components/SocialLink";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  BsEnvelope,
  BsGithub,
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
];

const mainProjects = [
  {
    title: "archtms",
    date: "January 1st, 2023",
    status: "In Progress",
    logoUrl: "/assets/archbase.png",
    description:
      "Architect management system: timesheets, projects, fees and holiday requests.",
  },
]

const sideProjects = [
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
      "Boilerplate template for developers to ship their startup for the price of a coffee. ",
  },
];

export default function Home() {
  return (
    <section className="h-full py-24">
      <div className="container mx-auto h-full">
        {/* Intro */}
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="text-left max-w-4xl">
            {/* Available for work */}
            <Badge className="text-green-700 bg-green-100 mb-6 animate-from-bottom py-0" style={{ "--index": 3 } as React.CSSProperties}>
              <div className="flex items-center gap-2 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-300"></span>
                </span>
                Available for work
              </div>
            </Badge>
            <p className="text-3xl mb-4 font-bold animate-from-bottom leading-snug">
              Hi, I&apos;m Harry 👋
            </p>
            <p className="dark:text-white/80 text-gray-700 animate-from-bottom text-md" style={{ "--index": 1 } as React.CSSProperties}>
              Full-stack software engineer and freelancer with 5 years experience from the 🇬🇧 UK.
              I specialise in web development, AI and developer tooling.
              I&apos;m the founder of <a href="#" className="underline underline-offset-4">archtms</a>, an architect management system for timesheets, projects, fees and holiday requests.
            </p>
          </div>
        </div>
        {/* Lets chat */}
        <div className="my-8 animate-from-bottom" style={{ "--index": 5 } as React.CSSProperties}>
          <a href="https://www.cal.com/harrybaines/" className="bg-gray-900 text-white px-5 py-2.5 font-semibold rounded-full">
            Lets chat
          </a>
        </div>
        {/* Contact links */}
        <div className="mb-16 animate-from-bottom" style={{ "--index": 2 } as React.CSSProperties}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <h1 className="text-gray-600 sm:mb-0">Connect with me:</h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {socialLinks.map((socialLink, index) => (
                <SocialLink
                  key={index}
                  label={socialLink.name}
                  href={socialLink.link}
                  icon={socialLink.icon}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Main projects */}
        <div className="mb-16 animate-from-bottom" style={{ "--index": 3 } as React.CSSProperties}>
          <h1 className="font-semibold mb-4 text-gray-500">My Work</h1>
          <div>
            {mainProjects.map((project) => {
              return (
                <div key={project.title}>
                  <div className="flex items-center gap-3 mb-6 mt-6">
                    <Image
                      src={project.logoUrl}
                      alt={project.title}
                      width={40}
                      height={40}
                    />
                    <h2 className="font-semibold">
                      {project.title}
                    </h2>
                  </div>
                  <div className="max-w-lg">
                    <p className="text-2xl font-semibold leading-snug">
                      Architect management system to manage timesheets and monitor project profitability
                    </p>
                  </div>
                  <div className="flex gap-3 my-4">
                    <p className="text-sm text-gray-500">{project.date}</p>
                    <div className="w-px h-3 bg-gray-300 my-auto"></div>
                    <p className="text-sm text-gray-500">{project.status}</p>
                  </div>
                  <div>
                    <p>Includes:</p>
                    <ul className="list-disc list-inside">
                      <li>Project dashboards and fee forecasting</li>
                      <li>Holiday request system</li>
                      <li>Timesheet entry and management</li>
                      <li>Client management</li>
                      <li>Automated emails</li>
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* Side projects */}
        <div className="mb-16 animate-from-bottom" style={{ "--index": 3 } as React.CSSProperties}>
          <h1 className="font-semibold mb-4 text-gray-500">Side Projects</h1>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-10">
            {sideProjects.map((project) => {
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
                        <div className="w-px h-3 bg-gray-300 my-auto"></div>
                        <p className="text-sm text-gray-500">{project.status}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mb-2 text-md">
                    {project.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="mt-36 animate-from-bottom" style={{ "--index": 4 } as React.CSSProperties}>
          <p className="text-2xl font-semibold mb-4 leading-snug">
            Need bespoke software for your business?
          </p>
          <p className="mb-6 text-lg">
            I&apos;ll build you an MVP for free. Only pay when you&apos;re happy.
          </p>
          <a href="https://www.cal.com/harrybaines/" className="bg-gray-900 text-white px-6 py-3 font-semibold rounded-full">
            Lets chat
          </a>
        </div> */}
      </div>
    </section>
  );
}
