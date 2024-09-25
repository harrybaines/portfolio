import { BsArrowUpRight } from 'react-icons/bs';

const socialLinks = [
  { name: "Email", link: "mailto:harryb0905@googlemail.com" },
  { name: "X/Twitter", link: "https://x.com/HarryIsCoding" },
  { name: "GitHub", link: "https://github.com/harrybaines" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/harryb0905/" },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-6 mt-10 animate-from-bottom" style={{ "--index": 3 } as React.CSSProperties}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          {link.name}
          <BsArrowUpRight className="inline-block h-3" />
        </a>
      ))}
    </div>
  );
}