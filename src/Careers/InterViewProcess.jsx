import React from 'react';

const InterviewProcess = () => {
  const processSteps = [
    {
      step: "Step 1",
      title: "Submit your application",
      description: "Our team will review your CV and statement of exceptional work.",
      hasButton: true
    },
    {
      step: "Step 2",
      title: "Screening Interview",
      description: "A short interview to learn more about you and assess if the role fits both you and VSPL. Prepare for short technical questions and a review of your background and experience."
    },
    {
      step: "Step 3",
      title: "Technical Interview",
      description: "An hour-long session where we dive deep into your technical expertise. This isn't just about solving puzzles; it's about understanding how you approach complex problems, your coding style, and your ability to think critically under pressure."
    },
    {
      step: "Step 4",
      title: "Offer Extended",
      description: "We value transparency and efficiency, so expect a prompt decision. If you've demonstrated the exceptional skills and mindset we're looking for, we'll extend an offer to join VSPL. This isn't just a job offer; it's an invitation to be part of a team that's pushing the boundaries of Development to accelerate human scientific discovery."
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-black via-stone-800 to-black py-12 sm:py-16">
      <div className="mx-auto w-full px-6 max-w-7xl space-y-16 sm:space-y-32">
        {/* Header Section */}
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
              <span>[</span>
              <span>What to expect</span>
              <span>]</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-12">
              <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight text-white">
                Interview process
              </h2>
            </div>
            
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-12">
              <div className="max-w-md">
                <p className="text-gray-400">
                  We generally do not use recruiters for assessments. Applications are evaluated by our technical team members. Interviews will be conducted via virtual meetings and/or onsite.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col gap-6 sm:flex-row">
              {/* Step Number */}
              <div className="shrink-0 sm:w-32 lg:w-80">
                <span className="text-sm font-mono text-gray-400">
                  {step.step}
                </span>
              </div>
              
              {/* Step Content */}
              <div className="max-w-2xl">
                <h3 className="text-lg font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-balance leading-6 text-gray-400">
                  {step.description}
                </p>
                
                {/* Apply Button (only for first step) */}
                {step.hasButton && (
                  <div className="mt-6">
                    <a
                      href="/careers/open-roles"
                      className="relative inline-flex items-center justify-center border text-sm uppercase font-mono tracking-widest px-4 py-2 gap-x-3 bg-transparent text-primary border-primary/25 hover:bg-secondary/20 rounded-full transition-colors duration-200 bg-white"
                    >
                      <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden " aria-hidden="true"></span>
                      <span>Apply Now</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewProcess;