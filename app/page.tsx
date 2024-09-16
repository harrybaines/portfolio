"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

// const socialLinks = [
//   { name: "Email", icon: BsEnvelope, link: "mailto:harryb0905@googlemail.com" },
//   { name: "X/Twitter", icon: BsTwitter, link: "https://x.com/HarryIsCoding" },
//   { name: "GitHub", icon: BsGithub, link: "https://github.com/harrybaines" },
//   {
//     name: "LinkedIn",
//     icon: BsLinkedin,
//     link: "https://www.linkedin.com/in/harryb0905/",
//   },
// ];

const mainProjects = [
  {
    title: "archtms",
    date: "January 1st, 2023",
    status: "In Progress",
    logoUrl: "/assets/archtms.png",
    description:
      "Architect management system: timesheets, projects, fees and holiday requests.",
  },
]

const sideProjects = [
  {
    title: "BrewKit",
    date: "Jun, 2024",
    status: "In Progress",
    logoUrl: "/assets/brewkit.png",
    description:
      "Boilerplate template to ship an AI startup for the price of a coffee.",
  },
  {
    title: 'TorchGPT',
    date: "Aug, 2023",
    status: "Completed",
    // logoUrl: "/assets/torchgpt.png",
    description:
      "Generate PyTorch code from input prompts using OpenAI's text-davinci-3 model.",
  },
  {
    title: 'AI Avatars',
    date: "Jan, 2023",
    status: "Completed",
    // logoUrl: "/assets/avatars.png",
    description:
      "Personalised AI avatars using stable diffusion, accessible through Next.js interface.",
  }
  ,
  {
    title: 'Tic Tac Toe solver using AI',
    date: "Jun, 2022",
    status: "Completed",
    // logoUrl: "/assets/tic-tac-toe.png",
    description:
      "Solving Tic-Tac-Toe using Monte Carlo Tree Search.",
  },
];

const osContributions = [
  { project: "Ivy", link: "https://github.com/ivy-llc/ivy", contribution: "Added JAX to numpy function conversions", date: "July 25, 2023" },
  { project: "Buildspace", link: "https://github.com/buildspace/buildspace-projects", contribution: "Added enhancements to AI avatar tutorial project", date: "Jan 19, 2023" },
];

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        {/* Intro */}
        <div className="flex flex-col xl:flex-row items-center justify-between my-16 lg:my-32">
          <div className="text-left">
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
            <p className="text-4xl mb-4 font-bold animate-from-bottom leading-snug">
              Hello! I&apos;m Harry 👋
            </p>
            <p className="text-xl mb-4 font-semibold text-gray-500 animate-from-bottom">
              A full-stack software engineer with 5 years experience from the 🇬🇧 UK. I specialise in web development, AI and developer tooling.
            </p>
            <p className="dark:text-white/80 text-gray-600 animate-from-bottom text-lg mb-1.5" style={{ "--index": 1 } as React.CSSProperties}>
            </p>
            <p className="dark:text-white/80 text-gray-600 animate-from-bottom text-lg" style={{ "--index": 2 } as React.CSSProperties}>
              I&apos;m the founder of <a href="#" className="underline underline-offset-4">archtms</a>, a complete architect management system.
            </p>
            {/* Open to work text */}
            <p className="dark:text-white/80 text-gray-600 animate-from-bottom text-lg mt-4" style={{ "--index": 2 } as React.CSSProperties}>
              I'm open to work, so if you need bespoke software for your business let&apos;s chat!
            </p>
            {/* Lets chat */}
            {/* <div className="mt-4 animate-from-bottom" style={{ "--index": 5 } as React.CSSProperties}>
              <a href="https://www.cal.com/harrybaines/" className="bg-gray-900 text-white px-4 py-2 font-semibold rounded-full">
                Lets chat
              </a>
            </div> */}
          </div>
        </div>
        {/* Main projects */}
        <div className="mb-20 animate-from-bottom" style={{ "--index": 3 } as React.CSSProperties}>
          <h1 className="font-semibold mb-4 text-gray-400 font-mono">~/My Work</h1>
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
                      Architect management system
                    </p>
                    <p className="text-lg text-gray-500 mt-0.5">
                      to manage timesheets and monitor project profitability
                    </p>
                  </div>
                  <div className="flex gap-3 my-3">
                    <p className="text-sm text-gray-500">{project.date}</p>
                    <div className="w-px h-3 bg-gray-300 my-auto"></div>
                    <p className="text-sm text-gray-500">{project.status}</p>
                  </div>
                  <div>
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
        <div className="mb-20 animate-from-bottom" style={{ "--index": 3 } as React.CSSProperties}>
          <h1 className="font-semibold mb-4 text-gray-400">~/Side Projects</h1>
          <div className="space-y-0 ">
            {sideProjects.map((project, index) => {
              return (
                <div key={project.title}>
                  <div className="flex items-start gap-4 py-3">
                    <div className="flex-shrink-0 mt-1">
                      {project.logoUrl ? (
                        <Image
                          src={project.logoUrl}
                          alt={project.title}
                          width={32}
                          height={32}
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-50 rounded-md flex items-center justify-center">
                          <span role="img" aria-label="pencil" className="text-sm">👨‍💻</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-grow leading-snug">
                      <div className="flex justify-between items-baseline">
                        <h2 className="font-semibold text-base">
                          {project.title}
                        </h2>
                        <p className="text-sm text-gray-500">{project.date}</p>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  {index < sideProjects.length - 1 && <hr className="my-3 border-gray-100" />}
                </div>
              );
            })}
          </div>
        </div>
        {/* OS Contributions */}
        <div className="mb-20 animate-from-bottom" style={{ "--index": 4 } as React.CSSProperties}>
          <h1 className="font-semibold mb-4 text-gray-400 font-mono">~/OS Contributions</h1>
          <div className="flex flex-col">
            {osContributions.map((contribution, index) => (
              <div key={index}>
                <div className="flex flex-wrap justify-between items-center py-3">
                  <div className="flex-grow mr-4">
                    <a href={contribution.link} className="font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                      {contribution.project}
                    </a>
                    <span className="mx-2">-</span>
                    <span className="text-gray-700 dark:text-gray-300">{contribution.contribution}</span>
                  </div>
                  <span className="text-sm text-gray-500 text-right">{contribution.date}</span>
                </div>
                {index < osContributions.length - 1 && <hr className="border-gray-200 dark:border-gray-700" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
