import Intro from "@/components/intro";
import OsContributions from "@/components/os-contributions";
import ProjectsList from "@/components/projects-list";
import QuickLinks from "@/components/quick-links";

export default function Home() {
  return (
    <section className="min-h-screen w-full">
      <div className="space-y-32 mt-40 lg:mt-60">
        <Intro />
        <div className="space-y-20">
          <QuickLinks />
          <ProjectsList />
          <OsContributions />
        </div>
      </div>
    </section>
  );
}
