"use client"

import * as React from "react"

/**
 * Small hidden rewards for people who poke around. Every one of these is
 * optional decoration — nothing here is load-bearing for reading the site.
 */

function isTyping(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable ||
      ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
  )
}

/** Fires when the visitor types `word` anywhere on the page. */
export function useSecretWord(word: string, onFound: () => void) {
  const buffer = React.useRef("")
  const found = React.useRef(onFound)

  React.useEffect(() => {
    found.current = onFound
  }, [onFound])

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey || isTyping(e.target)) return
      if (e.key.length !== 1) return
      buffer.current = (buffer.current + e.key.toLowerCase()).slice(-word.length)
      if (buffer.current === word.toLowerCase()) {
        buffer.current = ""
        found.current()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [word])
}

/** Turns a value on, then off again after `ms`. */
export function useFlash(ms = 2600) {
  const [on, setOn] = React.useState(false)
  React.useEffect(() => {
    if (!on) return
    const t = setTimeout(() => setOn(false), ms)
    return () => clearTimeout(t)
  }, [on, ms])
  return [on, () => setOn(true)] as const
}

/** A greeting for anyone who opens devtools. */
export function Console() {
  React.useEffect(() => {
    console.log(
      "%cHarry Baines",
      "font-size:22px;font-weight:600;letter-spacing:-0.02em"
    )
    console.log(
      "%cYou found the console. Try typing `harry` on the page, or press d.\nhello@harrybaines.com",
      "font-family:monospace;line-height:1.6"
    )
  }, [])
  return null
}

/** Click to cycle a short list of alternative captions. */
export function Caption({
  lines,
  className,
}: {
  lines: string[]
  className?: string
}) {
  const [i, setI] = React.useState(0)
  return (
    <button
      type="button"
      onClick={() => setI((n) => (n + 1) % lines.length)}
      className={className}
      aria-label="Next caption"
    >
      {lines[i]}
    </button>
  )
}
