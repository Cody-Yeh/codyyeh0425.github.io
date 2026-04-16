import { StaticImageData } from "next/image";
import NCKU from '../public/logos/ncku.png';
import TBMS from '../public/logos/tbms.png';
import TMUManagement from '../public/logos/tmu_management.png';
import PericardiumPatch from '../public/project_img/pericardium_patch.png';
import ElectrospinningProject from '../public/project_img/ElectrospinningProject.png';
import SCPL from '../public/project_img/SCPL.png';
import BMDM from '../public/project_img/BMDM.png';
import MethodX from '../public/project_img/MethodX.png';


type IndustryDataType = [React.ReactNode, React.ReactNode, StaticImageData];

const industryData: IndustryDataType[] = [
  [
    <a
      href="https://web.hosp.ncku.edu.tw/nckm/english/HomeStyle.aspx?Type=11&ContentPage=0"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
    >
      National Cheng Kung University Hospital
    </a>,
    <div>
      <div className="text-black dark:text-white">
        <b>Title:</b> Biomedical Engineer Intern
      </div>

      <div>
        <b className="text-black dark:text-white">Dates: </b>Jan. 2024 - Feb. 2024
      </div>

      <p className="mt-2 text-black dark:text-white">
        <b>Description:</b> Performed functional testing and supported troubleshooting and preventive maintenance of clinical monitoring devices, with exposure to imaging and surgical systems.
      </p>
    </div>,
    NCKU,
  ],
  [
    <a
      href="https://www.tbms.com.tw/en-us/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
    >
      TBMS International Corporation
    </a>,
    <div>
      <div className="text-black dark:text-white">
        <b>Title:</b> Biomedical Engineer Intern
      </div>

      <div>
        <b className="text-black dark:text-white">Dates: </b>Jul. 2023 - Aug. 2023
      </div>

      <p className="mt-2 text-black dark:text-white">
        <b>Description:</b> Tested medical laser and imaging systems and supported installation across multiple healthcare facilities, ensuring system performance and reliability.
      </p>
    </div>,
    TBMS,
  ],
];

