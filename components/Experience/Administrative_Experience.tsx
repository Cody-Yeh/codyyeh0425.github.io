import React from 'react';
import Image from 'next/image';
import { adminData } from '../../constants/experience';
import { MyTableRow } from '../utils';

export default function AdministrativeExperience() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Administrative Experience
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-screen w-full border-separate border-spacing-0">
          <tbody>
            {adminData.map((admin, idx) => (
              <MyTableRow key={idx} idx={idx}>
                {/* Logo */}
                <th className="flex basis-1/6 items-center justify-center max-sm:basis-1/4">
                  <div className="flex h-[90px] w-[90px] items-center justify-center">
                    <Image
                      src={admin[2]}
                      alt="Organization logo"
                      width={72}
                      height={72}
                      className="object-contain"
                    />
                  </div>
                </th>

                {/* Department Name */}
                <th className="flex basis-2/6 items-center text-blue-500 dark:text-blue-300 max-sm:basis-2/4">
                  {admin[0]}
                </th>

                {/* Details */}
                <td className="flex basis-3/6 items-center px-5 max-sm:basis-2/4">
                  {admin[1]}
                </td>
              </MyTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}