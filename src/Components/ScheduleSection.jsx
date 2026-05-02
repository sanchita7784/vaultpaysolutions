import React from 'react';

function PartnersSection() {
  // Partner logos data
  const partnerLogos = [
    {
      src: 'https://imgs.search.brave.com/wz_bVWMkELSkW3B4jssNY1q0XPkM7Gsutpt7iEvbTD0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMS9ZZXMt/QmFuay1Mb2dvLVBO/Ry1UcmFuc3BhcmVu/dC1JbWFnZS5wbmc',
      alt: 'Social proof logo 1',
    },
    {
      src: 'https://imgs.search.brave.com/N3D8nYYhKV5Lbv52ldU1N-wSp8WJsY2wvARivsaOuy0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzUwL0NhbmFyYV9C/YW5rX0xvZ28uc3Zn',
      alt: 'Social proof logo 2',
    },
    {
      src: 'https://imgs.search.brave.com/rfiPNYw9fqjb2h9SPTNRmqgJjxuZGFo9f2S9oo-mLqw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzM1LzEvaWRmYy1m/aXJzdC1iYW5rLWxv/Z28tcG5nX3NlZWts/b2dvLTM1NjE3My5w/bmc',
      alt: 'Social proof logo 3',
    },
    {
      src: 'https://imgs.search.brave.com/1KB3uteFMvozcNn7H0vx6IBtBkaGSnkvWm1KWuoHXSg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MjdiYWQ4YThkNjU5/ODE5YjExMDg1MDMu/cG5n',
      alt: 'Social proof logo 4',
    },
    {
      src: 'https://imgs.search.brave.com/U2euMgMwdGmI_FqhLfwJ7Z8sNVvWVdvzOc21AITHr5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9BeGlzX0Jh/bmsvQXhpc19CYW5r/LUxvZ28ud2luZS5z/dmc',
      alt: 'Social proof logo 5',
    },
  ];

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl lg:text-6xl font-semibold">
            Thanks to our Banking partners
          </h2>
          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-8 sm:h-10 lg:h-17 w-auto bg-white"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;