interface SectionHeaderProps {
  title: string;
}

export default function HomeSectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2 className="text-lg font-mono font-bold tracking-tight">
      <span className="text-emerald-500">~/</span>
      {title}
    </h2>
  );
}