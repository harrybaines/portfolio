'use client';

import { ReactNode } from 'react';

interface SubsectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export function SubsectionHeading({ children, className = "" }: SubsectionHeadingProps) {
  return (
    <h4 className={`text-sm uppercase tracking-wide text-white/50 font-mono mb-3 ${className}`}>
      {children}
    </h4>
  );
}