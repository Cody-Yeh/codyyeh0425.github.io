import React from 'react';

const publications = [
  {
    heading: 'MethodsX, 2024',
    title:
      'Bioprocessing of human platelet concentrates to generate lysates and extracellular vesicles for therapeutic applications',
    authors:
      'Wei-Ting Yeh, Ezrin Yi-Ling Yu, Ya-Hsuan Lu, Dora Livkisa, Thierry Burnouf, David J. Lundy',
    role: 'First Author',
    contribution:
      'Consolidated and standardized platelet lysate and extracellular vesicle preparation procedures into a reproducible laboratory protocol.',
    pdf: '/MethodsX_2024.pdf',
  },
  {
    heading: 'Biomaterials, 2024',
    title:
      'Extracellular vesicles purified from serum-converted human platelet lysates offer strong protection after cardiac ischaemia/reperfusion injury',
    authors:
      'Dora Livkisa, Tzu-Hsin Chang, Thierry Burnouf, Andreas Czosseck, Nhi Thao Ngoc Le, Gleb Shamrin, Wei-Ting Yeh, Masao Kamimura, David J. Lundy',
    role: 'Co-Author',
    contribution:
      'Supported biomaterials-related experiments, data analysis, and experimental validation.',
    pdf: '/Biomaterials_2024.pdf',
  },
  {
    heading: 'Immunity & Ageing, 2024',
    title:
      'Distinct immunomodulation elicited by young versus aged extracellular vesicles in bone marrow-derived macrophages',
    authors:
      'Dora Livkisa, Tsung-Lin Lee, Wei-Ting Yeh, Manuel S.V. Jaimes, Barbara Szomolay, Chia-Te Liao, David J. Lundy',
    role: 'Co-Author',
    contribution:
      'Contributed to macrophage-related experiments, RT-qPCR, and data interpretation.',
    pdf: '/Immunity_Ageing_2024.pdf',
  },
];

export default function Publications() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">

      {/*Title OUTSIDE */}
      <h1 className="mb-20 text-center text-3xl font-bold tracking-[-0.02em] text-gray-900 sm:text-5xl">
        Publications
      </h1>

      {/*Cards */}
      <div className="space-y-10">
        {publications.map((pub, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-200 bg-white px-8 py-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            
            {/* Journal */}
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
              {pub.heading}
            </h2>

            <div className="space-y-2 text-[1.05rem] leading-relaxed text-gray-700 dark:text-gray-300">

              {/* Title */}
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Title:
                </span>{' '}
                {pub.title}
              </p>

              {/* Authors */}
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Authors:
                </span>{' '}
                {pub.authors.split('Wei-Ting Yeh').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Wei-Ting Yeh
                      </span>
                    )}
                  </span>
                ))}
              </p>

              {/* Role */}
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Role:
                </span>{' '}
                <span className="font-semibold">
                  {pub.role}
                </span>{' '}
                🏅
              </p>

              {/* Contribution */}
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Contribution:
                </span>{' '}
                {pub.contribution}
              </p>
            </div>

            {/* Button */}
            <a
              href={pub.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-lg bg-[#2E57A6] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}