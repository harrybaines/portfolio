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
  // Explicitly cast arrays to standard Array types
  const contributions = growthMapConfig.contributions as unknown as Array<LearnItem>;
  const currentlyLearning = growthMapConfig.currentlyLearning as unknown as Array<LearnItem>;
  const devSetup = growthMapConfig.devSetup as unknown as Array<LearnItem>;
  const other = growthMapConfig.other as unknown as Array<LearnItem>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-neutral-800">My Growth Map</h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          A collection of pursuits, achievements, and aspirations - charting my path of personal growth.
        </p>
      </div>

      <div className="space-y-12">
        {/* Contributions Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            📄 Things I&apos;ve contributed to
          </h2>
          <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6">
            <ul className="space-y-3">
              {contributions.map((item, i) => (
                <LearnItem key={i} item={item} />
              ))}
            </ul>
          </div>
        </section>

        {/* Currently Learning Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            📚 Things I&apos;m learning
          </h2>
          <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6">
            <ul className="space-y-3">
              {currentlyLearning.map((item, i) => (
                <LearnItem key={i} item={item} />
              ))}
            </ul>
          </div>
        </section>

        {/* Dev Setup Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            💻 Dev Setup
          </h2>
          <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6">
            <ul className="space-y-3">
              {devSetup.map((item, i) => (
                <LearnItem key={i} item={item} />
              ))}
            </ul>
          </div>
        </section>

        {/* Other Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            🔮 Aspirations
          </h2>
          <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6">
            <ul className="space-y-3">
              {other.map((item, i) => (
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
  );
}