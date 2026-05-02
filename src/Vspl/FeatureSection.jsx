import React from 'react';
import logo from '../assets/logo.png'
const FeaturesSection = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 relative w-full  bg-gradient-to-br from-stone-950 via-gray-900 to-black overflow-hidden text-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-7xl space-y-12 sm:space-y-20 md:space-y-32">
        <div className="space-y-8 sm:space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-8 sm:space-y-12">
              <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                <span>Productivity,</span>{' '}
                <span
                  className="glitch-text"
                  style={{
                    '--glitch-color1': '#eee',
                    '--glitch-color2': '#eee',
                    '--animation-speed': '0.5s',
                    '--text-content': '"unhinged"',
                  }}
                >
                  unhinged
                </span>
                .
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {/* Card 1: Learn from trends and insights on 𝕏 */}
          <div className="group relative px-0 py-6 sm:py-8 lg:p-8 h-full flex flex-col from-gray-900/10 via-transparent to-transparent border-t border-gray-800 lg:border-l lg:border-t-0 md:flex-row lg:flex-col gap-6 sm:gap-8">
            <div className="max-w-sm">
              <h3 className="text-lg sm:text-xl">Learn from trends and insights on VSPL</h3>
              <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base">
                Gain insights from VSPL trends, analyzing and development of real-time projects and user sentiment across industries.
              </p>
            </div>
            <div className="flex justify-end md:justify-start flex-grow h-full">
              <div className="flex items-center justify-center w-full max-w-md mt-auto">
                <div className="w-full h-full space-y-4 sm:space-y-6">
                  <div className="flex justify-end gap-2 sm:gap-3 items-center">
                    <div className="bg-gray-800 text-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
                      What's new with VSPL?
                    </div>
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 sm:w-6 text-gray-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="w-px absolute left-1/2 -inset-y-4 sm:-inset-y-6 border-l border-dashed border-gray-700/20" />
                  </div>
                  <div className="flex-grow w-full space-y-2 sm:space-y-4 border border-gray-800 p-3 sm:p-4 rounded-2xl sm:rounded-3xl overflow-hidden xl:aspect-square opacity-75 group-hover:opacity-100 transition-opacity duration-100">
                    <div className="rounded-tl-xl bg-gray-900 border border-gray-800 w-[125%] scale-110 origin-top-left h-[200px] sm:h-[325px] overflow-hidden">
                      <div className="p-2 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gray-950 rounded-full flex justify-center items-center">
                            {/* <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 sm:w-6 text-white"
                            >
                              <path
                                d="M2.30047 8.77631L12.0474 23H16.3799L6.63183 8.77631H2.30047ZM6.6285 16.6762L2.29492 23H6.63072L8.79584 19.8387L6.6285 16.6762ZM17.3709 1L9.88007 11.9308L12.0474 15.0944L21.7067 1H17.3709ZM18.1555 7.76374V23H21.7067V2.5818L18.1555 7.76374Z"
                                fill="currentColor"
                              />
                            </svg> */}
                            <img src={logo}/>
                          </div>
                          <div>
                            <div className="font-medium text-xs sm:text-sm text-gray-200">VSPL</div>
                            <div className="text-orange-500/70 text-xs sm:text-sm">@CRM</div>
                          </div>
                        </div>
                        <div className="mt-2 sm:mt-4 space-y-1 sm:space-y-3 text-xs sm:text-sm">
                          <p className="text-gray-300">
                            This is it: The world’s smartest VSPL, now available(until our servers melt).
                          </p>
                          <p className="text-gray-300">
                            Try our Beautiful Designs:{' '}
                            <a href="https://myridez.in/" className="text-blue-400" target="_blank">
                            https://myridez.in/
                            </a>
                          </p>
                          <p className="text-gray-300">
                            Our Premium+ and SuperFuntionalities for users will have increased access to world class design and app development along payment solutions, in addition to early access to advanced features like CRM's
                          </p>
                          <p className="text-gray-500 text-xs sm:text-sm pt-1">20 Feb, 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Summarize documents */}
          <div className="group relative px-0 py-6 sm:py-8 lg:p-8 h-full flex flex-col from-gray-900/10 via-transparent to-transparent border-t border-gray-800 lg:border-l lg:border-t-0 md:flex-row lg:flex-col gap-6 sm:gap-8">
            <div className="max-w-sm">
              <h3 className="text-lg sm:text-xl">Summarize documents</h3>
              <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base">
                Condense lengthy documents into concise summaries, highlighting key points and actionable findings.
              </p>
            </div>
            <div className="flex justify-end md:justify-start flex-grow h-full">
              <div className="flex items-center justify-center w-full max-w-md mt-auto">
                <div className="w-full h-full space-y-4 sm:space-y-6">
                  <div className="flex justify-end gap-2 sm:gap-3 items-center">
                    <div className="bg-gray-800 text-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
                      Analyze this document
                    </div>
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 sm:w-6 text-gray-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="w-px absolute left-1/2 -inset-y-4 sm:-inset-y-6 border-l border-dashed border-gray-700/20" />
                  </div>
                  <div className="flex-grow w-full space-y-2 sm:space-y-4 border border-gray-800 p-3 sm:p-4 rounded-2xl sm:rounded-3xl overflow-hidden xl:aspect-square opacity-75 group-hover:opacity-100 transition-opacity duration-100">
                    <div className="rounded-tl-xl bg-gray-900 border border-gray-800 w-[125%] scale-110 origin-top-left h-[200px] sm:h-[325px] overflow-hidden">
                      <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm p-2 sm:p-4">
                        <p className="text-gray-300">
                          Through comprehensive document analysis, our platform identified key trends across 1,245 financial reports submitted in Q3 2024.
                        </p>
                        <p className="text-gray-300">
                          The data revealed a 17% increase in operational costs year-over-year, primarily driven by supply chain disruptions and labor shortages.
                        </p>
                        <p className="text-gray-300">
                          Revenue growth, however, remained steady at 9%, with 62% of companies exceeding their projected earnings. Sector-specific insights showed that technology and healthcare outperformed other industries, contributing 28% and 19% to total revenue, respectively.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Your coding sidekick */}
          <div className="group relative px-0 py-6 sm:py-8 lg:p-8 h-full flex flex-col from-gray-900/10 via-transparent to-transparent border-t border-gray-800 lg:border-l lg:border-t-0 md:flex-row lg:flex-col gap-6 sm:gap-8">
            <div className="max-w-sm">
              <h3 className="text-lg sm:text-xl">Your coding sidekick</h3>
              <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base">
                Receive code guidance, solutions, and best practices without executing or debugging.
              </p>
            </div>
            <div className="flex justify-end md:justify-start flex-grow h-full">
              <div className="flex items-center justify-center w-full max-w-md mt-auto">
                <div className="w-full h-full space-y-4 sm:space-y-6">
                  <div className="flex justify-end gap-2 sm:gap-3 items-center">
                    <div className="bg-gray-800 text-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
                      Write a debounce hook in React
                    </div>
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 sm:w-6 text-gray-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="w-px absolute left-1/2 -inset-y-4 sm:-inset-y-6 border-l border-dashed border-gray-700/20" />
                  </div>
                  <div className="flex-grow w-full space-y-2 sm:space-y-4 border border-gray-800 p-3 sm:p-4 rounded-2xl sm:rounded-3xl overflow-hidden xl:aspect-square opacity-75 group-hover:opacity-100 transition-opacity duration-100">
                    <div className="rounded-tl-xl bg-gray-900 border border-gray-800 w-[125%] scale-110 origin-top-left h-[200px] sm:h-[325px] overflow-hidden">
                      <div className="absolute top-0 left-0 lg:relative">
                        <div className="flex flex-col h-full relative rounded-md bg-gray-950 text-gray-200 w-full">
                          <div className="flex justify-between items-center gap-2 px-2 sm:px-4 pt-2 sm:pt-3 pb-1 sm:pb-2">
                            <div className="flex gap-1 sm:gap-2 items-center">
                              <p className="font-mono text-xs sm:text-sm text-gray-500">javascript</p>
                            </div>
                          </div>
                          <div className="flex-1 rounded-[inherit]">
                            <pre>
                              <code className="javascript overflow-hidden bg-transparent text-xs sm:text-sm">
                                {`import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;`}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;