import React from 'react';

const VSPLProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'My Ridez Website',
      description:
        'My Ridez Website, developed by VaultPay Solutions, is a cutting-edge ride-sharing information giving platform designed to connect passengers with drivers seamlessly. Offering real-time ride tracking, secure payment integration, and user-friendly interfaces, it revolutionizes urban mobility. Key features include dynamic pricing, driver ratings, and eco-friendly ride options, ensuring a reliable and sustainable travel experience.',
      features: ['Real-time ride tracking', 'Secure payment gateway', 'Dynamic pricing', 'Eco-friendly options'],
    },
    {
      id: 2,
      title: 'My Ridez Applications',
      description:
        'The My Ridez Applications, crafted by VaultPay Solutions, bring the power of the My Ridez platform to mobile devices. Available on iOS and Android, these apps offer intuitive navigation, instant booking, and personalized ride preferences. With push notifications, in-app support, and seamless VSPL payment integration, the apps enhance user convenience and engagement on the go.',
      features: ['iOS and Android support', 'Instant booking', 'Push notifications', 'In-app customer support'],
    },
  ];

  return (
    <section
      className="bg-gradient-to-r from-black via-stone-800 to-black py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden"
      aria-labelledby="vspl-projects-heading"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <h2
          id="vspl-projects-heading"
          className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center"
        >
          VaultPay Solutions Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-md rounded-xl shadow-xl border border-gray-700/50 p-3 sm:p-4 md:p-6 hover:bg-gray-700/30 transition-all duration-300"
              role="region"
              aria-labelledby={`project-${project.id}-heading`}
            >
              <h3
                id={`project-${project.id}-heading`}
                className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4"
              >
                {project.title}
              </h3>
              <p className="text-gray-300 text-[0.65rem] sm:text-xs md:text-sm lg:text-base mb-3 sm:mb-4 md:mb-6">
                {project.description}
              </p>
              <h4 className="text-teal-400 text-[0.65rem] sm:text-xs md:text-sm lg:text-base font-medium mb-1 sm:mb-2">
                Key Features
              </h4>
              <ul className="text-gray-300 text-[0.65rem] sm:text-xs md:text-sm lg:text-base space-y-1 sm:space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-teal-400 mr-1 sm:mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-3 sm:mt-4 md:mt-6 flex justify-start">
                <button
                  className="px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-md bg-teal-400 text-gray-900 text-[0.65rem] sm:text-xs md:text-sm font-semibold hover:bg-teal-300 hover:scale-105 transition-all duration-200"
                  aria-label={`Learn more about ${project.title}`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VSPLProjects;