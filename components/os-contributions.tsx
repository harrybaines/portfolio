import HomeSectionHeader from "@/components/home-section-header";

const osContributions = [
  { project: "Ivy", link: "https://github.com/ivy-llc/ivy", contribution: "Added JAX to numpy function conversions", date: "July 25, 2023" },
  { project: "Buildspace", link: "https://github.com/buildspace/buildspace-projects", contribution: "Added enhancements to AI avatar tutorial project", date: "Jan 19, 2023" },
];

export default function OsContributions() {
  return (
    <div className="space-y-6">
      <HomeSectionHeader title='OS Contibutions' />
      <div className="divide-y divide-zinc-800">
        {osContributions.map((contribution, index) => (
          <div key={index} className="py-2.5 first:pt-0 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="flex items-center">
                <a
                  href={contribution.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-100 hover:text-emerald-500 transition-colors"
                >
                  {contribution.project}
                </a>
                <span className="hidden sm:inline text-zinc-400 mx-2">—</span>
                <p className="text-sm text-zinc-400 hidden sm:block">{contribution.contribution}</p>
              </div>
              <span className="text-xs text-zinc-500">{contribution.date}</span>
            </div>
            <p className="text-sm text-zinc-400 mt-1 sm:hidden">{contribution.contribution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}