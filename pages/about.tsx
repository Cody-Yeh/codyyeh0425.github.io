import Awards from '../components/About/Awards';
import Description from '../components/About/Description';
import Education from '../components/About/Education';
import Certifications from '../components/About/Certifications';
import SoftwareSkills from '../components/Experience/Skills';

function About() {
  return (
    <>
      <div className="mx-auto flex w-screen flex-col px-5 md:w-2xl lg:w-3xl xl:w-4xl">
        <div className="pt-8">
          <h1 className="text-center text-3xl font-bold tracking-[-0.02em] text-grey-900 sm:text-5xl">
            About Me
          </h1>
        </div>

        <div className="mx-auto mt-10 box-border flex w-full flex-col items-center space-y-16 px-5 max-sm:px-0">
          <Description />
          <Education />
          <Certifications />
          <SoftwareSkills /> 
          <Awards />
        </div>
      </div>
    </>
  );
}

export default About;