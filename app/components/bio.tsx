import SectionWrapper from "@/app/components/section-wrapper";
import SocialLinks from "@/app/components/social-links";
import { profileConfig } from "@/config";
import Image from "next/image";

export default function Bio() {
  return (
    <SectionWrapper bgColor="bg-white/40">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-44 h-44 rounded-xl overflow-hidden border-2 border-stone-200 shadow-md relative group">
                <Image
                  src="/images/whale.JPG"
                  alt="Harry Baines"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-3">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-1 text-center md:text-left">
                    {profileConfig.name}
                  </h2>
                </div>

                <SocialLinks className="mt-4 md:mt-0" />
              </div>

              <p className="text-lg text-stone-600 leading-relaxed mb-4 text-center md:text-left max-w-3xl">
                Harry creates and designs software. He enjoys investigating new AI technologies, developer tools, and web applications. He also likes to contribute to open source and share his knowledge.
              </p>

              <div className="flex justify-center md:justify-start">
                <a
                  href={`mailto:${profileConfig.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition-colors"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}