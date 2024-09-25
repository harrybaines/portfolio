import AvailableForWorkBadge from "@/components/available-for-work-badge";
import SocialLinks from "@/components/social-links";
import TypingAnimation from "@/components/typing-animation";

export default function Intro() {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between my-16 lg:my-32">
      <div className="text-left">
        <AvailableForWorkBadge />
        <p className="text-4xl mb-4 font-bold animate-from-bottom leading-snug">
          Hi! I&apos;m Harry 👋
        </p>
        <p className="text-2xl mb-8 font-[500] animate-from-bottom leading-snug text-gray-500 font-mono">
          Software engineer building stuff for the web.
        </p>
        <TypingAnimation />
        <SocialLinks />
      </div>
    </div>
  )
}