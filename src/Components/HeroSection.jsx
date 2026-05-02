import React, { useEffect, useRef } from 'react';

function TechHero() {
  const starContainerRef = useRef(null);

  useEffect(() => {
    const container = starContainerRef.current;
    if (!container) return;

    // Add the animation styles
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
      }
      @keyframes shoot {
        0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateX(300px) translateY(300px) rotate(45deg); opacity: 0; }
      }
      .star {
        animation: twinkle infinite ease-in-out;
        will-change: transform, opacity;
      }
      .shooting-star {
        animation: shoot linear infinite;
      }
    `;
    document.head.appendChild(style);

    const createStars = () => {
      container.innerHTML = '';
      const starCount = window.innerWidth < 768 ? 100 : 200;
      
      // Create twinkling stars
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random() > 0.9 ? '2px' : '1px';
        star.className = 'star absolute bg-white rounded-full';
        star.style.width = size;
        star.style.height = size;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 10 + 5}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(star);
      }

      // Create shooting stars
      for (let i = 0; i < 3; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star absolute bg-white h-[1px] w-[30px]';
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.top = `${Math.random() * 100}%`;
        shootingStar.style.transform = 'rotate(45deg)';
        shootingStar.style.animationDuration = `${Math.random() * 3 + 2}s`;
        shootingStar.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(shootingStar);
      }
    };

    createStars();

    const handleResize = () => {
      createStars();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-black text-white relative">
      {/* Universe Effect Container */}
      <div ref={starContainerRef} className="absolute inset-0 pointer-events-none overflow-hidden"></div>

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-7xl mt-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 py-12 sm:py-16">
          {/* Header Content Top */}
          <div className="flex flex-col lg:w-1/2">
            <div className="h-8"></div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{textShadow:'0 0 5px rgba(255,255,255,0.3)', fontSize:'3.5rem'}}>
                Explore the next wave of tech innovation
              </h1>
            </div>

            {/* Header Content Bottom */}
            <div className="mt-6">
              <div className="max-w-lg">
                <p className="text-lg sm:text-xl text-gray-300">
                  Assemble brings together the brightest minds in tech to explore the future. Join industry
                  leaders discussing artificial intelligence, blockchain, quantum computing, and more—shaping
                  the next wave of tech.
                </p>
                <div className="h-6"></div>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-200 transition-colors"
                >
                  Know More  →
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image Wrapper */}
          <div className="relative lg:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/ordinary-human-job-performed-by-anthropomorphic-robot_23-2151008332.jpg?ga=GA1.1.1155011367.1736496812&semt=ais_hybrid&w=740"
              loading="eager"
              alt="Header image"
              className="w-full max-w-[93vw] lg:max-w-[50vw] object-cover rounded-md z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechHero;