import React, { useState, useCallback } from 'react';

function FAQSection() {
  // FAQ data
  const faqs = [
    {
      question: 'What is VSPL?',
      answer:
        'VSPL is a tech company focused on innovation and emerging technologies. It brings together industry leaders, experts, and enthusiasts to explore topics such as AI, blockchain, and more through keynotes, workshops, and networking opportunities.',
    },
    {
      question: 'Who is VSPL for?',
      answer:
        'VSPL is established for anyone interested in technology and innovation, including professionals, entrepreneurs, students, and thought leaders. Whether you are looking to learn, network, or share ideas, there is something for everyone.',
    },
    {
      question: 'How can I Join VSPL TEAM?',
      answer:
        'Click one of the careers link  on our website. Steps are given there,we cannot wait to see you in our company.',
    },
    {
      question: 'Will there be time to network?',
      answer:
        'Yes, VSPL offers various networking opportunities, including designated networking hours, breakout sessions, and interactive workshops. You will have ample chance to connect with fellow attendees and industry leaders.',
    },
    {
      question: 'Will VSPL be well established?',
      answer:
        'Yes, VSPL is growing fastly with tech ideas and solutions ,soon we will be well known and established company.',
    },
  ];

  // State for open FAQ
  const [openIndex, setOpenIndex] = useState(null);

  // Memoized toggle function
  const toggleFAQ = useCallback((index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  // Handle keyboard events for accessibility
  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <section id="faq" className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Get Involved Card */}
          <div className="sm:sticky sm:top-4 z-40">
            <div className="relative bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Get involved
              </h2>
              <div className="mt-4"></div>
              <p className="text-sm sm:text-base text-gray-600">
                Hear from experts and peers and get new ideas. See how others
                tackle similar challenges, and gain fresh perspectives on your own
                work. Share experiences and learn together.
              </p>
              <div className="mt-10"></div>
              <a
                href="#"
                className="inline-block bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Get Started-{'>'}
              </a>
              {/* Corner Cuts */}
              <div className="absolute inset-0 text-gray-500 pointer-events-none">
                <div className="absolute top-0 left-0 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0H72L0 72V0Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M72 0V72L0 0H72Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M72 72V0L0 72H72Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 72H72L0 0V72Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* FAQ Section */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              FAQs
            </h2>
            <div className="mt-6 sm:mt-8 lg:mt-10 space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="relative border-b border-gray-600">
                  <div
                    className="flex justify-between items-center py-7 cursor-pointer group"
                    onClick={() => toggleFAQ(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    aria-label={`Toggle ${faq.question}`}
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">
                      {faq.question}
                    </h3>
                    <div className="relative w-5 h-5">
                      <img
                        src="https://cdn.prod.website-files.com/6808a2f618788c10a7597011/6808a2f718788c10a7597149_plus-bold.svg"
                        alt={openIndex === index ? "Minus icon" : "Plus icon"}
                        loading="lazy"
                        className={`w-full h-full transition-transform duration-300 filter invert ${
                          openIndex === index ? 'rotate-45' : ''
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    id={`faq-answer-${index}`}
                    className={`text-sm sm:text-base text-white overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-[500px] pb-4' : 'max-h-0'
                    }`}
                    aria-hidden={openIndex !== index}
                  >
                    <p className="pb-2 bg-white text-black">{faq.answer}</p>
                  </div>
                  {/* Corner Cuts - moved outside the clickable area */}
                  <div className="absolute inset-0 text-gray-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 72 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0H72L0 72V0Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="absolute top-0 right-0 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 72 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M72 0V72L0 0H72Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 72 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M72 72V0L0 72H72Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 72 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 72H72L0 0V72Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;