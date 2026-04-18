import React from 'react';
import Image from 'next/image';

export default function Extracurricular() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Extracurricular Activities
      </h1>

      {/* ================= MAPLE ================= */}
      <div className="rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
        
        {/* TEXT */}
        <div className="text-black dark:text-white">
          <h2 className="text-2xl font-bold">
            Feng Hsing Youth Medical Service Corps (楓杏青年醫學服務團)
          </h2>

          <p className="mt-3">
            Participated in student-led medical service and outreach activities at Taipei Medical University.
          </p>

          <ul className="mt-3 ml-6 list-disc">
            <li>Participated in musical theatre performances.</li>
            <li>Designed and taught paired dance activities.</li>
            <li>Served in the equipment team (器材組), supporting logistics and event setup.</li>
            <li>Acted as a team leader in student camps.</li>
          </ul>
        </div>

        {/* IMAGES */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Image
            src="/extracurricular/maple_double.jpg"
            alt="Paired dance"
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
          <Image
            src="/extracurricular/maple_musical.jpg"
            alt="Musical performance"
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
          <Image
            src="/extracurricular/maple_instrument.jpg"
            alt="Equipment team"
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
          <Image
            src="/extracurricular/maple_lead.jpg"
            alt="Leadership"
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* ================= BASEBALL ================= */}
      <div className="mt-10 rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
        
        <div className="text-black dark:text-white">
          <h2 className="text-2xl font-bold">
            Department Baseball Team – Runner-up (系棒亞軍)
          </h2>

          <ul className="mt-3 ml-6 list-disc">
            <li>Achieved runner-up in departmental baseball competition.</li>
            <li>Demonstrated teamwork and communication in competitive games.</li>
            <li>Developed discipline and collaboration through training and matches.</li>
          </ul>
        </div>

        <div className="mt-6">
          <Image
            src="/extracurricular/baseball_runnerup.jpg"
            alt="Baseball team"
            width={800}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>

      {/* ================= BASKETBALL ================= */}
      <div className="mt-10 rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
        
        <div className="text-black dark:text-white">
          <h2 className="text-2xl font-bold">
            Biomedical Engineering Basketball Team (系籃成員)
          </h2>

          <ul className="mt-3 ml-6 list-disc">
            <li>Active member of the departmental basketball team.</li>
            <li>Participated in inter-department competitions.</li>
            <li>Strengthened teamwork, communication, and resilience in fast-paced environments.</li>
          </ul>
        </div>

        <div className="mt-6">
          <Image
            src="/extracurricular/basketball_team.jpg"
            alt="Basketball team"
            width={800}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>

    </div>
  );
}