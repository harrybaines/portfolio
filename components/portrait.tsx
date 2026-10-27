"use client"

import Image from "next/image"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Placeholder portrait. Drop a real photo at /public/harry.jpg and change
 * `src` below — every variation picks it up.
 */
export function Portrait({
  size = 120,
  className,
  frame = "circle",
  priority,
}: {
  size?: number
  className?: string
  frame?: "circle" | "square"
  priority?: boolean
}) {
  return (
    <span
      className={cn(
        "group relative inline-block overflow-hidden bg-muted",
        frame === "circle" ? "rounded-full" : "rounded-none",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/harry.svg"
        alt="Harry Baines"
        width={size}
        height={size}
        unoptimized
        priority={priority}
        draggable={false}
        className="h-full w-full select-none object-cover saturate-[0.65] transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.06] group-hover:saturate-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </span>
  )
}

/**
 * The wider placeholder — him at the desk. Used on the about pages.
 * Replace with a real photo at /public/harry-desk.jpg when you have one.
 */
export function Snapshot({
  className,
  caption,
}: {
  className?: string
  caption?: string
}) {
  return (
    <figure className={className}>
      <span className="block overflow-hidden bg-muted">
        <Image
          src="/harry-desk.svg"
          alt="Harry Baines at his desk"
          width={640}
          height={420}
          unoptimized
          draggable={false}
          className="h-full w-full select-none object-cover saturate-[0.65] transition-[filter] duration-700 ease-out hover:saturate-100"
        />
      </span>
      {caption ? (
        <figcaption className="label mt-3">{caption}</figcaption>
      ) : null}
    </figure>
  )
}
