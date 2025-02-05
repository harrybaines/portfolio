interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeader({ children, className = "" }: SectionHeaderProps) {
  return (
    <p className={`font-mono text-md text-primary ${className}`}>
      ~/{children}
    </p>
  );
}