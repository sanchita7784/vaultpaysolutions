import React from 'react';

const VSPLHero = () => {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Employees' },
    { value: '50,000', label: 'Complete Projects' },
    { value: '95%', label: 'Client Satisfaction' },
  ];

  return (
    <section
      className="bg-gradient-to-r from-black via-stone-800 to-black py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Tagline and Button */}
          <div className="flex-1">
            <h1
              id="hero-heading"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-4 sm:mb-6"
            >
              <span className="text-teal-400 underline">Crafting Digital</span> Excellence, One Solution at a Time.
            </h1>
            <button
              className="px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 bg-teal-400 text-gray-900 rounded-md text-xs sm:text-sm md:text-base font-semibold hover:bg-teal-300 hover:scale-105 transition-all duration-200"
              aria-label="Explore VaultPay Solutions"
            >
              Explore
            </button>
          </div>
          {/* Stats */}
          <div className="flex-1">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700/50 p-3 sm:p-4 md:p-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-teal-400">
                      {stat.value}
                    </p>
                    <p className="text-[0.65rem] sm:text-xs md:text-sm text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSPLHero;