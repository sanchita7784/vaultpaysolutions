import React from 'react';
import image from '../assets/hero.jpg'
import img1 from '../assets/image.png'
import img2 from '../assets/app.png'
import FooterSection from '../Components/Footer';
import CRMTable from './CRMTable';
import CRMDashboard from './CRMDashboard';
import VSPLProjects from './vsplProjects';
import CompactERPDemo from '../Components/ERPSection';
const CRM = () => {
  return (
    <>
    <CRMDashboard/>
    <CRMTable/>
    <CompactERPDemo/>
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-10xl space-y-16 sm:space-y-24 md:space-y-32 bg-gradient-to-r from-black via-stone-800 to-black py-12 sm:py-16">
      <div>
        <div className="space-y-8 sm:space-y-12">
          {/* Tag */}
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-mono text-gray-500">
              <span>[</span>
              <span>Explore Us</span>
              <span>]</span>
            </div>
          </div>

          {/* Heading and Paragraph */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-8 sm:space-y-12">
              <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-100">
                Get unfiltered CRM's from Vaultpay Solutions
              </h2>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-12">
              <p className="mt-3 w-full max-w-md flex-1 text-balance leading-6 text-sm sm:text-base md:text-lg text-gray-400">
                Tap into the now with real-time Projects, pulling fresh, relevant
                CRM ,Applications & web instantly.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <img
          alt="Grok interface on web and mobile."
          loading="lazy"
          className="mt-12 sm:mt-16 w-full h-auto object-cover rounded-lg shadow-lg border border-gray-800"
          src={image}
        />

        {/* Buttons */}
        <div className="flex flex-col gap-3 md:flex-row md:justify-center mt-12 sm:mt-16">
          <a
            target="_blank"
            href="#"
            className="relative isolate inline-flex items-center justify-center border text-xs sm:text-sm md:text-base uppercase font-mono tracking-widest shrink-0 focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:opacity-50 [&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:shrink-0 [&>svg]:sm:my-1 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base [&>svg]:size-5 [&>svg]:sm:size-5 gap-x-3 bg-orange-700 text-gray-100 border-orange-700 hover:bg-orange-800 hover:border-orange-800 rounded-full transition-all duration-200 shadow-md"
          >
            <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 hidden [@media(pointer:fine)]:inline-block" aria-hidden="true" />
            VSPL Web
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="size-5 sm:size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
          <a
            target="_blank"
            href="#"
            className="relative isolate inline-flex items-center justify-center border text-xs sm:text-sm md:text-base uppercase font-mono tracking-widest shrink-0 focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:opacity-50 [&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:shrink-0 [&>svg]:sm:my-1 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base [&>svg]:size-5 [&>svg]:sm:size-5 gap-x-3 bg-gray-900 border-orange-700/40 text-orange-500 hover:bg-gray-800 hover:border-orange-700/50 rounded-full transition-all duration-200 shadow-md"
          >
            <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 hidden [@media(pointer:fine)]:inline-block" aria-hidden="true" />
            VSPL on Apps
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="size-5 sm:size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
          <a
            target="_blank"
            href="#"
            className="relative isolate inline-flex items-center justify-center border text-xs sm:text-sm md:text-base uppercase font-mono tracking-widest shrink-0 focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:opacity-50 [&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:shrink-0 [&>svg]:sm:my-1 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base [&>svg]:size-5 [&>svg]:sm:size-5 gap-x-3 bg-gray-900 border-orange-700/40 text-orange-500 hover:bg-gray-800 hover:border-orange-700/50 rounded-full transition-all duration-200 shadow-md"
          >
            <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 hidden [@media(pointer:fine)]:inline-block" aria-hidden="true" />
            iOS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="size-5 sm:size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
          <a
            target="_blank"
            href="#"
            className="relative isolate inline-flex items-center justify-center border text-xs sm:text-sm md:text-base uppercase font-mono tracking-widest shrink-0 focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:opacity-50 [&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:shrink-0 [&>svg]:sm:my-1 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base [&>svg]:size-5 [&>svg]:sm:size-5 gap-x-3 bg-gray-900 border-orange-700/40 text-orange-500 hover:bg-gray-800 hover:border-orange-700/50 rounded-full transition-all duration-200 shadow-md"
          >
            <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 hidden [@media(pointer:fine)]:inline-block" aria-hidden="true" />
            Android
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="size-5 sm:size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <VSPLProjects/>
    <FooterSection/>
    </>
  );
};

export default CRM;