const projectData: IndustryDataType[] = [
  [
  <div className="text-blue-500 dark:text-blue-300">
    1. 1. Standardization of Platelet Lysate Processing and Extracellular Vesicle Isolation (MethodsX)
  </div>,
  <div>
    <div className="text-black dark:text-white">
      <b>Supervisor: </b>
      <a
        href="https://hub.tmu.edu.tw/en/persons/david-j-lundy/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        David J. Lundy
      </a>
    </div>

    <div>
      <b className="text-black dark:text-white">Dates: </b>
      Feb. 2024 – Jun. 2024
    </div>

    <div>
      <b className="text-black dark:text-white">Description: </b>
    </div>

    <ul className="ml-0 list-disc list-inside text-black dark:text-white">
      <li>
        Contributed to the <b>standardization of platelet lysate processing workflows</b> (SCPL, FTPL, PPL, HPPL) for reproducible biomaterial preparation.
      </li>
      <li>
        Consolidated existing laboratory procedures into a <b>structured and reproducible protocol framework</b> for extracellular vesicle (EV) isolation.
      </li>
      <li>
        Supported development of <b>consistent and scalable workflows</b> to improve reproducibility across experimental batches.
      </li>
      <li>
        Organized and refined protocol documentation for <b>peer-reviewed publication in MethodsX</b>.
      </li>
      <li>
        Gained experience in <b>SOP development, process standardization, and experimental reproducibility</b>.
      </li>
    </ul>
  </div>,
  MethodX,
  ],
  [
  <div className="text-blue-500 dark:text-blue-300">
    2. Gene Expression Profiling of Macrophages with Extracellular Vesicles
  </div>,
  <div>
    <div className="text-black dark:text-white">
      <b>Supervisor: </b>
      <a
        href="https://hub.tmu.edu.tw/en/persons/david-j-lundy/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        David J. Lundy
      </a>
    </div>
    <div>
      <b className="text-black dark:text-white">Dates: </b>
      Sep. 2023 – Jan. 2024
    </div>
    <div>
      <b className="text-black dark:text-white">Description: </b>
    </div>
    <ul className="ml-0 list-disc list-inside text-black dark:text-white">
      <li>
        Evaluated <b>gene expression profiles</b> in bone marrow–derived macrophages following treatment with extracellular vesicles.
      </li>
      <li>
        Quantified the impact of <b>platelet lysate–derived EVs</b> on inflammatory (M1) and anti-inflammatory (M2) markers.
      </li>
      <li>
        Interpreted experimental results to identify <b>EV-driven modulation of macrophage polarization</b>, and presented findings in a competitive research setting.
      </li>
    </ul>
  </div>,
  SCPL,
  ],
  [
  <div className="text-blue-500 dark:text-blue-300">
    3. Age-Related Changes in Plasma Extracellular Vesicles and Macrophage Response
  </div>,
  <div>
    <div className="text-black dark:text-white">
      <b>Supervisor: </b>
      <a
        href="https://hub.tmu.edu.tw/en/persons/david-j-lundy/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        David J. Lundy
      </a>
    </div>
    <div>
      <b className="text-black dark:text-white">Dates: </b>
      Jan. 2023 – Jun. 2023
    </div>
    <div>
      <b className="text-black dark:text-white">Description: </b>
    </div>
    <ul className="ml-0 list-disc list-inside text-black dark:text-white">
      <li>
        Investigated <b>age-dependent changes</b> in extracellular vesicle (EV) composition in mouse plasma, including size, concentration, and miRNA cargo.
      </li>
      <li>
        Evaluated the effects of <b>young vs. aged EVs</b> on bone marrow–derived macrophages (BMDMs), focusing on inflammatory (M1) and anti-inflammatory (M2) gene expression.
      </li>
      <li>
        Identified <b>differential immunomodulatory responses</b>, where aged plasma induced stronger pro-inflammatory signaling, while isolated EVs exhibited distinct and more complex regulatory effects.
      </li>
      <li>
        Demonstrated that EVs function as a <b>separate regulatory component</b> from whole plasma, with implications for aging-related inflammation and therapeutic strategies.
      </li>
    </ul>
  </div>,
  BMDM,
  ],
  [
  <a
    href="https://www.lundylab.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline dark:text-blue-300"
  >
    4. Decellularized Pericardium Biomaterials Study (Published Outcome)
  </a>,
  <div>
    <div className="text-black dark:text-white">
      <b>Supervisor: </b>
      <a
        href="https://hub.tmu.edu.tw/en/persons/david-j-lundy/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        David J. Lundy
      </a>
    </div>
    <div>
      <b className="text-black dark:text-white">Dates: </b>Sep. 2022 - Jan. 2024
    </div>
    <div>
      <b className="text-black dark:text-white">Description: </b>
    </div>
    <ul className="ml-6 list-disc list-inside text-black dark:text-white">
      <li>
        Participated in a biomaterials research project involving <b>decellularized pericardium</b> for cardiac repair, resulting in a <b>peer-reviewed publication</b>.
      </li>
      <li>
        Conducted <b>sample preparation</b> and supported experimental workflows for extracellular vesicle (EV) studies.
      </li>
      <li>
        Performed <b>ImageJ-based data analysis</b> and assisted in organizing experimental results and figure preparation.
      </li>
      <li>
        Collaborated within a <b>structured lab environment</b> following standardized research protocols.
      </li>
    </ul>
  </div>,
  PericardiumPatch,
  ],
  [
  <div className="text-blue-500 dark:text-blue-300">
    5. Electrospinning and Characterization of Porous Biomaterials
  </div>,
  <div>
    <div className="text-black dark:text-white">
      <b>Supervisor: </b>David J. Lundy
    </div>
    <div>
      <b className="text-black dark:text-white">Dates: </b>
      Feb. 2022 - Jun. 2024
    </div>
    <div>
      <b className="text-black dark:text-white">Description: </b>
    </div>
    <ul className="ml-0 list-disc list-inside text-black dark:text-white">
      <li>
        Learned how to Fabricate <b>porous biomaterial scaffolds</b> using electrospinning, controlling key parameters such as voltage, tip-to-collector distance, and environmental conditions.
      </li>
      <li>
        Optimized processing conditions to achieve stable fiber formation and consistent scaffold morphology.
      </li>
      <li>
        Acquired <b>scanning electron microscopy (SEM)</b> images to characterize fiber structure and surface morphology.
      </li>
      <li>
        Performed <b>quantitative ImageJ analysis</b> to measure pore size distribution (average ~0.93 μm.
      </li>
      <li>
        Established foundational understanding of <b>structure–property relationships</b> in tissue engineering scaffolds.
      </li>
    </ul>
  </div>,
  ElectrospinningProject,
  ],
];


  
const researchData = [
  [
    <a
      href="https://www.lundylab.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
    >
      David Lundy's Lab, Taipei Medical University
    </a>,
    <div>
      <div className="text-black dark:text-white">
        <b>Title:</b> Undergraduate Researcher
      </div>

      {/*Supervisor */}
      <div className="text-black dark:text-white">
        <b>Supervisor:</b>{' '}
        <a
          href="https://hub.tmu.edu.tw/en/persons/david-j-lundy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          David J. Lundy
        </a>
      </div>

      <div>
        <b className="text-black dark:text-white">Dates: </b>Feb. 2022 - Jun. 2024
      </div>

      <p className="mt-2 text-black dark:text-white">
        <b>Description:</b> Conducted research on extracellular vesicles and platelet lysate for therapeutic applications, performed RT-qPCR analysis, and co-authored publications in <b>Biomaterials</b> and <b>Immunity &amp; Ageing</b>.
      </p>
    </div>,
  ],
];

const adminData = [
  [
    <a
      href="https://eng.tmu.edu.tw/Front/Academic/Management/Page.aspx?id=rLpFhefWvVw="
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
    >
      Taipei Medical University, College of Management
    </a>,
    <div>
      <div className="font-semibold text-lg text-black dark:text-white">
        Title: Administrative Assistant (Part-time)
      </div>

      <div>
        <b className="text-black dark:text-white">Dates: </b>Oct. 2021 - Jan. 2024
      </div>

      <p className="mt-2 text-black dark:text-white">
        <b>Description:</b> Supported administrative operations, scheduling, and documentation for academic programs, ensuring smooth coordination and daily office workflow.
      </p>
    </div>,
    TMUManagement,
  ],
];

const researchInterests = [
  'Machine Learning',
  'Representation Learning',
  'Sound Separation',
  'Text-to-Music Generation',
  'Unsupervised Learning',
  'Natural Language Processing',
];

export { industryData, projectData, researchData, adminData, researchInterests };