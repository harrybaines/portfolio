'use client'

import AnimatedSection from "@/components/animated-section";
import IntroSection from "@/components/intro-section";
import OsContributions from "@/components/os-contributions";
import ProjectsList from "@/components/projects-list";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:justify-center max-w-2xl mx-auto px-10 md:px-8 py-20 md:py-60">
      <div className="space-y-16">
        <AnimatedSection delay={0.2}>
          <IntroSection />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <ProjectsList />
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <OsContributions />
        </AnimatedSection>
      </div>
    </main>
  );
}
