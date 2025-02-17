import Link from "next/link";
import HoverLink from "./hover-link";

const SOCIAL_LINKS = {
  email: {
    text: "email",
    href: "mailto:harryb0905@googlemail.com",
  },
  github: {
    text: "Github",
    href: "https://github.com/harrybaines",
  },
} as const;

export default function IntroSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <p className="font-mono text-md text-green">Hi, my name is</p>
          <h1 className="font-sans font-semibold text-3xl text-primary">
            Harry Baines
          </h1>
        </div>
        {/* <div className="relative h-20 w-20 rounded-full overflow-hidden border border-highlight flex-shrink-0">
          <Image
            src={ProfileImage}
            alt="Harry Baines"
            fill
            className="object-cover"
            priority
          />
        </div> */}
      </div>

      <div className="space-y-3">
        <p className="font-sans text-md text-primary leading-relaxed">
          Software engineer from the UK 🇬🇧.
          Founder of{" "}
          <a
            href="https://archtms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-green border-b border-dashed border-primary hover:border-green transition-colors"
          >
            archtms
          </a>
          , a complete architect management system.
          Passionate about full-stack web development, AI integration, developer tooling, and learning new technologies.
        </p>
        <p className="font-sans text-md text-muted leading-relaxed">
          Read more{" "}
          <Link
            href="/about"
            className="hover:text-green border-b border-dashed border-primary hover:border-green transition-colors"
          >
            about me
          </Link>
          , get in touch via{" "}
          <HoverLink href={SOCIAL_LINKS.email.href}>
            {SOCIAL_LINKS.email.text}
          </HoverLink>
          , check out my{" "}
          <HoverLink href={SOCIAL_LINKS.github.href}>
            {SOCIAL_LINKS.github.text}
          </HoverLink>
          .
        </p>
      </div>
    </div>
  );
}

