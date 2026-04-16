import React from 'react';
import Image from 'next/image';

export default function Certifications() {
  const certs = [
    {
      title: 'Six Sigma Yellow Belt',
      org: 'Kennesaw State University (Coursera)',
      date: 'Mar 2026',
      logo: '/certifications/KennesawStateUniversity.png',
      link: 'https://www.coursera.org/account/accomplishments/specialization/JXBTDVZ70ANB',
    },
    {
      title: 'Google Data Analysis with Python',
      org: 'Google (Coursera)',
      date: 'Jan 2026',
      logo: '/certifications/google.png',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/0V7XRLNH2MB7',
    },
    {
      title: 'Excel Skills for Business',
      org: 'Macquarie University (Coursera)',
      date: 'Dec 2025',
      logo: '/certifications/MacquarieUniversity.png',
      link: 'https://www.coursera.org/account/accomplishments/verify/BLXYXM2ZL100',
    },
    {
      title: 'SOLIDWORKS 3D CAD',
      org: 'Dassault Systèmes (Coursera)',
      date: 'Feb 2026',
      logo: '/certifications/DassaultSystemes.png',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/6VQ8HHE3D0JC',
    },
    {
      title: 'SQL Essential Training',
      org: 'LinkedIn Learning',
      date: 'Apr 2026',
      logo: '/certifications/linkedin.png',
      link: 'https://www.linkedin.com/learning/certificates/9ba0ea1566d8b5b74bf80e244456e033cf3dd452177d2ec55f5dbfd27c7ea43e',
    },
    {
      title: 'Electronics Foundations',
      org: 'LinkedIn Learning',
      date: 'Apr 2026',
      logo: '/certifications/linkedin.png',
      link: 'https://www.linkedin.com/learning/certificates/83e3be6ba2d302503fff34649c82c1d15f966bba47b2faee8dcfd4a3f6191cb2?accountId=0&u=0&success=true&authUUID=ymdvnbdORG6ZPZeCude07A%3D%3D',
    },
    {
      title: 'Electron Microscopy (MSE1066)',
      org: 'University of Toronto',
      date: 'May 2025',
      logo: '/certifications/UofTMSE.png',
      link: '/certifications/mse1066.pdf',
    },
  ];

  return (
    <div className="w-full rounded-lg bg-white px-4 py-12 shadow-md dark:bg-gray-600">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Certifications
      </h1>

      <div className="space-y-6">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 rounded-lg border p-4 dark:border-gray-500"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center">
                <Image
                  src={cert.logo}
                  alt={cert.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <div className="font-semibold text-lg text-black dark:text-white">
                  {cert.title}
                </div>

                <div className="text-gray-600 dark:text-gray-300">
                  {cert.org} · {cert.date}
                </div>
              </div>
            </div>

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-md border px-3 py-1 text-sm text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                View Credential →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}