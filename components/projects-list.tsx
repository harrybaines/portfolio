import SideProjectsList from "@/components/side-projects-list";
import Image from "next/image";

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

export default function ProjectsList() {
  return (
    <div className="mb-20 animate-from-bottom" style={{ "--index": 3 } as React.CSSProperties}>
      <div className="mb-12">
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
      <div>
        <SideProjectsList />
      </div>
    </div>
  )
}