"use client"

import { AboutHeader } from "@/app/about/components/about-header"
import { JourneyTimeline } from "@/components/home/journey-timeline"

export default function AboutPage() {
  return (
    <section className="space-y-24 max-w-4xl">
      <AboutHeader />
      <JourneyTimeline />
    </section>
  )
}