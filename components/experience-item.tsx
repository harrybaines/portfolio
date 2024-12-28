interface ExperienceItemProps {
  job: {
    id: number;
    date: string;
    title: string;
    companyName: string;
    companyURL: string;
    skills: string[];
    description: string;
  };
}

export default function ExperienceItem({ job }: ExperienceItemProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between group py-1.5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <span className="font-mono text-sm text-sonokai-text">{job.companyName}</span>
          <span className="font-mono text-xs text-sonokai-text-muted">{job.title}</span>
        </div>
        <span className="font-mono text-xs text-sonokai-text-muted whitespace-nowrap mt-1 sm:mt-0">{job.date}</span>
      </div>
    </div>
  );
}
