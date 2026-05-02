import React from 'react';
import { FaTwitter, FaFacebookF, FaDribbble, FaGithub } from 'react-icons/fa';

function FooterSection() {
  // Social media links
  const socialLinks = [
    {
      platform: 'Twitter',
      href: '#',
      color: 'text-blue-400',
      hoverColor: 'hover:text-blue-500',
      icon: <FaTwitter className="w-5 h-5" />,
    },
    {
      platform: 'Facebook',
      href: '#',
      color: 'text-blue-600',
      hoverColor: 'hover:text-blue-700',
      icon: <FaFacebookF className="w-5 h-5" />,
    },
    {
      platform: 'Dribbble',
      href: '#',
      color: 'text-pink-400',
      hoverColor: 'hover:text-pink-500',
      icon: <FaDribbble className="w-5 h-5" />,
    },
    {
      platform: 'GitHub',
      href: '#',
      color: 'text-gray-300',
      hoverColor: 'hover:text-gray-400',
      icon: <FaGithub className="w-5 h-5" />,
    },
  ];

  // Useful links
  const usefulLinks = [
    // {
    //   text: 'About VSPL',
    //   href: '/vspl',
    // },
    // { text: 'Projects', href: '/crm' },
    // {
    //   text: 'Careers',
    //   href: '/career',
    // },
    // {
    //   text: 'Company',
    //   href: '/company',
    // },
    // {
    //   text: 'Company',
    //   href: '/company',
    // },
  ];

  // Other resources
  const otherResources = [
    // {
    //   text: 'MIT License',
    //   href: '#',
    // },
    // {
    //   text: 'Terms & Conditions',
    //   href: '#',
    // },
    // {
    //   text: 'Privacy Policy',
    //   href: '#',
    // },
    // {
    //   text: 'Contact Us',
    //   href: '/contact',
    // },
    
  ];

  return (
    <footer className="bg-black pt-6 sm:pt-8 pb-4 sm:pb-6 text-gray-300 " style={{border:'top 1px solid white'}}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Flex Container */}
        <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-4">
            <h4 className="text-2xl sm:text-3xl font-semibold text-gray-100">
              Let's keep in touch!
            </h4>
            <h5 className="text-base sm:text-lg text-gray-300 mt-0 mb-2">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 mb-6 lg:mb-0 flex flex-wrap gap-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`bg-gray-800 ${link.color} ${link.hoverColor} w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-700 transition-colors`}
                  aria-label={link.platform}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Right Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12">
              {/* Useful Links */}
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
                <span className="block uppercase text-gray-400 text-sm font-semibold mb-2">
                  {/* Useful Links */}
                </span>
                <ul className="list-none">
                  {usefulLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="block text-gray-300 hover:text-gray-100 text-sm font-semibold py-1"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Other Resources */}
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
                <span className="block uppercase text-gray-400 text-sm font-semibold mb-2">
                  {/* Other Resources */}
                </span>
                <ul className="list-none">
                  {otherResources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="block text-gray-300 hover:text-gray-100 text-sm font-semibold py-1"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="my-6 border-gray-700" />
        {/* Bottom Section */}
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full md:w-1/3 px-4 mx-auto text-center">
            <div className="text-sm text-gray-400 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{' '}
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-gray-400 hover:text-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vaultpay Solutions
              </a>{' '}
              {' '}
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-gray-400 hover:text-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
               Pvt. Ltd
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;