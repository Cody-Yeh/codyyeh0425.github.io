import Image from 'next/image';

import Python from '../public/static/tech/python-logo.png';
import Excel from '../public/static/tech/excel.png';
import ImageJ from '../public/static/tech/imagej.png';
import Prism from '../public/static/tech/prism.png';
import SolidWorks from '../public/static/tech/solidworks.png';

export const techs: TechDictType[] = [
  'Python',
  'Excel',
  'ImageJ',
  'Prism',
  'SolidWorks',
];

export const techDict = {
  Python: Python,
  Excel: Excel,
  ImageJ: ImageJ,
  Prism: Prism,
  SolidWorks: SolidWorks,
};

export type TechDictType = keyof typeof techDict;

export default function TechBox({
  tech,
  bgColor = 'bg-gray-200 dark:bg-gray-600',
}: {
  tech: TechDictType;
  bgColor?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className={`h-fit w-full rounded-lg p-3 sm:p-4 ${bgColor}`}>
        <Image
          src={techDict[tech]}
          alt={tech}
          className="aspect-square w-full object-contain"
          sizes="30vw"
        />
      </div>
      <p className="pb-4 pt-1 text-center text-sm font-semibold md:text-base">{tech}</p>
    </div>
  );
}