"use client"

import { CommitsList } from "@/components/common/commits-list";
import { Card } from "@/components/ui/card";
import { GITHUB_USERNAME } from "@/lib/github";
import GitHubCalendar from 'react-github-calendar';

export function GitHubContributions() {
  return (
    <div className="space-y-6">
      {/* <OSContributions /> */}

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
          <GitHubCalendar
            username={GITHUB_USERNAME}
            blockSize={13.5}
          />
        </div>
      </Card>

      <Card className="p-6">
        <CommitsList />
      </Card>
    </div>
  )
}