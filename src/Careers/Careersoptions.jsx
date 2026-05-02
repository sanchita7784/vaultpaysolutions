import React from 'react';

const CareersSection = () => {
  const jobOpenings = [
    {
      title: "Human Data Project Lead",
      location: "India",
      url: "#"
    },
    {
      title: "Infrastructure Engineer - Supercomputing",
      location: "India",
      url: "#"
    },
    {
      title: "AI Engineer & Researcher - Post-training",
      location: "India",
      url: "#"
    },
    {
      title: "AI Engineer & Researcher - Pre-training Scaling, Data, and Eval",
      location: "India",
      url: "#"
    },
    {
      title: "Software Engineer - Data Acquisition / Web Crawling",
      location: "India",
      url: "#"
    },
    {
      title: "Network Operations & Deployment Engineer",
      location: "India",
      url: "#"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-black via-stone-800 to-black py-12 sm:py-16">
      <div className="mx-auto w-full px-6 max-w-7xl space-y-16 sm:space-y-32">
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
              <span>[</span>
              <span>Join us</span>
              <span>]</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-12">
              <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight text-white">
                Latest Roles
              </h2>
            </div>
            
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-12">
              <div className="w-full">
                <ul className="w-full flex flex-col gap-8 max-w-3xl mx-auto mt-10 lg:mt-0">
                  {jobOpenings.map((job, index) => (
                    <li key={index} className="relative group">
                      <div className="flex gap-6 items-center">
                        <div className="flex flex-col md:flex-row md:justify-between md:gap-3 grow">
                          <a 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="max-w-md" 
                            href={job.url}
                          >
                            <div className="absolute inset-0 z-10"></div>
                            <span className="font-medium text-white group-hover:underline underline-offset-4 line-clamp-1">
                              {job.title}
                            </span>
                          </a>
                          <div>
                            <span className="text-gray-400 text-sm">
                              {job.location}
                            </span>
                          </div>
                        </div>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth="1.5" 
                          stroke="currentColor" 
                          aria-hidden="true" 
                          className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-700 mt-10 pt-6 flex justify-center">
                  <a 
                    className="text-gray-400 hover:underline underline-offset-4 hover:text-orange-500 transition-colors" 
                    href="/careers/open-roles"
                  >
                    View all open roles
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;