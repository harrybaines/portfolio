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
      rel="noopener noreferrer"
      className={`border-b border-dashed border-text-muted/20 hover:border-accent transition-colors ${className}`}
    >
      {children}
    </a>
  );
}

