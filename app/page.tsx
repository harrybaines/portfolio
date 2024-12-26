import FadeIn from "@/components/fade-in";
import HomeSectionHeader from "@/components/home-section-header";
import Intro from "@/components/intro";
import OsContributions from "@/components/os-contributions";
import { BlogPosts } from "@/components/posts";
import ProjectsList from "@/components/projects-list";

export default function Home() {
  return (
    <section>
      <div className="mx-auto w-[85vw] max-w-2xl">
        <div className="space-y-20 mt-32 lg:mt-48">
          <FadeIn>
            <Intro />
          </FadeIn>
          <div className="space-y-24">
            <FadeIn delay={0.1}>
              <ProjectsList />
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="space-y-6">
                <HomeSectionHeader title='Posts' />
                <BlogPosts />
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <OsContributions />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
