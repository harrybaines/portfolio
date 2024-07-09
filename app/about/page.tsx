import ExperienceItem from "@/components/ExperienceItem";
import { workData } from "@/content/workData";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <section className="container">
      <h2 className="h2 mb-8">About</h2>

      {/* Intro */}
      <p className="mb-4">
        Hi, I'm Harry. I build custom software applications for large companies.
        Reach out if you would like to chat!
      </p>

      {/* Story */}
      <h3 className="h3 my-12">My Story</h3>
      {/* <div className="mb-12">
        <Stats />
      </div> */}
      <p className="mb-4">
        From the age of 10, I have been obsessed with Apple products. In 2014 I
        took A-level Computing and received an award for achieving the highest
        coursework grade. During the summer of my A-levels, I enrolled in a web
        developer bootcamp course. This is when I discovered building websites
        could provide real value.
      </p>
      <p className="mb-4">
        I then studied BSc Computer Science (first) and MSc Data Science
        (distinction) at Lancaster University. During the summer of my second
        year at university, I developed and sold a{" "}
        <Link className="underline underline-offset-4" href="/work/timesheets">
          timesheet system{" "}
        </Link>{" "}
        to a large architecture practice. After university, I worked as a hybrid
        Software Engineer/Data Scientist for a large chemical consultancy for 2
        years.
      </p>
      <p className="mb-4">
        Following this, I redesigned and scaled my original timesheet system
        into a complete project management system using a modern tech stack. And
        that leads us to today!
      </p>
      <p className="mb-4">
        When I'm not working I enjoy running, going to the gym, playing Dead by
        Daylight, or working on a side project :)
      </p>

      {/* Desk setup */}
      <h3 className="h3 my-8">My Setup</h3>
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
      </div>

      <section className="my-16">
        <h2 className="text-2xl font-semibold my-6">Experience</h2>
        <div className="grid grid-cols-5 gap-y-10">
          {workData.map((job) => (
            <ExperienceItem key={job.id} minimal={false} job={job} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default AboutPage;
