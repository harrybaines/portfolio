export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-6 flex items-center">
      <h2 className="text-xl font-medium text-[#F5F5F5]">{title}</h2>
      <div className="ml-3 h-px flex-1 bg-gradient-to-r from-[#333333] to-transparent"></div>
    </div>
  );
}
