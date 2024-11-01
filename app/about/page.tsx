import BikeImageContainer from "@/components/bike-image-container";
import ExperienceItem from "@/components/experience-item";
import { workData } from "@/content/workData";
import Link from "next/link";
import { BsArrowLeft, BsArrowUpRight } from "react-icons/bs";

const skills = {
  languages: ["TypeScript", "Python", "Go", "SQL"],
  frameworks: ["React", "Next.js", "Express.js", "Astro", "Django", "Flask", "FastAPI", "Celery", "Selenium"],
  databases: ["Postgres", "MySQL", "Redis", "sqlite", "Firebase", "supabase"],
  tools: ["Git", "GitHub", "Docker", "Heroku", "Vercel", "Jupyter Notebooks"]
};

const timeline = [
  { year: "2022-present", event: "Scaled time management system into a complete project management system" },
  { year: "2020-2022", event: "Worked as a hybrid Software Engineer/Data Scientist for a chemical consultancy" },
  { year: "2019", event: "Completed computer science degree and began data science masters" },
  { year: "2018", event: "Developed and sold a timesheet system to a large architecture practice" },
  { year: "2016", event: "Began studying computer science at Lancaster University" },
  { year: "2014", event: "Took A-level Computing, received award for highest coursework grade" },
];

const interests = [
  {
    title: "Fitness Enthusiast",
    description: "Regular gym-goer and runner, always pushing for new personal bests",
    emoji: "🏃‍♂️"
  },
  {
    title: "Gaming",
    description: "Avid Dead by Daylight player in my downtime",
    emoji: "🎮"
  },
  {
    title: "Side Projects",
    description: "Always working on new ideas and learning new technologies",
    emoji: "👨‍💻"
  }
];

const AboutPage = () => {
  return (
    <section className="min-h-screen">
      <div className="h-[5vh]" />
      <div className="container mx-auto max-w-2xl px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-500 transition-colors mb-16 mt-8"
        >
          <BsArrowLeft className="text-md" />
          Back
        </Link>
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Hello, World! 👋</h2>
            <p className="text-zinc-300 leading-relaxed">
              I&apos;m Harry, a software engineer from the UK with 5+ years of experience. I&apos;m passionate about learning new technologies and building software that provides real value.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              I&apos;m open to full-time opportunities and part-time work, feel free to{" "}
              <a
                href="https://www.cal.com/harrybaines/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:text-emerald-400 transition-colors underline underline-offset-4"
              >
                book a call
              </a>{" "}
              and we can have a chat!
            </p>
            <div className="pt-2">
              <a
                href="https://kit.co/harrybaines"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-500 transition-colors"
              >
                View my setup
                <BsArrowUpRight className="text-xs" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <BikeImageContainer />
            <p className="text-sm text-zinc-500 text-center">Maldives September 2018</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-medium text-zinc-400">Skills</h3>
            <div className="grid gap-4">
              <div className="p-4 border border-zinc-800 rounded-lg space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm text-zinc-500 mb-2 capitalize">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 bg-[#252525] rounded text-xs text-emerald-500/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-medium text-zinc-400">Beyond Code</h3>
            <div className="grid gap-4">
              {interests.map((interest) => (
                <div key={interest.title} className="p-4 border border-zinc-800 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{interest.emoji}</span>
                    <h4 className="font-medium">{interest.title}</h4>
                  </div>
                  <p className="text-sm text-zinc-400">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-medium text-zinc-400">Timeline</h3>
            <div className="border border-zinc-800 rounded-lg divide-y divide-zinc-800">
              {timeline.map((item) => (
                <div key={item.year} className="p-4 flex gap-6">
                  <div className="w-28 flex-shrink-0">
                    <span className="text-sm font-mono text-emerald-500">{item.year}</span>
                  </div>
                  <p className="text-sm text-zinc-300">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-zinc-400">Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-10">
              {workData.map((job) => (
                <ExperienceItem key={job.id} minimal={false} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
