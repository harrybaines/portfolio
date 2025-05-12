"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  label?: string;
}

export default function BackButton({ href, label = "Back home" }: BackButtonProps) {
  return (
    <Link href={href} className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors text-sm">
      <ArrowLeft size={14} className="mr-2" />
      <span>{label}</span>
    </Link>
  );
}