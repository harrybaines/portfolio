"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  label?: string;
}

export default function BackButton({ href, label = "Back home" }: BackButtonProps) {
  return (
    <Link href={href} className="inline-flex items-center text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors text-sm">
      <ArrowLeft size={14} className="mr-2" />
      <span>{label}</span>
    </Link>
  );
}