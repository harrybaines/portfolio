import ContentWrapper from "@/app/components/ContentWrapper";
import { growthMapConfig, type LearnItem } from "@/config";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

// Helper component to render a single learn item
function LearnItem({
  item
}: {
  item: LearnItem;
}) {
  return (
    <li className="flex items-start">
      <div>
        <div className="flex items-center">
          <span className="font-medium">{item.emoji} {item.title}</span>
          {item.url && (
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:text-blue-700">
              <ExternalLink size={14} />
            </a>
          )}
        </div>
        <p className="text-sm text-neutral-600">{item.description}</p>
      </div>
    </li>
  );
}

export default function GrowthMapPage() {
  // Cast the config values to arrays with proper typing
  const contributionsArray = growthMapConfig.contributions as unknown as LearnItem[];
  const learningArray = growthMapConfig.currentlyLearning as unknown as LearnItem[];
  const setupArray = growthMapConfig.devSetup as unknown as LearnItem[];
  const aspirationsArray = growthMapConfig.other as unknown as LearnItem[];

  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 overflow-hidden">
      <div className="relative z-10 min-h-screen pt-12 md:pt-10 pb-10 flex flex-col">
        <div className="mx-auto w-full flex-1 flex flex-col">
          <ContentWrapper>
            <div className="max-w-3xl mx-auto"> {/* Narrower width for this page only */}
              <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4 text-neutral-800">My Growth Map</h1>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  A collection of pursuits, achievements, and aspirations.
                </p>
              </div>

              <div className="space-y-12">
                {/* Contributions Section */}
                <section>
                  <div className="relative rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
                    <div className="absolute -top-2.5 left-4 px-2 bg-white font-mono text-xs text-neutral-400">
                      contributions.md
                    </div>
                    <ul className="space-y-3">
                      {contributionsArray.map((item, i) => (
                        <LearnItem key={i} item={item} />
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Currently Learning Section */}
                <section>
                  <div className="relative rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
                    <div className="absolute -top-2.5 left-4 px-2 bg-white font-mono text-xs text-neutral-400">
                      learning.md
                    </div>
                    <ul className="space-y-3">
                      {learningArray.map((item, i) => (
                        <LearnItem key={i} item={item} />
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Dev Setup Section */}
                <section>
                  <div className="relative rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
                    <div className="absolute -top-2.5 left-4 px-2 bg-white font-mono text-xs text-neutral-400">
                      setup.md
                    </div>
                    <ul className="space-y-3">
                      {setupArray.map((item, i) => (
                        <LearnItem key={i} item={item} />
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Aspirations Section */}
                <section>
                  <div className="relative rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
                    <div className="absolute -top-2.5 left-4 px-2 bg-white font-mono text-xs text-neutral-400">
                      aspirations.md
                    </div>
                    <ul className="space-y-3">
                      {aspirationsArray.map((item, i) => (
                        <LearnItem key={i} item={item} />
                      ))}
                    </ul>
                  </div>
                </section>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/"
                  className="inline-flex items-center px-5 py-2.5 bg-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-700 shadow-sm transition-colors text-sm"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
}