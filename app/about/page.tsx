import BikeImageContainer from "@/components/bike-image-container";
import ExperienceItem from "@/components/experience-item";
import TerminalHeading from "@/components/terminal-heading";
import { workData } from "@/content/workData";

const AboutPage = () => {
  return (
    <section className="container mt-24">
      <h2 className="text-3xl font-bold mb-8">Hello, World! 👋</h2>

      <div className="mb-12">
        <TerminalHeading command="whoami" />
        <p className="mt-4">
          I&apos;m Harry, a software engineer from the UK with 5+ years of experience. I&apos;m passionate about learning new technologies and building software that provides real value. I&apos;m open to full-time opportunities and part-time work,
          feel free to give me a call and we can have a chat!
        </p>
      </div>

      <div className="mb-12">
        <BikeImageContainer />
        <p className="text-sm text-gray-500 mt-2 text-center">Maldives September 2018</p>
      </div>

      <div className="mb-12">
        <TerminalHeading command="cat skills.txt" />
        <pre className="bg-gray-100 p-5 rounded-md mt-4 text-wrap">
          {`Languages: TypeScript, Python, Go, SQL
Frameworks: React, Next.js, Express.js, Astro, Django, Flask, FastAPI, Celery, Selenium
Databases: Postgres, MySQL, Redis, sqlite, Firebase, supabase
Tools: Git, GitHub, Docker, Heroku, Vercel, Jupyter Notebooks`}
        </pre>
      </div>

      <div className="mb-12">
        <TerminalHeading command="cat hobbies.txt" />
        <p className="mt-4">
          When I&apos;m not coding, you can find me:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Running or hitting the gym 🏃‍♂️💪</li>
          <li>Playing Dead by Daylight 🎮</li>
          <li>Working on a side project 👨‍💻</li>
        </ul>
      </div>

      <div className="mb-12">
        <TerminalHeading command="history" />
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>2014: Took A-level Computing, received award for highest coursework grade</li>
          <li>2016: Began studying computer science at Lancaster University</li>
          <li>2018: Developed and sold a timesheet system to a large architecture practice</li>
          <li>2019: Completed computer science degree and began data science masters</li>
          <li>2020-2022: Worked as a hybrid Software Engineer/Data Scientist for a chemical consultancy</li>
          <li>2022-present: Scaled time management system into a complete project management system</li>
        </ul>
      </div>

      <div className="mb-12">
        <TerminalHeading command="ls experience/" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-10 mt-4">
          {workData.map((job) => (
            <ExperienceItem key={job.id} minimal={false} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
