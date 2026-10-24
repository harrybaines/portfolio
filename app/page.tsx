import KonamiCode from "./components/KonamiCode";
import { DEFAULT_VARIATION, getVariation } from "./variations";

// The live homepage. Change DEFAULT_VARIATION in app/variations/index.ts to switch designs.
export default function Home() {
  const { Component } = getVariation(DEFAULT_VARIATION)!;
  return (
    <>
      <KonamiCode />
      <div data-variation={DEFAULT_VARIATION}>
        <Component />
      </div>
    </>
  );
}
