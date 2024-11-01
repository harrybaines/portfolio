import { Badge } from "@/components/ui/badge";

export default function AvailableForWorkBadge() {
  return (
    <Badge className="text-green-700 bg-green-100 mb-6 animate-from-bottom py-0" style={{ "--index": 3 } as React.CSSProperties}>
      <div className="flex items-center gap-2 text-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-300"></span>
        </span>
        Available for work
      </div>
    </Badge>
  )
}