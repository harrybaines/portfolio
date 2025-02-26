import { FeaturedProject } from "@/components/common/featured-project";
import { PageHeading } from "@/components/ui/page-heading";

export function HomeFeaturedProject() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-8">
        <PageHeading label="FEATURED PROJECT" />
        <FeaturedProject />
      </div>
    </section>
  )
}