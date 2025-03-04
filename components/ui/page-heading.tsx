export function PageHeading({ label }: { label?: string }) {
  return (
    <p className="font-mono text-sm tracking-widest text-muted-foreground">
      {label}
    </p>
  )
}