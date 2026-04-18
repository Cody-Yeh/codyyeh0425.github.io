import React from 'react';
import { awardData } from '../../constants/about';

export default function Awards() {
  return (
    <div className="w-full">
      <h1 className="mb-12 text-center text-4xl font-bold tracking-[-0.02em] text-slate-800 dark:text-white">
        Awards
      </h1>

      <div className="space-y-8">
        {awardData.map((award, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white px-8 py-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:flex-row md:items-start"
          >
            {/* Year */}
            <div className="w-[80px] flex-shrink-0 text-lg font-semibold text-gray-500 dark:text-gray-400">
              {award.year}
            </div>

            {/* Content */}
            <div className="flex-1 space-y-2">
              {/* Title */}
              <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                {award.title}
              </h2>

              {/* Organization */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {award.org}
              </p>

              {/* Topic */}
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-medium">Topic:</span> {award.topic}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}