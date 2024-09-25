"use client"

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import aiLogoSrc from "../public/assets/ai-logo.svg";
import portraitSrc from "../public/assets/me.jpg";

export default function TypingAnimation() {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <Image src={portraitSrc} alt="User Icon" width={28} height={28} className="rounded-full" />
        <p>Tell me more</p>
      </div>
      <div className="flex items-start space-x-4 mt-4 min-h-[100px]">
        <Image src={aiLogoSrc} alt="AI Icon" width={28} height={28} className="rounded-full mt-1" />
        <div className="dark:text-gray-300">
          <TypeAnimation
            splitter={(str) => str.split(/(?= )/)}
            sequence={[
              `Harry is a full-stack software engineer with 5+ years experience from the 🇬🇧 UK. He specialises in web development, AI and developer tooling. He is the founder of archtms, an architect management system for timesheets, projects, fees and holiday requests.`,
              200,
              (el) => el?.classList.remove('type')
            ]}
            wrapper="p"
            cursor={false}
            repeat={0}
            speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
            omitDeletionAnimation={true}
            className="type"
          />
          {/* <p>
            You can read more about him <Link href="/about" className="underline">here</Link>.
            </p> */}
        </div>
      </div>
    </div>
  );
};