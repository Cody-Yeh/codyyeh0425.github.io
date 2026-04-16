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
                <th className="flex basis-1/4 items-center max-sm:basis-1/3">
                  <Image
                    src={admin[2]}
                    alt="Organization logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </th>
                <td className="flex basis-3/4 items-center px-5 max-sm:basis-2/3">
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