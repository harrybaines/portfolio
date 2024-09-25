import Intro from "@/components/intro";
import OsContributions from "@/components/os-contributions";
import ProjectsList from "@/components/projects-list";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <Intro />
        <ProjectsList />
        <OsContributions />
      </div>
    </section >
  );
}
