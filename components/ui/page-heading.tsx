export function PageHeading({ label }: { label?: string }) {
  return (
    <p className="font-mono text-md tracking-widest text-muted-foreground">
      {label}
    </p>
  )
}