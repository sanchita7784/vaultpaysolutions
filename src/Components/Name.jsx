import React, { useEffect, useRef } from 'react';

const VaultPaySolutions = () => {
  const starContainerRef = useRef(null);

  useEffect(() => {
    const container = starContainerRef.current;
    if (!container) return;

    // Add the animation style to the head of the document
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
      }
      .star {
        animation: twinkle infinite ease-in-out;
        will-change: transform, opacity;
      }
      .star.small {
        width: 1px;
        height: 1px;
      }
      .star.medium {
        width: 2px;
        height: 2px;
      }
      .star.large {
        width: 3px;
        height: 3px;
      }
    `;
    document.head.appendChild(style);

    const createStars = () => {
      container.innerHTML = '';
      // Dramatically increased star count
      const starCount = window.innerWidth < 475 ? 200 : window.innerWidth < 1024 ? 400 : 800;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        // Categorized star sizes for better distribution
        const sizeType = Math.random() > 0.8 ? 'large' : Math.random() > 0.5 ? 'medium' : 'small';
        star.className = `star absolute bg-white rounded-full ${sizeType}`;
        
        // Position stars more evenly across the entire viewport
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // More varied animation patterns
        star.style.animationDuration = `${Math.random() * 15 + 3}s`;
        star.style.animationDelay = `${Math.random() * 10}s`;
        
        // Random brightness variation
        star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
        
        container.appendChild(star);
      }

      // Add some special "shooting stars"
      for (let i = 0; i < 5; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'absolute bg-white h-[1px] w-[40px]';
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.top = `${Math.random() * 100}%`;
        shootingStar.style.transform = `rotate(${Math.random() * 360}deg)`;
        shootingStar.style.opacity = '0';
        shootingStar.style.animation = `shoot ${Math.random() * 5 + 3}s infinite ${Math.random() * 10}s`;
        
        const shootAnimation = document.createElement('style');
        shootAnimation.innerHTML = `
          @keyframes shoot {
            0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateX(300px) translateY(300px) rotate(45deg); opacity: 0; }
          }
        `;
        document.head.appendChild(shootAnimation);
        
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
    <div className="min-h-screen flex justify-center items-center bg-stone-950 overflow-hidden p-4 relative cursor-pointer">
      {/* Star Effect Container */}
      <div ref={starContainerRef} className="absolute inset-0 pointer-events-none overflow-hidden"></div>

      {/* Enhanced Sunlight Effect */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_50%,rgba(255,255,255,0.9)_0%,rgba(255,204,0,0.5)_20%,rgba(255,204,0,0.2)_40%,transparent_60%)] sm:bg-[radial-gradient(circle_at_100%_50%,rgba(255,255,255,0.9)_0%,rgba(255,204,0,0.50)_25%,rgba(255,204,0,0.2)_50%,transparent_70%)] pointer-events-none"></div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-center relative z-10">
        {/* VaultPay Text */}
        <div className="relative group">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase text-gray-300 tracking-wide transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-purple-500">
            VaultPay
          </h1>
          <div className="absolute inset-0 group-hover:border-amber-500 rounded-lg transition-all duration-1000 p-[4px] pointer-events-none"></div>
        </div>

        {/* Solutions Text */}
        <div className="relative group">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase text-gray-300 tracking-wide transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-orange-500">
            Solutions 
          </h1>
          <div className="absolute inset-0 group-hover:border-amber-500 rounded-lg transition-all duration-300 p-[4px] pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default VaultPaySolutions;