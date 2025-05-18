export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 z-0 opacity-[0.02]">
      <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
}