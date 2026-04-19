import React from 'react';
import { awardData } from '../../constants/about';

export default function Awards() {
  return (
    <div className="w-full rounded-lg bg-white px-6 py-10 shadow-md dark:bg-gray-600">
      
      {/* Title */}
      <h1 className="mb-10 text-center text-3xl font-bold text-slate-800 dark:text-white">
        Awards
      </h1>

      <div className="border-t border-gray-200 dark:border-gray-700">
        {awardData.map((award, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row gap-6 px-6 py-6 border-b border-gray-200 dark:border-gray-700
              ${idx % 2 === 0 
                ? "bg-gray-50 dark:bg-gray-700" 
                : "bg-white dark:bg-gray-800"
              }`}
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