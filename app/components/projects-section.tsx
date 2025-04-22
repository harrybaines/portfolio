import FeaturedProjectCard from "@/app/components/featured-project-card";
import SectionWrapper from "@/app/components/section-wrapper";
import { siteConfig } from "@/app/config/site";

export default function ProjectsSection() {
  const keyProjects = siteConfig.keyProjects.filter(project => project.pinned);
  return (
    <SectionWrapper title="Projects">
      <div className="grid grid-cols-2 gap-6 mb-8">
        {keyProjects.map((project) => (
          <FeaturedProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imagePath={project.imagePath}
          />
        ))}
      </div>
      <p className="text-muted-foreground">
        <a href="https://github.com/harrybaines" className="text-primary hover:underline">
          View all my projects on GitHub
        </a>
      </p>
    </SectionWrapper>
  );
}