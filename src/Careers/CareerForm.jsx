import React from 'react';

const CareerForm = () => {
  return (
    <section
      className="bg-gradient-to-r from-black via-stone-800 to-black py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 text-white"
      aria-labelledby="career-heading"
    >
      <div className="container mx-auto mt-20">
        <h1
          id="career-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          Start Your <span className="text-teal-400 underline">Career</span> With us
        </h1>
        <form className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white text-[0.75rem] sm:text-sm md:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                aria-label="Enter your name"
              />
            </div>
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white text-[0.75rem] sm:text-sm md:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                aria-label="Enter your email"
              />
            </div>
            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder="Enter Your Phone"
                className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white text-[0.75rem] sm:text-sm md:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                aria-label="Enter your phone number"
              />
            </div>
            {/* File Upload */}
            <div>
              <input
                type="file"
                className="w-full px-3 py-2 border border-gray-600 bg-transparent text-gray-400 text-[0.75rem] sm:text-sm md:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                aria-label="Choose file"
              />
              <span className="text-gray-500 text-[0.65rem] sm:text-xs">No file chosen</span>
            </div>
            {/* Experience */}
            <div>
              <select
                className="w-full px-3 py-2 border border-gray-600 bg-white text-gray-900 text-[0.75rem] sm:text-sm md:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 appearance-none"
                aria-label="Select experience"
              >
                <option value="">Select Experience</option>
                <option value="0-1">0-1 Year</option>
                <option value="1-3">1-3 Years</option>
                <option value="3+">3+ Years</option>
              </select>
            </div>
            {/* Qualification */}
            <div>
              <select
                className="w-full px-3 py-2 border border-gray-600 bg-white text-gray-900 text-[0.75rem] sm:text-sm md:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 appearance-none"
                aria-label="Select qualification"
              >
                <option value="">Select Qualification</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="diploma">Diploma</option>
              </select>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-teal-400 text-white rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-teal-300 transition-colors duration-200"
              aria-label="Submit career application"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CareerForm;