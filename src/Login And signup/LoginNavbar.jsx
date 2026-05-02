import React from 'react';
import logo from '../assets/logo.png';

const loginNavbar = () => {
  return (
    <nav className="bg-gradient-to-r from-black via-stone-800 to-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src={logo}
              alt="Logo"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/150x50?text=Logo')}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default loginNavbar;