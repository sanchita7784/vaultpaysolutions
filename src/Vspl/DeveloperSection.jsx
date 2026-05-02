import React from 'react';

const DeveloperSection = () => {
  const developerCards = [
    {
      title: 'Integrations',
      description: 'Discover the range of integrations supported by our platform.',
      icon: 'https://cashfreelogo.cashfree.com/website/landings/homepage/integrations.svg',
    },
    {
      title: 'Documentation',
      description: 'Detailed documentation to help you integrate quickly.',
      icon: 'https://cashfreelogo.cashfree.com/website/landings/homepage/apIReference.svg',
    },
    {
      title: 'Dev Studio',
      description: 'Test out your integrations and SDKs on our interactive developer playground.',
      icon: 'https://cashfreelogo.cashfree.com/website/landings/homepage/devStudio.svg',
    },
  ];

  return (
    <section
      className="relative bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden"
      aria-labelledby="developer-section-heading"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col h-full relative">
        {/* Responsive Image */}
        <div className="absolute right-0 top-[-60px] sm:top-[-80px] md:top-[-98px]  w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%]">
          <picture>
            <source
              media="(min-width: 1200px)"
              srcSet="https://cashfreelogo.cashfree.com/website/landings/homepage/dev_2x_desktop.webp"
            />
            <source
              media="(min-width: 768px) and (max-width: 1199px)"
              srcSet="https://cashfreelogo.cashfree.com/website/landings/homepage/dev_1x_mobile.webp"
            />
            <source
              media="(max-width: 767px)"
              srcSet="https://cashfreelogo.cashfree.com/website/landings/homepage/dev_1x_mobile.webp"
            />
            {/* <img
              src="https://cashfreelogo.cashfree.com/website/landings/homepage/dev_3x_desktop.webp"
              alt="Cashfree Developer Illustration"
              className="w-full h-auto object-cover"
              loading="lazy"
            /> */}
          </picture>
        </div>

        {/* Content */}
        <div className="relative mt-20 sm:mt-28 md:mt-36 lg:mt-44">
          <h2
            id="developer-section-heading"
            className="text-left text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3 md:mb-4"
          >
            Trusted by businesses.
            <br />
            Loved by developers.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-6 max-w-[90%] sm:max-w-[80%] md:max-w-[630px] mb-6 sm:mb-8 md:mb-9">
            Customize our APIs to suit your business needs or build on our payments infrastructure.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-9 mb-8 sm:mb-10">
            {developerCards.map((card, index) => (
              <div
                key={index}
                className="w-full max-w-[394px] mx-auto md:mx-0 h-auto min-h-[180px] sm:min-h-[200px] p-3 sm:p-4 flex flex-col gap-3 sm:gap-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-purple-300/50 shadow-lg hover:shadow-xl hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Learn about ${card.title}`}
              >
                <img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  width={36}
                  height={36}
                  className="object-contain sm:w-10 sm:h-10"
                  loading="lazy"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold leading-6 sm:leading-7 text-left">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-5 sm:leading-6">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <a
              href="#"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto h-10 px-4 sm:px-6 py-2.5 rounded-md text-sm sm:text-base font-bold text-gray-900 bg-teal-400 hover:bg-teal-300 hover:scale-105 transform transition-all duration-300 shadow-md"
              aria-label="Check out the Developer Studio"
            >
              Check it out
              <span
                className="inline-block w-3 h-3 ml-2 bg-contain bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://cashfreelogo.cashfree.com/website/landings/homepage/chevron.svg')",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;