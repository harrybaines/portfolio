import AboutHero from "@/app/components/about-hero";
import CollaborationSection from "@/app/components/collaboration-section";
import ExperienceSection from "@/app/components/experience-section";
import TechStack from "@/app/components/tech-stack";

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 pt-6 grid grid-cols-1 gap-24">
      <AboutHero />
      <ExperienceSection />
      <TechStack />
      <CollaborationSection />
    </div>
  );
}