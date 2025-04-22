import SectionHeader from "@/app/components/section-header";

export default function SectionWrapper({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="mb-32">
      <SectionHeader title={title} />
      {children}
    </section>
  );
}