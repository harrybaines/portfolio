"use client";

import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  bgColor?: string;
  borderBottom?: boolean;
}

export default function SectionWrapper({
  children,
  bgColor = "bg-white",
  borderBottom = true,
}: SectionWrapperProps) {
  const borderClasses = `
    ${borderBottom ? "border-b-3" : ""}
    ${borderBottom ? "border-amber-50" : ""}
  `;

  return (
    <section className={`py-20 px-6 ${bgColor} ${borderClasses}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}