import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const navigation = [
  { name: ' About VSPL', href: '/vspl' },
  { name: 'Projects', href: '/crm' },
  { name: 'Company', href: '/company' },
  { name: 'Careers', href: '/career' },
  { name: 'Contact-Us', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    // Check if user is logged in
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    // Clear localStorage and redirect to login
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUsername(null);
    alert('Logged out successfully!');
    navigate('/login');
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-80 transition-all duration-200 ${scrolled ? 'bg-black/90 backdrop-blur' : ''}`}>
      {/* Gradient Overlay - Only visible when not scrolled */}
      {!scrolled && (
        <div className="absolute inset-x-0 h-32 lg:h-24 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
      )}

      {/* Desktop Border Overlay - Only visible when not scrolled */}
      {!scrolled && (
        <div className="hidden lg:block fixed inset-x-0 top-0 bg-black/20 backdrop-blur pointer-events-none pt-20">
          <div className="border-y border-white/10 h-full py-4">
            <div className="mx-auto w-full px-4 sm:px-6 xl:max-w-7xl relative">
              <div className="flex gap-1.5 -mx-3" />
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <div className="mx-auto w-full px-4 sm:px-6 xl:max-w-7xl relative">
        <Disclosure as="nav" className="flex items-center justify-between gap-4 py-4 lg:h-16">
          {({ open }) => (
            <>
              {/* Logo */}
              <a aria-label="VSPL Homepage" href="/" className="flex items-center z-10">
                <img
                  src={logo}
                  alt="VSPL Logo"
                  width={56}
                  height={64}
                  className="bg-stone-900"
                  style={{ borderRadius: '50px' }}
                />
              </a>

              {/* Desktop Navigation */}
              <ul className="ml-3 hidden flex-grow gap-4 lg:flex">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-white font-mono text-sm px-3 py-1.5 uppercase tracking-widest hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* User Profile or Get Started Button */}
              <div className="flex gap-2 items-center">
                {username ? (
                  <div className="flex items-center gap-3">
                    {/* User Profile Image and Greeting */}
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gray-700/50 border border-white/25 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-indigo-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <span className="text-white font-mono text-sm uppercase tracking-widest">
                        Hi! {username}
                      </span>
                    </div>

                    {/* Logout Button */}
                    <button
                      onClick={handleLogout}
                      className="inline-flex items-center justify-center border border-white/25 text-white font-mono text-base sm:text-sm uppercase tracking-widest px-4 py-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <a
                    href="/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-white/25 text-white font-mono text-base sm:text-sm uppercase tracking-widest px-4 py-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                  >
                    Get Started →
                  </a>
                )}

                {/* Mobile Menu Button */}
                <Disclosure.Button
                  className="lg:hidden inline-flex items-center justify-center border border-white/25 text-white font-mono text-base sm:text-sm uppercase tracking-widest aspect-square p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="w-5 h-5" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Mobile Menu Panel */}
              <Disclosure.Panel className="lg:hidden absolute inset-x-0 top-full mt-2 bg-black/95 backdrop-blur rounded-b-lg shadow-lg overflow-hidden transition-all duration-200 ease-in-out">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block text-white/50 font-mono text-base uppercase tracking-widest px-3 py-2 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  {username && (
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left text-white/50 font-mono text-base uppercase tracking-widest px-3 py-2 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                    >
                      Logout
                    </button>
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </header>
  );
}