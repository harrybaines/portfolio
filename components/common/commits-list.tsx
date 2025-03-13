"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { useGithubCommits } from "@/hooks/use-github-commits"
import { formatDistanceToNow } from "date-fns"
import { GitCommit } from "lucide-react"

export function CommitsList() {
  const { commits, loading } = useGithubCommits()

  // Function to trim commit message
  const trimMessage = (message: string, maxLength: number = 60) => {
    const firstLine = message.split('\n')[0]
    return firstLine.length > maxLength ? `${firstLine.substring(0, maxLength)}...` : firstLine
  }

  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex items-start gap-3 animate-pulse"
          >
            <Skeleton className="h-4 w-4 mt-1 rounded-full bg-muted" />
            <div className="flex-1 space-y-2">
              <div className="flex gap-1">
                <Skeleton className="h-4 w-24 bg-muted" />
                <Skeleton className="h-4 w-32 bg-muted" />
              </div>
              <Skeleton className="h-4 w-3/4 bg-muted" />
            </div>
            <Skeleton className="h-4 w-24 bg-muted" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-3 font-mono text-sm">
      {commits.map((commit) => (
        <a
          key={commit.sha}
          href={commit.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <GitCommit className="h-4 w-4 mt-1 text-primary hidden sm:block flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
              <div className="flex items-center gap-2 sm:gap-1 flex-shrink-0">
                <GitCommit className="h-4 w-4 text-primary sm:hidden" />
                <span className="text-primary group-hover:text-primary/80">
                  {commit.repository.name}
                </span>
                <span className="hidden sm:inline">:</span>
              </div>
              <span className="text-muted-foreground group-hover:text-foreground sm:ml-1 overflow-hidden text-ellipsis whitespace-nowrap">
                {trimMessage(commit.commit.message)}
              </span>
            </div>
            <span className="block sm:hidden text-muted-foreground/60 whitespace-nowrap text-xs mt-1">
              {formatDistanceToNow(new Date(commit.commit.author.date), { addSuffix: true })}
            </span>
          </div>
          <span className="hidden sm:block text-muted-foreground/60 whitespace-nowrap text-sm flex-shrink-0">
            {formatDistanceToNow(new Date(commit.commit.author.date), { addSuffix: true })}
          </span>
        </a>
      ))}
    </div>
  )
}