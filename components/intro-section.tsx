import ProfileImage from "@/public/assets/me.jpg";
import Image from "next/image";
import Link from "next/link";
import HoverLink from "./hover-link";

const SOCIAL_LINKS = {
  email: {
    text: "email",
    href: "mailto:harryb0905@googlemail.com"
  },
  github: {
    text: "Github",
    href: "https://github.com/harrybaines"
  }
} as const;

export default function IntroSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="font-mono text-md text-primary">Hi, my name is</p>
          <h1 className="font-sans text-3xl font-semibold text-gray-300">
            Harry Baines
          </h1>
        </div>
        <div className="relative h-20 w-20 rounded-full overflow-hidden border border-muted/20 flex-shrink-0">
          <Image src={ProfileImage} alt="Harry Baines" className="object-cover" />
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-sans text-gray-300 leading-relaxed">
          Currently developing{" "}
          <HoverLink href="https://archtms.com">archtms</HoverLink>
          , a complete architect management system. Previously worked as a software engineer at{" "}
          <HoverLink href="https://www.yordasgroup.com/">Yordas Digital</HoverLink>
          {" "}and{" "}
          <HoverLink href="https://www.cassidyashton.co.uk/">Cassidy and Ashton</HoverLink>
          . Proud Liverpool fan and coffee aficionado.
        </p>
        <p className="font-sans text-muted leading-relaxed">
          Read more{" "}
          <Link
            href="/about"
            className="border-b border-dashed border-muted/20 hover:border-primary transition-colors"
          >
            about me
          </Link>
          . get in touch via{" "}
          <HoverLink href={SOCIAL_LINKS.email.href}>{SOCIAL_LINKS.email.text}</HoverLink>
          , check out my{" "}
          <HoverLink href={SOCIAL_LINKS.github.href}>{SOCIAL_LINKS.github.text}</HoverLink>.
        </p>
      </div>
    </div>
  );
}