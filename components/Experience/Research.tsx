import React from 'react';
import Image from 'next/image';
import { researchData } from '../../constants/experience';
import { MyTableRow } from '../utils';

export default function ResearchExperience() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Research Experience
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-screen w-full border-separate border-spacing-0">
          <tbody>
            {researchData.map((research, idx) => (
              <MyTableRow key={idx} idx={idx}>

                {/* Logo */}
                <th className="flex basis-1/6 items-center justify-center max-sm:basis-1/4">
                  <div className="flex h-[90px] w-[90px] items-center justify-center">
                    <Image
                      src={research[2]}
                      alt="Lab logo"
                      width={72}
                      height={72}
                      className="object-contain"
                    />
                  </div>
                </th>

                {/* Lab / Organization */}
                <th className="flex basis-2/6 items-center text-blue-500 dark:text-blue-300 max-sm:basis-2/4">
                  {research[0]}
                </th>

                {/* Details */}
                <td className="flex basis-3/6 items-center px-5 max-sm:basis-2/4">
                  {research[1]}
                </td>

              </MyTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}