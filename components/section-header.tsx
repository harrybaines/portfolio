interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeader({ children, className = "" }: SectionHeaderProps) {
  return (
    <h3 className={`font-mono ${className}`}>
      ~/{children}
    </h3>
  );
}