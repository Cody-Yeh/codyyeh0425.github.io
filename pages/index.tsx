import Link from 'next/link';
import Image from 'next/image';
import cody from '../public/Cody_Photo.png';

function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col px-6">
      {/* Hero Section */}
      <section className="relative flex min-h-[480px] items-center pt-6 md:min-h-[560px]">
        <div className="grid w-full items-center gap-14 md:grid-cols-[260px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)_260px]">
          {/* Left Photo */}
          <div className="mx-auto hidden md:block">
            <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full ring-1 ring-black/5 lg:h-[280px] lg:w-[280px]">
              <Image
                src={cody}
                alt="Cody Yeh"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center md:text-left">
            <h1 className="text-left text-4xl font-bold tracking-[-0.02em] text-gray-800 dark:text-white">
              Cody Yeh
            </h1>

            <div className="mt-5 space-y-1 text-xl font-semibold leading-snug text-gray-700 dark:text-gray-200 lg:text-2xl">
              <p>Materials & Biomedical Engineer</p>
              <p>Process, Quality & Equipment</p>
            </div>

            <p className="mx-auto mt-7 max-w-2xl text-[1.1rem] leading-8 text-gray-600 dark:text-gray-300 md:mx-0">
              Materials Science & Engineering graduate with hands-on experience in
              biomedical device systems, equipment testing, and process improvement.
            </p>

            {/* Mobile Photo */}
            <div className="mt-10 flex justify-center md:hidden">
              <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full ring-1 ring-black/5">
                <Image
                  src={cody}
                  alt="Cody Yeh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">

            <Link
              href="/Cody_Resume.pdf"
              className="w-[220px] whitespace-nowrap text-center rounded-xl bg-[#2E57A6] px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              View Resume
            </Link>

            <Link
              href="/experience"
              className="w-[220px] whitespace-nowrap text-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-lg font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              View Experience
            </Link>

            <Link
              href="/project"
              className="w-[220px] whitespace-nowrap text-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-lg font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              View Projects
            </Link>

          </div>
          </div>

           {/* Right Illustration */}
            <div className="relative z-10 hidden lg:flex lg:justify-end">
              <div className="relative h-[240px] w-[240px]">
                <Image
                  src="/microscope.png"
                  alt="Microscope illustration"
                  fill
                  className="object-contain opacity-90"
                />
              </div>
            </div>
            </div>
      </section>

      {/* Featured Highlights */}
      <section className="pb-24 pt-8">
        <h2 className="text-center text-4xl font-bold tracking-[-0.02em] text-gray-800 dark:text-white">
          Featured Highlights
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/60 bg-white/80 px-8 py-9 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm">
            <div className="mb-6 flex justify-center">
              <div className="relative h-20 w-20">
                <Image
                  src="/homeicon/internship-icon.png"
                  alt="Internship icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-center text-[1.7rem] font-semibold tracking-[-0.01em] text-gray-900">
              Hands-On Internship
            </h3>
            <p className="mt-5 text-center text-[1.02rem] leading-8 text-gray-600">
              Internship experience in medical device testing, preventive maintenance,
              and equipment support at TBMS International Corporation.
            </p>
          </div>

          <div className="rounded-3xl border border-white/60 bg-white/80 px-8 py-9 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm">
            <div className="mb-6 flex justify-center">
              <div className="relative h-20 w-20">
                <Image
                  src="/homeicon/hospital-icon.png"
                  alt="Hospital icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-center text-[1.7rem] font-semibold tracking-[-0.01em] text-gray-900">
              Hospital Experience
            </h3>
            <p className="mt-5 text-center text-[1.02rem] leading-8 text-gray-600">
              Supported biomedical equipment verification and clinical device-related
              work at National Cheng Kung University Hospital.
            </p>
          </div>

          <div className="rounded-3xl border border-white/60 bg-white/80 px-8 py-9 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm">
            <div className="mb-6 flex justify-center">
              <div className="relative h-20 w-20">
                <Image
                  src="/homeicon/analysis-icon.png"
                  alt="Analysis icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-center text-[1.7rem] font-semibold tracking-[-0.01em] text-gray-900">
              Data & Analysis Skills
            </h3>
            <p className="mt-5 text-center text-[1.02rem] leading-8 text-gray-600">
              Skilled in Python, Excel, GraphPad Prism, SEM characterization, and
              data analysis for technical and research work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;