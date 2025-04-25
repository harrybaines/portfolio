"use client";

import ProfileBio from "@/app/components/profile-bio";
import SectionWrapper from "@/app/components/section-wrapper";
import SocialLinks from "@/app/components/social-links";
import { profileConfig } from "@/config";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <SectionWrapper bgColor="bg-white/40">
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-all text-sm font-medium"
        >
          <ArrowLeft size={16} />
          <span>Back to home</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Image column */}
        <div className="lg:col-span-5 xl:col-span-4 order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
            {/* Decorative elements */}
            <div className="absolute -z-10 w-full h-full left-6 top-6 bg-amber-200/70 rounded-2xl opacity-50 blur-sm"></div>
            <div className="absolute -z-10 w-4/5 h-4/5 -left-4 -bottom-4 bg-gradient-to-br from-amber-500/30 to-amber-200/30 rounded-2xl"></div>

            {/* Main image */}
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg border-4 border-amber-100">
              <Image
                src={profileConfig.avatar}
                alt={profileConfig.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/20 via-transparent to-amber-50/10"></div>

              {/* Warm overlay */}
              <div className="absolute inset-0 bg-[#FFA07A]/5 mix-blend-overlay"></div>
            </div>
          </div>
        </div>

        {/* Content column */}
        <div className="lg:col-span-7 xl:col-span-8 order-1 lg:order-2">
          <div className="space-y-7">
            <div>
              <span className="text-sm uppercase tracking-wider text-amber-600 font-medium mb-2 inline-block">
                Hi there, nice to meet you!
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-stone-700">
                I&apos;m Harry 👋
              </h1>
            </div>

            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-100 rounded-full"></div>

            <ProfileBio />

            <div className="pt-3">
              <p className="text-amber-700/80 mb-4 text-sm font-medium">Let&apos;s connect:</p>
              <SocialLinks className="gap-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 transition-all hover:shadow-md hover:border-amber-200">
            <div className="text-5xl font-mono font-bold text-stone-700 mb-2 text-center">{profileConfig.stats.yearsExperience}</div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-600 text-center">Years experience</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 transition-all hover:shadow-md hover:border-amber-200">
            <div className="text-5xl font-mono font-bold text-stone-700 mb-2 text-center">{profileConfig.stats.typingSpeed}</div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-600 text-center">Typing speed (WPM)</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 transition-all hover:shadow-md hover:border-amber-200">
            <div className="text-5xl font-mono font-bold text-stone-700 mb-2 text-center">{profileConfig.stats.githubContributions}</div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-600 text-center">GitHub contributions</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 transition-all hover:shadow-md hover:border-amber-200">
            <div className="text-5xl font-mono font-bold text-stone-700 mb-2 text-center">{profileConfig.stats.mechanicalKeyboards}</div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-600 text-center">Mechanical keyboards</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}