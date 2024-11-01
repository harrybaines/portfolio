const osContributions = [
  { project: "Ivy", link: "https://github.com/ivy-llc/ivy", contribution: "Added JAX to numpy function conversions", date: "July 25, 2023" },
  { project: "Buildspace", link: "https://github.com/buildspace/buildspace-projects", contribution: "Added enhancements to AI avatar tutorial project", date: "Jan 19, 2023" },
];

export default function OsContributions() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-mono font-bold tracking-tight">
        <span className="text-emerald-500">~/</span>
        Open Source
      </h2>
      <div className="divide-y divide-zinc-800">
        {osContributions.map((contribution, index) => (
          <div key={index} className="py-4 first:pt-0 last:pb-0">
            <div className="flex items-center justify-between">
              <a
                href={contribution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-100 hover:text-emerald-500 transition-colors"
              >
                {contribution.project}
              </a>
              <span className="text-xs text-zinc-500 font-mono">{contribution.date}</span>
            </div>
            <p className="text-sm text-zinc-400 mt-1">{contribution.contribution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}