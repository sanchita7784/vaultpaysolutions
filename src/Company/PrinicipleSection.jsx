import React from 'react';

const PrinciplesSection = () => {
  return (
    <section className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col bg-gradient-to-b from-stone-950 to-black py-8 sm:py-12 min-h-screen">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-7xl space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-32">
        <div className="space-y-6 sm:space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-gray-400"style={{fontSize:'1rem'}}>
              {/* <span>[</span>
              {/* <span>Our principles</span>
              <span></span> */}
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-6 sm:space-y-8">
              <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                At our core
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-end lg:gap-12">
              <p className="mt-2 sm:mt-3 w-full max-w-md flex-1 text-balance leading-5 sm:leading-6 text-sm sm:text-base text-gray-400">
                We’re a focused and mighty team connected by our curiosity, commitment, and unwavering drive.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {/* Card 1: Reasoning from First Principles */}
          <div className="group relative px-0 py-5 sm:py-6 md:py-8 lg:p-8 h-full flex flex-col from-gray-900/10 via-transparent to-transparent border-t border-gray-800 lg:border-l lg:border-t-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 [&>svg]:w-full [&>svg]:h-full mb-5 sm:mb-10 md:mb-12 lg:mb-16">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1"
              >
                <ellipse
                  cx="12"
                  cy="12"
                  rx="4"
                  ry="10.5"
                  transform="rotate(-45 12 12)"
                  stroke="currentColor"
                />
                <ellipse
                  cx="4"
                  cy="10.5"
                  rx="4"
                  ry="10.5"
                  transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 22.253 7.40381)"
                  stroke="currentColor"
                />
              </svg>
            </div>
            <div className="max-w-sm">
              <h3 className="text-lg sm:text-xl">Reasoning from First Principles</h3>
              <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base">
                We challenge conventional thinking by breaking down problems to their fundamental truths, grounded in logic.
              </p>
            </div>
          </div>

          {/* Card 2: No goal is too ambitious */}
          <div className="group relative px-0 py-5 sm:py-6 md:py-8 lg:p-8 h-full flex flex-col from-gray-900/10 via-transparent to-transparent border-t border-gray-800 lg:border-l lg:border-t-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 [&>svg]:w-full [&>svg]:h-full mb-5 sm:mb-10 md:mb-12 lg:mb-16">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1"
              >
                <path
                  d="M6.5 12.5L11.5 17.5M6.5 12.5L11.8349 6.83172C13.5356 5.02464 15.9071 4 18.3887 4H20V5.61135C20 8.09292 18.9754 10.4644 17.1683 12.1651L11.5 17.5M6.5 12.5L2 11L5.12132 7.87868C5.68393 7.31607 6.44699 7 7.24264 7H11M11.5 17.5L13 22L16.1213 18.8787C16.6839 18.3161 17 17.553 17 16.7574V13"
                  stroke="currentColor"
                  strokeLinecap="square"
                />
                <path
                  d="M4.5 16.5C4.5 16.5 4 18 4 20C6 20 7.5 19.5 7.5 19.5"
                  stroke="currentColor"
                />
              </svg>
            </div>
            <div className="max-w-sm">
              <h3 className="text-lg sm:text-xl">No goal is too ambitious</h3>
              <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base">
                We embrace the most challenging obstacles by always pushing the limits of what's possible. We are motivated by what’s unprecedented.
              </p>
            </div>
          </div>

          {/* Card 3: Move quickly and fix things */}
          <div className="group relative px-0 py-5 sm:py-6 md:py-8 lg:p-8 h-full flex flex-col from-gray-900/10 via-transparent to-transparent border-t border-gray-800 lg:border-l lg:border-t-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 [&>svg]:w-full [&>svg]:h-full mb-5 sm:mb-10 md:mb-12 lg:mb-16">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1"
              >
                <path d="M19.75 9H13V3.5L4.25 14.9219H11V20.5L19.75 9Z" stroke="currentColor" />
              </svg>
            </div>
            <div className="max-w-sm">
              <h3 className="text-lg sm:text-xl">Move quickly and fix things</h3>
              <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base">
                Our approach to rapid development and iteration allows us to innovate at breakneck speeds. We’re not interested in speed for speed’s sake—we’re here to solve real problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;