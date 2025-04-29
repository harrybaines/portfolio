import AboutSection from "@/app/components/about-section";
import Hero from "@/app/components/hero";
import ProjectsSection from "@/app/components/projects-section";
import WritingSection from "@/app/components/writing-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <WritingSection />
      {/* <Bio /> */}
    </div>
  );
}