interface HoverLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function HoverLink({
  href,
  children,
}: HoverLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green border-b border-dashed border-primary hover:border-green transition-colors"
    >
      {children}
    </a>
  );
}

