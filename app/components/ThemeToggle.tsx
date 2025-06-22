"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-md border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-900" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 rounded-md border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 text-neutral-600 dark:text-neutral-400 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 text-neutral-600 dark:text-neutral-400 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}