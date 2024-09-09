import ExperienceItem from "@/components/ExperienceItem";
import { workData } from "@/content/workData";
import BikeImage from "@/public/assets/bike.jpeg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="container mt-16">
      <h2 className="h2">Hello 👋</h2>
      <p className="my-4 text-xl">
        I&apos;m Harry, a software engineer from the UK with 5+ years experience.
      </p>

      <div className="my-10">
        <Image src={BikeImage} alt="Me on my bike" layout="responsive" className="rounded-lg shadow-md" />
        <p className="text-sm text-gray-500 mt-2 text-center">Maldives September 2018</p>
      </div>

      {/* 3 column grid */}
      {/* <div className="grid grid-cols-3 gap-x-12 my-10">
        <Image src={Suit} alt="Me in a suit" width={1000} className="rounded-lg rotate-1 shadow-md" />
        <Image src={Running} alt="Running" width={1000} className="rounded-lg -rotate-1 shadow-md" />
        <Image src={PencilSketch} alt="Pencil sketch" width={1000} className="rounded-lg rotate-1 shadow-md" />
      </div> */}
      <div className="col-span-2">
        <p className="mb-4">
          In 2014 I took A-level Computing and received an award for achieving the highest
          coursework grade. During the summer of my A-levels, I enrolled in a web
          developer bootcamp course. This is when I discovered building software
          could provide real value.
        </p>
      </div>
      <p className="mb-4">
        In 2018 during the summer of my second
        year at university, I developed and sold a{" "}
        {/* <Link className="underline underline-offset-4" href="/work/timesheets"> */}
        {/* </Link>{" "} */}
        timesheet system to a large architecture practice.
      </p>
      <p className="mb-4">In 2020 I started working as a hybrid Software Engineer/Data Scientist for a large chemical consultancy for 2 years.</p>
      <p className="mb-4">And from 2022 to today, I have scaled my time management system into a complete project management system using a modern tech stack.</p>
      <p className="mb-4">
        When I&apos;m not working I enjoy running, going to the gym, playing Dead by
        Daylight, or working on a side project 👨‍💻
      </p>

      {/* Desk setup */}
      {/* <h3 className="h3 my-8 text-gray-600">My Setup</h3>
      <div className="mb-8 flex justify-center">
        <div>
          <Image
            src="/assets/desk.png"
            alt="Desk setup"
            width={1000}
            height={400}
          />
          <p className="text-gray-500 text-center mt-2">My desk setup</p>
        </div>
      </div> */}

      <section className="my-16">
        <h2 className="text-2xl font-semibold my-6">Experience</h2>
        <div className="grid grid-cols-5 gap-y-10">
          {workData.map((job) => (
            <ExperienceItem key={job.id} minimal={false} job={job} />
          ))}
        </div>
      </section>

      {/* I mostly
              work with <span className="font-semibold">Next.js</span>, <span className="font-semibold">TypeScript</span> and <span className="font-semibold">Python</span>. */}
      {/* I also contribute to
              open source (
              <a
                href={"https://unify.ai/"}
                className="font-semibold underline underline-offset-4"
              >
                UnifyAI
              </a>{" "}
              and{" "}
              <a
                href={"https://github.com/buildspace/buildspace-projects"}
                className="font-semibold underline underline-offset-4"
              >
                Buildspace
              </a>). */}
    </section >
  );
};

export default AboutPage;
