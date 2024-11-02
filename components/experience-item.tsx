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
      <>
        <div className="col-span-7 flex items-center">
          <div>
            <p className="font-medium">{job.title}</p>{" "}
            <p className="text-gray-500 dark:text-gray-400">
              {job.companyName}
            </p>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-end">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-right">
            {job.date}
          </p>
        </div>
      </>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-y-2 sm:gap-x-4">
      <div className="text-sm text-emerald-500">
        {job.date}
      </div>
      <div className="col-span-4">
        <a href={job.companyURL} className="font-semibold hover:underline">
          {job.title} - {job.companyName}
        </a>
        <p className="mt-1 text-zinc-400">
          {job.description}
        </p>
        <div className="flex flex-wrap mt-4 gap-y-3">
          {job.skills.map((skill, index) => (
            <div key={skill} className="flex items-center">
              <span className="text-zinc-400 bg-zinc-800/50 rounded-xl px-2 text-sm">
                {skill}
              </span>
              {index < job.skills.length - 1 && (
                <span className="text-zinc-500 mx-1">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
