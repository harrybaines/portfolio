import FeaturedProjectCard from "@/app/components/featured-project-card";
import SectionWrapper from "@/app/components/section-wrapper";
import { siteConfig } from "@/config/site";

export default function ProjectsSection() {
  const keyProjects = siteConfig.keyProjects.filter(project => project.pinned);
  return (
    <SectionWrapper title="Pinned">
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
        View all my projects on{" "}
        <a href="https://github.com/harrybaines" className="border-b border-dashed border-white/70 hover:text-[#64FFDA] transition-colors duration-200">
          GitHub
        </a>.
      </p>
    </SectionWrapper>
  );
}