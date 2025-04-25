'use client'

import Link from 'next/link';

interface BackButtonProps {
  href: string;
  label?: string;
}

export default function BackButton({ href, label = 'Back to all articles' }: BackButtonProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 pb-16">
      <Link
        href={href}
        className="inline-flex items-center text-sm text-amber-700 hover:text-amber-900 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
          <path d="m15 18-6-6 6-6" />
        </svg>
        {label}
      </Link>
    </div>
  );
}