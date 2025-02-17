'use client'

import AnimatedSection from "@/components/animated-section";
import IntroSection from "@/components/intro-section";
import OsContributions from "@/components/os-contributions";
import ProjectsList from "@/components/projects-list";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:justify-center max-w-2xl mx-auto px-10 sm:px-8 pt-40 md:pt-0">
      <div className="space-y-16">
        <AnimatedSection>
          <IntroSection />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <ProjectsList />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <OsContributions />
        </AnimatedSection>
      </div>
    </main>
  );
}
