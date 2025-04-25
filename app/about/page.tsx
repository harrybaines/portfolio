import AboutHero from "@/app/components/about-hero";
import Bio from "@/app/components/bio";
import ExperienceSection from "@/app/components/experience-section";
import TechStack from "@/app/components/tech-stack";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <AboutHero />
      <ExperienceSection />
      <TechStack />
      <Bio />
    </div>
  );
}