import React from 'react';

const osContributions = [
  { project: "Ivy", link: "https://github.com/ivy-llc/ivy", contribution: "Added JAX to numpy function conversions", date: "July 25, 2023" },
  { project: "Buildspace", link: "https://github.com/buildspace/buildspace-projects", contribution: "Added enhancements to AI avatar tutorial project", date: "Jan 19, 2023" },
];

export default function OsContributions() {
  return (
    <div className="mb-20 animate-from-bottom" style={{ "--index": 4 } as React.CSSProperties}>
      <h1 className="font-semibold mb-4 text-gray-400 font-mono">~/OS Contributions</h1>
      <div className="flex flex-col">
        {osContributions.map((contribution, index) => (
          <div key={index}>
            <div className="flex flex-wrap justify-between items-center py-3">
              <div className="flex-grow mr-4">
                <a href={contribution.link} className="font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                  {contribution.project}
                </a>
                <span className="mx-2">-</span>
                <span className="text-gray-700 dark:text-gray-300">{contribution.contribution}</span>
              </div>
              <span className="text-sm text-gray-500 text-right">{contribution.date}</span>
            </div>
            {index < osContributions.length - 1 && <hr className="border-gray-200 dark:border-gray-700" />}
          </div>
        ))}
      </div>
    </div >
  )
}