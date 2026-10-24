import { notFound } from "next/navigation";
import { VariationSwitcher } from "@/app/components/variation-switcher";
import { getVariation, variations } from "@/app/variations";

export function generateStaticParams() {
  return variations.map(({ slug }) => ({ id: slug }));
}

export default async function VariationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const variation = getVariation(id);
  if (!variation) notFound();

  const { Component } = variation;
  return (
    <>
      <div data-variation={variation.slug}>
        <Component />
      </div>
      <VariationSwitcher
        index={variations.indexOf(variation)}
        slugs={variations.map((v) => v.slug)}
        name={variation.name}
      />
    </>
  );
}
