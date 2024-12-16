import BikeImageContainer from "@/components/bike-image-container";
import ExperienceItem from "@/components/experience-item";
import { workData } from "@/content/workData";
import { BsArrowUpRight } from "react-icons/bs";

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
    description: "Regular gym-goer and runner, currently hybrid training",
    emoji: "🏃‍♂️"
  },
  {
    title: "LFC Fan",
    description: "Pround Liverpool supporter since 2008",
    emoji: "⚽️"
  },
  {
    title: "Side Projects",
    description: "Always working on new ideas and trying new technologies",
    emoji: "👨‍💻"
  },
  {
    title: "Continuous Learner",
    description: "Currently learning Neovim, CLI tools and Rust programming",
    emoji: "📚"
  }
];

const AboutPage = () => {
  return (
    <section className="min-h-screen">
      <div className="h-[5vh]" />
      <div className="w-full">
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
                href="https://kit.co/harryb0905/my-setup"
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

          <div className="space-y-8">
            <h3 className="text-lg font-medium text-zinc-400">Hobbies and Interests</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interests.map((interest) => (
                <div key={interest.title} className="p-6 border border-zinc-800 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{interest.emoji}</span>
                    <h4 className="font-medium">{interest.title}</h4>
                  </div>
                  <p className="text-sm text-zinc-400">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-lg font-medium text-zinc-400">Experience</h3>
            <div className="grid grid-cols-1 gap-y-10">
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
