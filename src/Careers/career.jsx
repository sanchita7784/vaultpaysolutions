import React from 'react';
import CareersSection from './Careersoptions';
import InterviewProcess from './InterViewProcess';
import FooterSection from '../Components/Footer';
import CareerForm from './CareerForm';
const PurposeSection = () => {
  return (
    <>
    
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-stone-950 to-black py-12 sm:py-16">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        <div 
          className="absolute -left-[300px] sm:-left-[400px] md:-left-[500px] -top-6 sm:-top-8 md:-top-12 h-[300px] sm:h-[400px] md:h-[500px] w-[600px] sm:w-[800px] md:w-[1000px] opacity-50"
          style={{ 
            maskImage: 'linear-gradient(to top, rgba(255, 255, 255, 0), rgb(255, 255, 255))',
            background: 'conic-gradient(from 90deg at 35% -1% in lab, rgb(255, 255, 255) 7.2deg, rgb(255, 208, 134) 14.4deg, rgba(17, 17, 17, 0) 36deg, rgba(17, 17, 17, 0) 342deg, rgb(255, 255, 255) 360deg)'
          }}
        />
        <div 
          className="absolute -right-[300px] sm:-right-[400px] md:-right-[500px] -top-6 sm:-top-8 md:-top-12 h-[300px] sm:h-[400px] md:h-[500px] w-[600px] sm:w-[800px] md:w-[1000px] opacity-50"
          style={{ 
            maskImage: 'linear-gradient(to top, rgba(255, 255, 255, 0), rgb(255, 255, 255))',
            background: 'conic-gradient(from -90deg at 65% -1% in lab, rgb(255, 255, 255) 0deg, rgba(17, 17, 17, 0) 18deg, rgba(17, 17, 17, 0) 324deg, rgb(255, 208, 134) 345.6deg, rgb(255, 255, 255) 352.8deg)'
          }}
        />
      </div>

     
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 md:space-y-32 z-10 mt-20">
       
        <div className="w-full flex flex-grow items-center justify-start">
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-gray-400">
              <span>[</span>
              <span>Our Purpose</span>
              <span>]</span>
            </div>
            <h2 className="max-w-3xl text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-orange-500">
              Build Projects That Advances Humanity
            </h2>
            <div>
              <a
                href="/careers/open-roles"
                className="inline-flex items-center justify-center border text-xs sm:text-sm md:text-base uppercase font-mono tracking-widest px-3 sm:px-4 py-1.5 sm:py-2 gap-x-2 bg-orange-500 border-orange-500 text-gray-950 hover:bg-orange-400 hover:border-orange-400 rounded-full transition-all duration-200"
              >
                View Open Roles
              </a>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 sm:gap-6 py-6 sm:py-8 lg:py-10">
          <div className="flex justify-center sm:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 sm:w-6 my-2 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-4 sm:gap-6 lg:gap-8">
            <p className="max-w-lg text-center sm:text-right text-sm sm:text-base text-gray-400">
              We are a team of  researchers and engineers on a mission to build Robust systems that can help humanity understand the world better.
            </p>
          </div>
        </div>
      </div>
    </div>
    <CareerForm/>
    <CareersSection/>
    <InterviewProcess/>
    <FooterSection/>
    </>
  );
};

export default PurposeSection;