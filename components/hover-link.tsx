interface HoverLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function HoverLink({
  href,
  children,
  className = "",
}: HoverLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className}`}
    >
      {children}
    </a>
  );
}

