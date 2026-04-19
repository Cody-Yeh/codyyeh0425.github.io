import React from "react";
import Image from "next/image";
import { educationData } from "../../constants/about";

export default function Education() {
  return (
    <div className="w-full rounded-lg bg-white px-6 py-10 shadow-md dark:bg-gray-600">

      {/* Title */}
      <h1 className="mb-10 text-center text-3xl font-bold text-slate-800 dark:text-white">
        Education
      </h1>

      <div className="border-t border-gray-200 dark:border-gray-700">
        {educationData.map((education, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 px-6 py-8 border-b border-gray-200 dark:border-gray-700
              ${idx % 2 === 0 
                ? "bg-gray-50 dark:bg-gray-700" 
                : "bg-white dark:bg-gray-800"
              }`}
          >
            
            {/* Left (logo + school) */}
            <div className="flex flex-col items-center text-center md:w-[220px] flex-shrink-0">
              <div className="relative h-[120px] w-[120px] mb-3">
                <Image
                  src={education.logo}
                  alt="University Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-lg font-semibold text-slate-800 dark:text-white">
                {education.university}
              </p>
            </div>

            {/* Right content */}
            <div className="flex-1">
              <div className="text-lg font-semibold text-slate-800 dark:text-white">
                {education.degree_type}
              </div>

              <div className="text-gray-700 dark:text-gray-200">
                {education.degree_name}
              </div>

              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {education.period}
              </div>

              <ul className="mt-3 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {education.gpa.map((item, i) => (
                  <li key={i}>
                    {item.label}:{" "}
                    <span className="font-semibold text-slate-800 dark:text-white">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>

              {education.transcript && (
                <div className="mt-4">
                  <a
                    href={education.transcript}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2E57A6] hover:underline"
                  >
                    View Transcript →
                  </a>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}