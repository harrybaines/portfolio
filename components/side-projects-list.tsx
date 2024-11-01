import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

const sideProjects = [
  {
    title: "BrewKit",
    date: "Jun, 2024",
    status: "In Progress",
    logoUrl: "/assets/brewkit.png",
    description:
      "Monorepo boilerplate to ship a startup for the price of a coffee.",
    link: null,
  },
  {
    title: 'TorchGPT',
    date: "Aug, 2023",
    status: "Completed",
    description:
      "Generate PyTorch code from input prompts using OpenAI's text-davinci-3 model.",
    link: "https://github.com/harrybaines/torchgpt",
  },
  {
    title: 'AI Avatars',
    date: "Jan, 2023",
    status: "Completed",
    description:
      "Personalised AI avatars using stable diffusion, accessible through Next.js interface.",
    link: "https://github.com/harrybaines/ai-avatar-generator",
  },
  {
    title: 'YouTube transcriber using OpenAI Whisper',
    date: "Jan, 2023",
    status: "Completed",
    description:
      "Transcribe YouTube videos to text",
    link: "https://github.com/harrybaines/gradio-whisper",
  },
  {
    title: 'Tic Tac Toe solver using AI',
    date: "Jun, 2022",
    status: "Completed",
    description:
      "Solving Tic-Tac-Toe using Monte Carlo Tree Search.",
    link: "https://github.com/harrybaines/tic-tac-toe-ai",
  },
  {
    title: 'Smart contract management application using Golang',
    date: "Mar, 2019",
    status: "Completed",
    description:
      "Management system for declarative smart contracts on blockchains",
    link: "https://github.com/harrybaines/CommitmentManager---FYP",
  },
];

export default function SideProjectsList() {
  return (
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
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1"
                      >
                        {project.title}
                        <BsArrowUpRight className="inline-block text-gray-500 h-3" />
                      </a>
                    ) : (
                      <span>{project.title}</span>
                    )}
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
  )
}