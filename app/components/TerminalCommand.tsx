"use client";

interface TerminalCommandProps {
  showSecret: boolean;
}

export default function TerminalCommand({ showSecret }: TerminalCommandProps) {
  if (!showSecret) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-neutral-900 border-2 border-green-500 rounded-lg p-8 max-w-xl w-full mx-4 font-mono shadow-2xl">
        <div className="text-green-400 mb-4">$ sudo reveal-secret</div>
        <div className="text-neutral-300 space-y-2">
          <p>Access granted.</p>
          <p className="text-green-300">
            🎉 You found the hidden command!
          </p>
          <p className="text-sm">
            &quot;Good software, like wine, takes time.&quot; - Joel Spolsky
          </p>
        </div>
        <div className="mt-6 text-neutral-500 text-sm">
          Press Ctrl+H again or wait to dismiss...
        </div>
      </div>
    </div>
  );
}
