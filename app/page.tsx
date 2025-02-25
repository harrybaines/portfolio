import { Collaborate } from "@/components/common/collaborate"
import { About } from "@/components/home/about"
import { Activity } from "@/components/home/activity"
import { FeaturedProject } from "@/components/home/featured-project"
import { Hero } from "@/components/home/hero"
import { PageHeading } from "@/components/ui/page-heading"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <Hero />
      <About />

      <section className="py-16 md:py-24">
        <div className="space-y-8">
          <PageHeading label="FEATURED PROJECT" />
          <FeaturedProject />
        </div>
      </section>

      {/* <Resources /> */}

      <Activity />
      <Collaborate />
    </div>
  )
}

