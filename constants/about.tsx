import UofT from '../public/logos/uoft.png';
import TMU from '../public/logos/tmu.png';

const descriptionData = [
  <>
    My name is <b>Wei-Ting (Cody) Yeh 葉威廷</b>. I am a Materials Science & Engineering graduate based in Toronto, with a background in Biomedical Engineering and hands-on experience in medical device systems, equipment testing, and process-related engineering work.
     </>,
  <>
    I have worked with clinical monitoring devices, imaging systems, and medical laser equipment, focusing on functional testing, performance verification, and equipment reliability. During my internship at{' '}
    <a
      href="https://www.tbms.com.tw/en-us/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      TBMS International Corporation
    </a>
    , I performed preventive maintenance, troubleshooting, and supported installation and commissioning of medical devices across clinical environments.
  </>,
  <>
    In addition, I gained experience in hospital settings, supporting device verification and equipment-related work at{' '}
    <a
      href="https://web.hosp.ncku.edu.tw/nckm/english/HomeStyle.aspx?Type=11&ContentPage=0"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      National Cheng Kung University Hospital
    </a>
    . My technical background also includes SEM characterization and data analysis using Python, Excel, and GraphPad Prism.
  </>,
  <>
    <b>I am particularly interested in process improvement, equipment reliability, and quality engineering, and I am currently seeking opportunities in the medical device or manufacturing industry.</b>
  </>,
];


const title = (
  <b>
    Materials & Biomedical Engineering
    <br />
    Process, Quality & Equipment
  </b>
);

const educationData = [
  {
    university: "University of Toronto(UofT)",
    link: "https://www.utoronto.ca/",
    logo: UofT,
    degree_type: "Master of Engineering",
    degree_name: "Materials Science & Engineering",
    period: "2024 - 2025",
    transcript: "/transcripts/uoft_transcript.pdf",
    gpa: [
      { label: "GPA", value: "3.74 / 4.0" },
      {
        label: "Relevant Courses",
        value:
          "Emerging Applications in Biomaterials, Smart Materials & Structures, Practical Aspects of Electron Microscopy, Forensic Engineering, Fundamentals of Chemical Engineering, Alternative Energy Systems",
      },
    ],
  },
  {
    university: "Taipei Medical University",
    link: "https://eng.tmu.edu.tw/",
    logo: TMU,
    degree_type: "Bachelor of Science",
    degree_name: "Biomedical Engineering",
    period: "2020 - 2024",
    transcript: "/transcripts/tmu_transcript.pdf",
    gpa: [
      { label: "GPA", value: "3.91 / 4.0" },
      {
        label: "Relevant Courses",
        value:
          "Medical Electronics, Medical Image Reconstruction & 3D Printing Techniques, Medical Device Regulations & Compliance (ISO 13485,FDA classification), Biostatistics",
      },
    ],
  },
];

const awardData = [
  [
    2024,
    <>Honorable Mention – Special Research Final Oral Presentation</>,
    <>
      • Awarded by the Department of Biomedical Engineering for outstanding research presentation. <br />
      • Research topic: Gene expression profiling in bone marrow-derived macrophages from mice upon incorporation of extracellular vesicles purified from serum-converted human platelet lysates.
    </>,
  ],
  [
    2023,
    <>Excellent Work Award – Special Research Final Oral Presentation</>,
    <>
      • Awarded by the Department of Biomedical Engineering. <br />
      • Research topic: Changes in mouse blood plasma extracellular vesicles composition with age and their role in macrophage response to kidney injury.
    </>,
  ],
];

const contactData = [
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="m-auto inline h-5 w-7 pr-2"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
    <div className="max-sm:hidden">Email:</div>
    <a
      href="mailto:philip910323@gmail.com"
      className="ml-10 basis-full break-words font-normal text-blue-500 hover:underline dark:text-blue-300 max-sm:ml-1"
    >
      codyyeh0425@gmail.com
    </a>
  </>,
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="m-auto inline h-5 w-7 pr-2"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
    <div className="max-sm:hidden">LinkedIn:</div>
    <a
      href="https://www.linkedin.com/in/wei-ting-yeh0425"
      className="ml-4 basis-full font-normal text-blue-500 hover:underline dark:text-blue-300 max-sm:ml-1"
    >
      Cody Yeh
    </a>
  </>,
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="m-auto inline h-5 w-7 pr-2"
      viewBox="0 0 28.314 28.323"
    >
      <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z" />
    </svg>
    <div className="max-sm:hidden">Phone:</div>
    <a
      href="tel:+886989338717"
      className="ml-8 basis-full font-normal text-blue-500 hover:underline dark:text-blue-300 max-sm:ml-1"
    >
      {/* (+886) 989-338-717 */}
      (+1) 647-998-9962
    </a>
  </>,
];

export { descriptionData, title, educationData, awardData, contactData };