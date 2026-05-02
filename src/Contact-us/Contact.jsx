import React from 'react';
import FooterSection from '../Components/Footer';
const ContactUsSection = () => {
  return (
    <>
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 mt-10">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 ">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start items-center gap-2 text-xs sm:text-sm font-mono text-gray-400 mb-4 sm:mb-6">
                <span>[</span>
                <span>Contact Us</span>
                <span>]</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Get in Touch
              </h2>
              <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base">
                We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-gray-200 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-gray-200 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-gray-200 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-200 resize-y"
                  placeholder="Your message here..."
                />
              </div>
              <div className="text-center lg:text-left">
                <button
                  type="button"
                  className="relative isolate inline-flex items-center justify-center border text-xs sm:text-sm md:text-base uppercase font-mono tracking-widest shrink-0 focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:opacity-50 [&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:shrink-0 [&>svg]:sm:my-1 px-4 sm:px-6 py-2 sm:py-3 [&>svg]:size-4 sm:[&>svg]:size-5 gap-x-2 bg-orange-500 border-orange-500 text-gray-950 hover:bg-orange-400 hover:border-orange-400 rounded-full transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Location Iframe */}
          <div className="w-full lg:w-1/2">
            <div className="text-center lg:text-left mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                Our Location
              </h3>
              <p className="mt-2 sm:mt-3 text-gray-400 text-sm sm:text-base">
                Visit us or find us on the map below.
              </p>
            </div>
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.145313650574!2d75.8305223!3d30.9410888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8473a0b5934b%3A0xbf3bf773bbadaab7!2sGlobal%20Business%20Park!5e0!3m2!1sen!2sin!4v1711586400000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterSection/>
    </>
  );
};

export default ContactUsSection;