'use client';

import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <h3 className={`text-base uppercase tracking-wide text-white/50 font-mono mb-4 ${className}`}>
      {children}
    </h3>
  );
}