import HomeSectionHeader from "@/components/home-section-header";

const osContributions = [
  { project: "Ivy", link: "https://github.com/ivy-llc/ivy", contribution: "Added JAX to numpy function conversions", date: "July 25, 2023" },
  { project: "Buildspace", link: "https://github.com/buildspace/buildspace-projects", contribution: "Added enhancements to AI avatar tutorial project", date: "Jan 19, 2023" },
];

export default function OsContributions() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <HomeSectionHeader title='OS Contributions' />
      </div>
      <div className="divide-y divide-[#3c3836]">
        {osContributions.map((contribution, index) => (
          <div key={index} className="py-3 first:pt-0 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="flex items-center">
                <a
                  href={contribution.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ebdbb2] hover:text-[#b8bb26] transition-colors"
                >
                  {contribution.project}
                </a>
                <span className="hidden sm:inline text-[#928374] mx-2">—</span>
                <p className="text-sm text-[#928374] hidden sm:block">{contribution.contribution}</p>
              </div>
              <span className="text-xs text-[#928374]">{contribution.date}</span>
            </div>
            <p className="text-sm text-[#928374] mt-1 sm:hidden">{contribution.contribution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}