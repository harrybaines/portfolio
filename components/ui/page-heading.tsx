export function PageHeading({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-8 bg-primary/60"></div>
      <span className="text-sm font-mono tracking-wider text-muted-foreground">{label}</span>
    </div>
  )
}