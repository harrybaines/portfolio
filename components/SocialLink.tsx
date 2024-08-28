import NextLink from "next/link";
import { IconType } from "react-icons";

export interface CustomLinkProps {
  label: string;
  href: string;
  icon?: IconType;
}

export default function CustomLink({ label, href, icon }: CustomLinkProps) {
  const Icon = icon;
  return (
    <NextLink href={href}>
      <div className="inline-flex items-center gap-2 text-sm bg-gray-50  dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 px-4 py-0.5 rounded-xl hover:cursor-pointer transition-all">
        {Icon && <Icon />}
        {label}
      </div>
    </NextLink>
  );
}
