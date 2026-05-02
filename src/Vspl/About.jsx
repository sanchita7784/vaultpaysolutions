import React from 'react';

const PaymentSolutions = () => {
  const paymentSolutions = [
    {
        title: "Vaultpay CRM Solutions",
        description: "Transform your customer relationships with our powerful CRM tools that integrate seamlessly with Vaultpay's payment processing.",
        icon: "https://cashfreelogo.cashfree.com/website/landings/homepage/shopifyPayments.svg",
        link: "#"
      },
      {
        title: "Vaultpay Application Development",
        description: "Custom application development services tailored to integrate with Vaultpay's payment infrastructure for seamless transactions.",
        icon: "https://cashfreelogo.cashfree.com/website/landings/homepage/websiteAppPayments.svg",
        link: "#"
      },
      {
        title: "Vaultpay Website Development",
        description: "Professional website development with built-in Vaultpay payment gateways for instant monetization capabilities.",
        icon: "https://cashfreelogo.cashfree.com/website/landings/homepage/socialMedia.svg",
        link: "#"
      },
      {
        title: "Vaultpay CRM Customization",
        description: "Custom CRM solutions built around Vaultpay's payment ecosystem to optimize your sales and customer management.",
        icon: "https://cashfreelogo.cashfree.com/website/landings/homepage/internationalPaymentGateway.svg",
        link: "#"
      },
      {
        title: "Vaultpay Mobile Applications",
        description: "Cross-platform mobile application development with integrated Vaultpay payment solutions for on-the-go transactions.",
        icon: "https://cashfreelogo.cashfree.com/website/landings/homepage/internationalPayment.svg",
        link: "#"
      },
      {
        title: "Vaultpay E-commerce Solutions",
        description: "Complete e-commerce website development with Vaultpay Sleek Designs And Funtionality built-in for instant checkout and Processing.",
        icon: "https://cashfreelogo.cashfree.com/website/landings/homepage/verifyIdentity.svg",
        link: "#"
      }
  ];

  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-6 sm:py-8 md:py-12 lg:py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900"
      aria-labelledby="payment-solutions-heading"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative z-10 flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10">
        <h2
          id="payment-solutions-heading"
          className="text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight tracking-tight"
        >
          Smooth Onboarding,
          <br className="hidden md:block" />
          Seamless Payments, Instant Payouts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
          {paymentSolutions.map((solution, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div
                className="h-full min-h-[180px] sm:min-h-[200px] md:min-h-[220px] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 flex flex-col gap-3 sm:gap-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/30 hover:border-white/50 transition-all duration-300"
                role="article"
                aria-labelledby={`solution-title-${index}`}
              >
                <img
                  src={solution.icon}
                  alt={`${solution.title} icon`}
                  width={32}
                  height={32}
                  className="object-contain sm:w-9 sm:h-9"
                  loading="lazy"
                />
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <h3
                      id={`solution-title-${index}`}
                      className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-5 sm:leading-6 md:leading-7"
                    >
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 text-[0.65rem] sm:text-xs md:text-sm lg:text-base leading-4 sm:leading-5 md:leading-6">
                      {solution.description}
                    </p>
                  </div>
                  <a
                    href={solution.link}
                    className="text-blue-400 text-[0.65rem] sm:text-xs md:text-sm font-semibold leading-4 sm:leading-5 md:leading-6 pt-2 hover:text-blue-300 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Learn more about ${solution.title}`}
                  >
                    Learn More »
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentSolutions;