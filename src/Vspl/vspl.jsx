import React from 'react';
import GrokAccessSection from './VsplSectionAccess';
import FeaturesSection from './FeatureSection';
import FooterSection from '../Components/Footer';
import PaymentSolutions from './About';
import DeveloperSection from './DeveloperSection';
import AboutUsSection from './AboutPara';
import UseCasesSection from './UseCasesSection';
const GrokLandingPage = () => {
  return (
    <>
  
    <div className="relative w-full h-screen bg-gradient-to-br from-stone-950 via-gray-900 to-black overflow-hidden">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-7xl flex h-full flex-col">
        {/* Simplified VaultPay Solutions Logo */}
        <div className="absolute inset-x-0 bottom-32 lg:bottom-68 flex justify-center flex-grow [mask-image:linear-gradient(to_top,rgba(255,255,255,0),rgb(255,255,255))] opacity-100">
          <div className="max-w-7xl w-full flex justify-center">
            <div className="relative group">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl font-extrabold uppercase text-gray-200 tracking-wide transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-purple-600">
                VaultPay Solutions Pvt.Ltd
              </h1>
              <div className="absolute inset-0 group-hover:border-amber-500 rounded-lg transition-all duration-1000 p-1 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative w-full flex grow items-center justify-start z-20">
          <div className="space-y-20 w-full">
            <div className="absolute inset-x-0 top-1/3 flex justify-center items-center flex-grow">
              <div className="flex justify-center w-full opacity-100">
                <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl">
                  <form className="relative w-full flex items-center gap-4 bg-gradient-to-tr from-gray-900/30 to-gray-800/50 rounded-full p-px shadow-lg">
                    <input
                      className="w-full h-12 sm:h-14 md:h-16 lg:h-20 rounded-full border-none pl-6 pr-20 focus:outline-none focus:ring-2 focus:ring-white/60 bg-gray-950 text-white placeholder:text-gray-500 focus:bg-gray-900 text-lg sm:text-xl md:text-2xl"
                      placeholder="Your Trust, Our Technology..Let's go"
                      type="text"
                      name="query"
                    />
                    <div className="absolute inset-y-2 sm:inset-y-2.5 md:inset-y-3 right-2 sm:right-3 md:right-4 flex items-center">
                      <button
                        aria-label="Submit a query to Grok"
                        type="submit"
                        className="relative isolate inline-flex items-center justify-center border text-xs sm:text-sm md:text-base uppercase font-mono tracking-widest shrink-0 focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:opacity-50 aspect-square px-3 sm:px-4 py-1.5 sm:py-2 md:py-2.5 text-sm md:text-base [&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:shrink-0 [&>svg]:sm:my-1 [&>svg]:size-4 sm:[&>svg]:size-5 md:[&>svg]:size-6 gap-x-2 bg-orange-600 text-black border-orange-600 hover:bg-orange-700 hover:border-orange-700 rounded-full opacity-50 transition-all duration-200"
                      >
                        <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 hidden [@media(pointer:fine)]:inline-block" aria-hidden="true" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="!size-4 sm:!size-5 md:!size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Text and Buttons */}
        <div className="relative flex items-end justify-between gap-6 py-8 sm:py-10 z-10 lg:min-h-[160px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="size-6 sm:size-8 my-2 sm:my-3"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col items-end gap-4 sm:gap-6 lg:gap-8 md:flex-row">
            <div className="max-w-lg">
              <span className="hidden lg:block text-sm sm:text-base md:text-lg text-gray-300">
                VaultPay Solutions is your truth-seeking companion for unfiltered projects
                with advanced capabilities in reasoning, coding, and soltions.
              </span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                target="_blank"
                href=""
                className="relative isolate inline-flex items-center justify-center border text-xs sm:text-sm md:text-base uppercase font-mono tracking-widest shrink-0 focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:opacity-50 [&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:shrink-0 [&>svg]:sm:my-1 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-sm md:text-base [&>svg]:size-5 [&>svg]:sm:size-6 md:[&>svg]:size-7 gap-x-2 bg-orange-600 text-black border-orange-600 hover:bg-orange-700 hover:border-orange-700 rounded-full transition-all duration-200"
              >
                <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 hidden [@media(pointer:fine)]:inline-block" aria-hidden="true" />
                Applications
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-5 sm:size-6 md:size-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="/crm"
                className="relative isolate inline-flex items-center justify-center border text-xs sm:text-sm md:text-base uppercase font-mono tracking-widest shrink-0 focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:opacity-50 [&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:shrink-0 [&>svg]:sm:my-1 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-sm md:text-base [&>svg]:size-5 [&>svg]:sm:size-6 md:[&>svg]:size-7 gap-x-2 bg-transparent border-orange-600/30 text-orange-400 hover:bg-orange-900/20 rounded-full transition-all duration-200"
              >
                <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 hidden [@media(pointer:fine)]:inline-block" aria-hidden="true" />
                View Our CRM's
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AboutUsSection/>
    <PaymentSolutions/>
    <UseCasesSection/>
    <DeveloperSection/>
    <FeaturesSection/>
    <FooterSection/>
    </>
  );
};

export default GrokLandingPage;