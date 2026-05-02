import React from 'react';

const AboutUsSection = () => {
  return (
    <section
      className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      aria-labelledby="about-us-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        {/* Content (Left Side) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
          <h2
            id="about-us-heading"
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8"
          >
            About Us
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8 max-w-[90%] sm:max-w-[80%] md:max-w-[600px] mb-6 sm:mb-8 md:mb-10">
            We are a passionate team dedicated to revolutionizing the digital tech landscape. Our mission is to empower businesses with seamless, secure, and innovative problem solutions that drive growth and customer satisfaction. With years of expertise and a commitment to excellence, we’re here to transform the way you connect with your audience.
          </p>
          <a
            href="#learn-more"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-teal-400 text-gray-900 text-sm sm:text-base md:text-lg font-semibold hover:bg-teal-300 hover:scale-105 transform transition-all duration-300 shadow-md"
            aria-label="Learn more about our company"
          >
            Learn More
            <span className="ml-2 w-4 h-4 bg-contain bg-no-repeat bg-[url('https://cashfreelogo.cashfree.com/website/landings/homepage/chevron.svg')]" />
          </a>
        </div>

        {/* Image (Right Side) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto transform hover:scale-102 transition-transform duration-300">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet="https://cashfreelogo.cashfree.com/website/landings/homepage/dev_2x_desktop.webp"
              />
              <source
                media="(min-width: 640px) and (max-width: 1023px)"
                srcSet="https://cashfreelogo.cashfree.com/website/landings/homepage/dev_1x_mobile.webp"
              />
              <source
                media="(max-width: 639px)"
                srcSet="https://cashfreelogo.cashfree.com/website/landings/homepage/dev_1x_mobile.webp"
              />
              <img
                src="https://cashfreelogo.cashfree.com/website/landings/homepage/dev_3x_desktop.webp"
                alt="Team working on innovative payment solutions"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-500/10 opacity-50 backdrop-blur-sm pointer-events-none" />
    </section>
  );
};

export default AboutUsSection;