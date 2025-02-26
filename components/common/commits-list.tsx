"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { useGithubCommits } from "@/hooks/use-github-commits"
import { formatDistanceToNow } from "date-fns"
import { GitCommit } from "lucide-react"

export function CommitsList() {
  const { commits, loading } = useGithubCommits()

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
          className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <GitCommit className="h-4 w-4 mt-1 text-primary" />
          <span className="flex-1">
            Pushed 1 commit to{' '}
            <span className="text-primary group-hover:text-primary/80">
              {commit.repository.name}
            </span>
            :{' '}
            <span className="text-muted-foreground group-hover:text-foreground">
              {commit.commit.message.split('\n')[0]}
            </span>
          </span>
          <span className="text-muted-foreground/60 whitespace-nowrap">
            {formatDistanceToNow(new Date(commit.commit.author.date), { addSuffix: true })}
          </span>
        </a>
      ))}
    </div>
  )
}