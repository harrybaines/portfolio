
interface ExperienceItemProps {
  job: {
    title: string;
    companyName: string;
    companyURL: string;
    date: string;
    description: string;
    skills: string[];
  };
  minimal?: boolean;
}

export default function ExperienceItem({ job, minimal }: ExperienceItemProps) {
  if (minimal) {
    return (
      <span key={job.title}>
        <div className="col-span-7 flex items-center">
          <div>
            <p className="font-medium text-gruvbox-text-primary">{job.title}</p>
            <p className="text-gruvbox-text-muted">
              {job.companyName}
            </p>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-end">
          <p className="text-sm text-gruvbox-text-muted text-right">
            {job.date}
          </p>
        </div>
      </span>
    );
  }

  return (
    <div key={job.title} className="grid grid-cols-1 sm:grid-cols-5 gap-y-2 sm:gap-x-4">
      <div className="text-sm text-gruvbox-text-muted">
        {job.date}
      </div>
      <div className="col-span-4">
        <a
          href={job.companyURL}
          className="font-semibold text-gruvbox-text-primary hover:text-gruvbox-border-hover transition-colors"
        >
          {job.title} - {job.companyName}
        </a>
        <p className="mt-1 text-gruvbox-text-secondary">
          {job.description}
        </p>
        <div className="flex flex-wrap mt-4 gap-y-3">
          {job.skills.map((skill, index) => (
            <div key={`${skill}-${index}`} className="flex items-center">
              <span className="text-gruvbox-text-muted bg-gruvbox-background-softer rounded-xl px-2 text-sm">
                {skill}
              </span>
              {index < job.skills.length - 1 && (
                <span className="text-gruvbox-text-muted mx-1">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
