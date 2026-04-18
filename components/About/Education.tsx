import React from "react";
import Image from "next/image";
import { educationData } from "../../constants/about";

export default function Education() {
  return (
    <div className="w-full">
      <h1 className="mb-12 text-center text-4xl font-bold tracking-[-0.02em] text-slate-800 dark:text-white">
        Education
      </h1>

      <div className="space-y-8">
        {educationData.map((education, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-200 bg-white px-8 py-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex flex-col gap-8 md:flex-row">
              {/* Left Column */}
              <div className="flex w-full flex-col items-center text-center md:w-[220px] md:flex-shrink-0">
                <a
                  href={education.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:opacity-90"
                >
                  <div className="relative mb-4 h-[200px] w-[200px]">
                    <Image
                      src={education.logo}
                      alt="University Logo"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <p className="text-xl md:text-2xl font-semibold leading-snug text-slate-800 dark:text-white">
                    {education.university}
                  </p>
                </a>
              </div>

              {/* Right Column */}
              <div className="flex-1">
                <div className="mb-1 text-2xl font-semibold text-slate-800 dark:text-white">
                  {education.degree_type}
                </div>

                <div className="mb-3 text-xl text-gray-700 dark:text-gray-200">
                  {education.degree_name}
                </div>

                <div className="mb-4 text-base text-gray-500 dark:text-gray-400">
                  {education.period}
                </div>

                <ul className="mb-4 list-inside list-disc space-y-1 text-base text-gray-700 dark:text-gray-300">
                  {education.gpa.map((item, gpaIdx) => (
                    <li key={gpaIdx}>
                      {item.label}: <span className="font-semibold text-slate-800 dark:text-white">{item.value}</span>
                    </li>
                  ))}
                </ul>

                {education.transcript && (
                  <div className="mt-5">
                    <a
                      href={education.transcript}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-[#2E57A6] transition hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      View Transcript →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}