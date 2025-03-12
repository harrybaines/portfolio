
interface BlogTLDRProps {
  description: string;
}

export default function BlogTLDR({ description }: BlogTLDRProps) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-6 py-4 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <span className="text-sm font-medium font-mono text-muted-foreground mb-1">
            TLDR
          </span>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}