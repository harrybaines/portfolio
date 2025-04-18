"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type AnimatedTypingProps = {
  text: string;
  highlightText?: string;
  highlightClassname?: string;
  className?: string;
  duration?: number;
  delay?: number;
  cursor?: boolean;
};

export const AnimatedTyping = ({
  text,
  highlightText,
  highlightClassname = "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500",
  className,
  duration = 80,
  delay = 800,
  cursor = true,
}: AnimatedTypingProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingEffect);
          // Keep cursor visible for a few seconds after typing finishes
          setTimeout(() => {
            setShowCursor(false);
          }, 3000);
        }
      }, duration);

      return () => clearInterval(typingEffect);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, duration, delay]);

  const renderText = () => {
    if (!highlightText) return displayedText;

    const parts = displayedText.split(highlightText);
    if (parts.length === 1) return displayedText;

    return (
      <>
        {parts[0]}
        <span className={highlightClassname}>{highlightText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={cn("relative inline-block", className)} ref={containerRef}>
      <div className="whitespace-nowrap">
        {renderText()}
        {cursor && showCursor && (
          <span className="animate-blink inline-block h-[1em] w-[0.12em] bg-teal-400 ml-1 align-middle"></span>
        )}
      </div>
    </div>
  );
};