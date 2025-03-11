"use client"

import { CommitsList } from "@/components/common/commits-list";
import { Card } from "@/components/ui/card";
import { GITHUB_USERNAME } from "@/lib/github";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import GitHubCalendar from 'react-github-calendar';

export function GitHubContributions() {
  const { theme, systemTheme } = useTheme();
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  // Update colorScheme after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    const currentTheme = theme === 'system' ? systemTheme : theme;
    setColorScheme(currentTheme === 'dark' ? 'dark' : 'light');
  }, [theme, systemTheme]);

  return (
    <div className="space-y-6">
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-sm tracking-widest text-muted-foreground">
            GITHUB ACTIVITY
          </p>
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()}
          </p>
        </div>
        <div className="-mx-2">
          {mounted && (
            <GitHubCalendar
              username={GITHUB_USERNAME}
              blockSize={13.5}
              colorScheme={colorScheme}
            />
          )}
        </div>
      </Card>

      <Card className="p-6">
        <CommitsList />
      </Card>
    </div>
  )
}