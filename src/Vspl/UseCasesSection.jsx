import React from 'react';

const UseCasesSection = () => {
  const useCases = [
    {
        title: 'Vaultpay CRM Integration Solutions',
        description:
          'Vaultpay offers seamless CRM integration with automated verification processes to enhance customer onboarding and reduce fraud in your CRM workflows.',
        image: 'https://cdn.vectorstock.com/i/500p/16/48/crm-isometric-concept-vector-47611648.avif',
        bgColor: 'rgb(1, 69, 140)',
        width: 130,
        height: 96,
      },
      {
        title: 'Vaultpay Application Development ',
        description:
          'By applying best-in-class technology & assigning a highly skilled team of developers to your project, we develop custom applications and fully interactive apps perfectly...',
        image: 'https://cdn.vectorstock.com/i/preview-2x/75/20/app-development-neon-light-concept-icon-vector-28807520.webp',
        bgColor: 'rgb(3, 112, 181)',
        width: 140,
        height: 44,
      },
      {
        title: 'Vaultpay Website Development Solutions',
        description:
          'By applying best-in-class technology & assigning a highly skilled team of developers to your project, we develop custom websites and fully interactive apps perfectly...',
        image: 'https://cdn.vectorstock.com/i/500p/84/16/set-4-icons-html-css-js-code-vector-31648416.avif',
        bgColor: 'rgb(135, 0, 243)',
        width: 120,
        height: 27,
      },
      {
        title: 'Vaultpay CRM Verification Suite',
        description:
          'Our digital CRM infrastructure comes with built-in Vaultpay verification APIs for reliable, real-time customer verification during onboarding processes.',
        image: 'https://cdn.vectorstock.com/i/500p/16/48/crm-isometric-concept-vector-47611648.avif',
        bgColor: 'rgb(0, 0, 0)',
        width: 120,
        height: 27,
      },
      {
        title: 'Vaultpay SEO Optimization',
        description:
          'With our MarketingCloudFX technology platform and elite SEO team, We can help increase your bottom line with an SEO campaign that is specifically designed...',
        image: 'https://cdn.vectorstock.com/i/500p/70/97/seo-system-vector-1747097.avif',
        bgColor: 'rgb(226, 55, 68)',
        width: 151,
        height: 32,
      },
      {
        title: 'Vaultpay Data Recovery Solutions',
        description:
          'Data recovery is the process of accessing and recovering information from digital media that is not accessible through standard means.',
        image: 'https://cdn.vectorstock.com/i/500p/46/92/data-recovery-isometric-usb-flash-vector-40314692.avif',
        bgColor: 'rgb(0, 0, 0)',
        width: 161,
        height: 43,
      },
  ];

  return (
    <section
      className="bg-black py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
      aria-labelledby="use-cases-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Subtitle with Green Dot */}
        <p
          className="relative text-xs sm:text-sm font-semibold text-teal-600 uppercase text-center mx-auto max-w-max mb-2 sm:mb-4 pl-5"
          style={{
            backgroundImage: 'url(https://cashfreelogo.cashfree.com/website/landings/homepage/green-dot.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '4px 4px',
            backgroundSize: '10px 10px',
          }}
        >
          Use cases for various industries
        </p>

        {/* Heading */}
        <h2
          id="use-cases-heading"
          className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3 sm:mb-4 md:mb-5"
        >
          Verification Suite{' '}
          <span className="font-normal">for innovative businesses</span>
        </h2>

        {/* Description */}
        <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mb-8 sm:mb-12 md:mb-16">
          Top businesses across industries trust Cashfree Payments’{' '}
          <span className="font-normal">Verification Suite</span>
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-12 md:mb-16">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="w-full flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 md:hover:shadow-xl md:hover:-translate-y-1"
              role="article"
              aria-labelledby={`use-case-title-${index}`}
            >
              {/* Image Section */}
              <div
                className="min-h-[180px] sm:min-h-[200px] md:min-h-[232px] flex justify-center items-center"
                style={{ backgroundColor: useCase.bgColor }}
              >
                <img
                  src={useCase.image}
                  alt={`${useCase.title} logo`}
                  width={useCase.width}
                  height={useCase.height}
                  className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain"
                  loading="lazy"
                />
              </div>

              {/* Content Section */}
              <div className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 md:py-6 bg-white">
                <h3
                  id={`use-case-title-${index}`}
                  className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 pt-2 sm:pt-3 pb-3 sm:pb-4"
                >
                  {useCase.title}
                </h3>
                <p className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base text-gray-600 leading-4 sm:leading-5 md:leading-6">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;