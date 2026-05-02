import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="bg-black text-white py-16 sm:py-20">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
        {/* Centered Text */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">The future is now</h2>
          <div className="h-6"></div>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-300">
            A dynamic environment designed to foster learning, connection, and inspiration. Exchange ideas
            and find new pathways for the tech landscape.
          </p>
        </div>
        <div className="h-20"></div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Card 1: Learn from others */}
          <div className="relative bg-gray-700 p-6 rounded-lg" style={{boxShadow:'0 0 15px'}}>
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/6808a2f618788c10a7597011/6808a2f718788c10a759713c_users-three-duotone.svg"
              alt="Three users icon"
              className="w-16 h-16 mx-auto"
            />
            <div className="h-16"></div>
            <h3 className="text-xl sm:text-2xl font-semibold text-center">Learn from others</h3>
            <div className="h-4"></div>
            <p className="text-base text-gray-300 text-center">
              Hear from experts and peers and get new ideas. See how others tackle similar challenges, and
              gain fresh perspectives on your own work. Share experiences and learn together.
            </p>
            {/* Corner Cuts */}
            <div className="absolute inset-0 text-blue-500">
              <div className="absolute top-0 left-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H72L0 72V0Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M72 3.49691e-06V72L0 0L72 3.49691e-06Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M72 72V0L0 72H72Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 72H72L0 0V72Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Connect */}
          <div className="relative bg-gray-900 p-6 rounded-lg" style={{boxShadow:'0 0 15px'}}>
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/6808a2f618788c10a7597011/6808a2f718788c10a759711f_handshake-duotone.svg"
              alt="Handshake icon"
              className="w-16 h-16 mx-auto"
            />
            <div className="h-16"></div>
            <h3 className="text-xl sm:text-2xl font-semibold text-center">Connect</h3>
            <div className="h-4"></div>
            <p className="text-base text-gray-300 text-center">
              Connect with like-minded people. Build relationships that can last beyond the event. Help grow
              your network for future opportunities.
            </p>
            <div className="absolute inset-0 text-blue-500">
              <div className="absolute top-0 left-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H72L0 72V0Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M72 3.49691e-06V72L0 0L72 3.49691e-06Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M72 72V0L0 72H72Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 72H72L0 0V72Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3: Grow */}
          <div className="relative bg-gray-900 p-6 rounded-lg" style={{boxShadow:'0 0 15px'}}>
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/6808a2f618788c10a7597011/6808a2f718788c10a7597125_shooting-star-duotone.svg"
              alt="Shooting star icon"
              className="w-16 h-16 mx-auto"
            />
            <div className="h-16"></div>
            <h3 className="text-xl sm:text-2xl font-semibold text-center">Grow</h3>
            <div className="h-4"></div>
            <p className="text-base text-gray-300 text-center">
              Gain new skills, insights, and strategies to move forward. Apply what you learn, improve your
              work, and grow as an individual.
            </p>
            <div className="absolute inset-0 text-blue-500">
              <div className="absolute top-0 left-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H72L0 72V0Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M72 3.49691e-06V72L0 0L72 3.49691e-06Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M72 72V0L0 72H72Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 72H72L0 0V72Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 4: Get inspired */}
          <div className="relative bg-gray-700 p-6 rounded-lg" style={{boxShadow:'0 0 15px'}}>
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/6808a2f618788c10a7597011/6808a2f718788c10a7597129_lightbulb-filament-duotone.svg"
              alt="Lightbulb icon"
              className="w-16 h-16 mx-auto"
            />
            <div className="h-16"></div>
            <h3 className="text-xl sm:text-2xl font-semibold text-center">Get inspired</h3>
            <div className="h-4"></div>
            <p className="text-base text-gray-300 text-center">
              Hear stories, ideas, and experiences that spark creativity. Walk away with fresh motivation
              and the energy to tackle new challenges with confidence.
            </p>
            <div className="absolute inset-0 text-blue-500">
              <div className="absolute top-0 left-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H72L0 72V0Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M72 3.49691e-06V72L0 0L72 3.49691e-06Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M72 72V0L0 72H72Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12">
                <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 72H72L0 0V72Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;