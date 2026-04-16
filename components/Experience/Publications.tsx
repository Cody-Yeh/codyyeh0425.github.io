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
    <div className="w-full rounded-lg bg-white px-4 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      
      <h1 className="mb-12 text-center text-3xl font-bold text-black dark:text-white">
        Publications
      </h1>

      <div className="space-y-12">
        {publications.map((pub, idx) => (
          <div key={idx} className="border-b pb-8 last:border-none">

            {/* Journal / Year */}
            <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
              {pub.heading}
            </h2>

            <div className="space-y-2 text-base leading-relaxed text-black dark:text-white">

              {/* Title */}
              <p>
                <span className="font-semibold">Title:</span> {pub.title}
              </p>

              {/* Authors */}
              <p>
                <span className="font-semibold">Authors:</span>{' '}
                {pub.authors.split('Wei-Ting Yeh').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="font-bold">
                        Wei-Ting Yeh
                      </span>
                    )}
                  </span>
                ))}
              </p>

              {/* Role */}
              <p>
                <span className="font-semibold">Role:</span>{' '}
                <span className="font-bold">
                  {pub.role}
                </span>{' '}
                🏅
              </p>

              {/* Contribution */}
              <p>
                <span className="font-semibold">Contribution:</span>{' '}
                {pub.contribution}
              </p>
            </div>

            {/* Button */}
            <a
              href={pub.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}