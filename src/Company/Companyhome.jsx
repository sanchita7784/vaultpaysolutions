import React, { useEffect, useState } from 'react';
import PrinciplesSection from './PrinicipleSection';
import NewsSection from './NewsSection';
import FooterSection from '../Components/Footer';

const MissionSection = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars with different sizes and positions
    const generateStars = () => {
      const starCount = window.innerWidth < 640 ? 30 : 50; // Fewer stars on mobile
      const newStars = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 1, // Random size between 1 and 4
          left: Math.random() * 100, // Random horizontal position
          top: Math.random() * 100, // Random vertical position
          opacity: Math.random() * 0.7 + 0.3, // Random opacity between 0.3 and 1
          animationDuration: `${Math.random() * 3 + 2}s`, // Random duration between 2-5s
          animationDelay: `${Math.random() * 2}s`, // Random delay up to 2s
        });
      }
      
      setStars(newStars);
    };

    generateStars();
    
    // Regenerate stars on window resize for responsiveness
    const handleResize = () => generateStars();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col bg-gradient-to-b from-stone-950 to-black py-8 sm:py-12 min-h-screen overflow-hidden">
        {/* Shimmering Stars Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.left}%`,
                top: `${star.top}%`,
                opacity: star.opacity,
                animationDuration: star.animationDuration,
                animationDelay: star.animationDelay,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out',
              }}
            />
          ))}
          
          {/* Existing gradient backgrounds */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[100vh] w-[100vh] sm:h-[80vw] sm:w-[80vw] md:h-[70vw] md:w-[70vw] lg:h-[60vw] lg:w-[60vw] max-h-[800px] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'conic-gradient(from 90deg at 55% 50%, rgb(248, 247, 245) 0deg, rgb(156, 184, 221) 4deg, rgba(81, 100, 132, 0.9) 8deg, rgba(81, 100, 132, 0.7) 10deg, rgba(81, 100, 132, 0.5) 12deg, rgba(81, 100, 132, 0.3) 18deg, rgba(81, 100, 132, 0.1) 24deg, rgba(6, 16, 43, 0.05) 45deg, rgba(6, 16, 43, 0) 90deg, rgba(255, 255, 255, 0) 360deg)',
            }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[100vh] w-[100vh] sm:h-[80vw] sm:w-[80vw] md:h-[70vw] md:w-[70vw] lg:h-[60vw] lg:w-[60vw] max-h-[800px] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg [mask-image:radial-gradient(circle_at_60%_50%,transparent_0%,rgba(255,255,255,1)_20%)]"
            style={{
              background:
                'conic-gradient(from 90deg at 55% 50%, rgb(248, 247, 245) 0deg, rgb(156, 184, 221) 4deg, rgba(81, 100, 132, 0.9) 8deg, rgba(81, 100, 132, 0.7) 10deg, rgba(81, 100, 132, 0.5) 12deg, rgba(81, 100, 132, 0.3) 18deg, rgba(81, 100, 132, 0.1) 24deg, rgba(6, 16, 43, 0.05) 45deg, rgba(6, 16, 43, 0) 90deg, rgba(255, 255, 255, 0) 360deg)',
            }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[100vh] w-[100vh] sm:h-[80vw] sm:w-[80vw] md:h-[70vw] md:w-[70vw] lg:h-[60vw] lg:w-[60vw] max-h-[800px] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full -scale-y-100"
            style={{
              background:
                'conic-gradient(from 90deg at 55% 50%, rgb(248, 247, 245) 0deg, rgb(156, 184, 221) 4deg, rgba(81, 100, 132, 0.9) 8deg, rgba(81, 100, 132, 0.7) 10deg, rgba(81, 100, 132, 0.5) 12deg, rgba(81, 100, 132, 0.3) 18deg, rgba(81, 100, 132, 0.1) 24deg, rgba(6, 16, 43, 0.05) 45deg, rgba(6, 16, 43, 0) 90deg, rgba(255, 255, 255, 0) 360deg)',
            }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[100vh] w-[100vh] sm:h-[80vw] sm:w-[80vw] md:h-[70vw] md:w-[70vw] lg:h-[60vw] lg:w-[60vw] max-h-[800px] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg [mask-image:radial-gradient(circle_at_60%_50%,transparent_0%,rgba(255,255,255,1)_20%)] -scale-y-100"
            style={{
              background:
                'conic-gradient(from 90deg at 55% 50%, rgb(248, 247, 245) 0deg, rgb(156, 184, 221) 4deg, rgba(81, 100, 132, 0.9) 8deg, rgba(81, 100, 132, 0.7) 10deg, rgba(81, 100, 132, 0.5) 12deg, rgba(81, 100, 132, 0.3) 18deg, rgba(81, 100, 132, 0.1) 24deg, rgba(6, 16, 43, 0.05) 45deg, rgba(6, 16, 43, 0) 90deg, rgba(255, 255, 255, 0) 360deg)',
            }}
          />
        </div>

        {/* Mission Statement */}
        <div className="relative w-full flex flex-grow items-center justify-center sm:justify-start z-20">
          <div className="space-y-8 sm:space-y-12 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center gap-2 text-xs sm:text-sm md:text-base font-mono text-gray-400">
              <span>[</span>
              <span style={{fontSize:'2rem'}}>Our Mission</span>
              <span>]</span>
            </div>
            <div className="max-w-3xl text-balance text-2xl sm:text-3xl md:text-4xl lg:text-8xl leading-tight tracking-tight inline-block py-2 text-orange-900 md:from-orange-500/80 md:to-orange-500 md:bg-clip-text md:text-transparent md:bg-gradient-to-r opacity-100">
              Understand the Universe
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 sm:gap-6 py-6 sm:py-8 z-10">
          <div className="flex justify-center sm:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 sm:w-6 my-2 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-4 sm:gap-6 lg:gap-8">
            <div className="max-w-lg text-center sm:text-right text-xs sm:text-sm md:text-base text-gray-300">
              VSPL Technology is now be all-encompassing and as far-reaching as possible. We build AI models specifically to advance human comprehension and capabilities.
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/careers"
                className="relative isolate inline-flex items-center justify-center border text-xs sm:text-sm md:text-base uppercase font-mono tracking-widest shrink-0 focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:opacity-50 [&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:shrink-0 [&>svg]:sm:my-1 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base [&>svg]:size-4 sm:[&>svg]:size-5 gap-x-2 bg-transparent border-orange-500/40 text-orange-500 hover:bg-orange-900/20 rounded-full transition-all duration-200"
              >
                <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 hidden [@media(pointer:fine)]:inline-block" aria-hidden="true" />
                <span>Join Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-4 sm:size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <PrinciplesSection/>
      <NewsSection/>
      <FooterSection/>
    </>
  );
};

export default MissionSection;