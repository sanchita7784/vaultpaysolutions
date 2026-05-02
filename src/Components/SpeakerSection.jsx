import React from 'react';

function SpeakersSection() {
  // Data for Keynote Speakers
  const keynoteSpeakers = [
    {
      name: 'Piyush Prajapati',
      title: 'Flutter Developer || Web developer',
      description:
        'Piyush has led and managed leading design teams across the world. Helping coordinating, managing, and scaling up development of projects successfully to launch in the market.',
      image: {
        src: 'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png',
        srcSet:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        alt: 'Zach Thornton',
      },
    },
    {
      name: 'Abhishek Pawar',
      title: 'Flutter Developer',
      description:
        'Abhishek brings a wealth of experience in flutter app development. he’s passionate about using technology to streamline processes and help teams work smarter.',
      image: {
        src: 'https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a7597153_Contemplative%20Young%20Woman%20with%20Afro%20Curls.avif',
        srcSet:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        alt: 'Tamara Hendrix',
      },
    },
    {
      name: 'Sanchita Sharma',
      title: 'Web Developer',
      description:
        'Sanchita is a Web Developer with a focus on Frontend Frameworks and Backend as well.She manages the web development frontend Designs and also works over functionalities used in the webpages ',
      image: {
        src: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png',
        srcSet:
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png',
        alt: 'Taylor Hebert',
      },
    },
  ];

  // Data for Session Leaders
  const sessionLeaders = [
    {
      name: 'Balraj Singh',
      title: 'Senior Marketing Head',
      image: {
        src: 'https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a75970f7_Serene%20Young%20Woman%20with%20Time-Lapse%20Light%20Effect.avif',
        srcSet:
          'https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a75970f7_Serene%20Young%20Woman%20with%20Time-Lapse%20Light%20Effect.avif 500w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a75970f7_Serene%20Young%20Woman%20with%20Time-Lapse%20Light%20Effect.avif 1345w',
        alt: 'Nina King',
      },
    },
    {
      name: 'Karan Jaitly',
      title: 'Senior Digital Marketing coordinator',
      image: {
        src: 'https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a7597124_Serene%20Contemplation%20in%20Yellow.avif',
        srcSet:
          'https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a7597124_Serene%20Contemplation%20in%20Yellow.avif 500w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a7597124_Serene%20Contemplation%20in%20Yellow.avif 800w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a7597124_Serene%20Contemplation%20in%20Yellow.avif 1080w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a7597124_Serene%20Contemplation%20in%20Yellow.avif 2400w',
        alt: 'Val Neal',
      },
    },
    // {
    //   name: 'Saloni ',
    //   title: 'Team Operations Manager',
    //   image: {
    //     src: 'https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a7597110_Contemplative%20Young%20Woman%20in%20Natural%20Light.avif',
    //     srcSet:
    //       'https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a7597110_Contemplative%20Young%20Woman%20in%20Natural%20Light.avif 500w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a7597110_Contemplative%20Young%20Woman%20in%20Natural%20Light.avif 800w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a7597110_Contemplative%20Young%20Woman%20in%20Natural%20Light.avif 1080w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a7597110_Contemplative%20Young%20Woman%20in%20Natural%20Light.avif 1600w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a7597110_Contemplative%20Young%20Woman%20in%20Natural%20Light.avif 2400w',
    //     alt: 'Emily Davis',
    //   },
    // },
    {
      name: 'Mitesh Gupta',
      title: 'AI Engineer',
      image: {
        src: 'https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a75970c2_Intense%20Gaze%20of%20a%20Bald%20Man%20with%20Green%20Eyes.avif',
        srcSet:
          'https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a75970c2_Intense%20Gaze%20of%20a%20Bald%20Man%20with%20Green%20Eyes.avif 500w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a75970c2_Intense%20Gaze%20of%20a%20Bald%20Man%20with%20Green%20Eyes.avif 800w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a75970c2_Intense%20Gaze%20of%20a%20Bald%20Man%20with%20Green%20Eyes.avif 1600w',
        alt: 'Louis Prince',
      },
    },
    // {
    //   name: 'Pallavi Sood',
    //   title: 'Networking lead',
    //   image: {
    //     src: 'https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a75970df_Thoughtful%20Young%20Man%20in%20Vibrant%20Portrait.avif',
    //     srcSet:
    //       'https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a75970df_Thoughtful%20Young%20Man%20in%20Vibrant%20Portrait.avif 500w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a75970df_Thoughtful%20Young%20Man%20in%20Vibrant%20Portrait.avif 800w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a75970df_Thoughtful%20Young%20Man%20in%20Vibrant%20Portrait.avif 1080w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a75970df_Thoughtful%20Young%20Man%20in%20Vibrant%20Portrait.avif 2400w',
    //     alt: 'Cliff Huff',
    //   },
    // },
    // {
    //   name: 'Harkirat Singh',
    //   title: 'Graphics Designer',
    //   image: {
    //     src: 'https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a759713b_Confident%20Individual%20with%20Intricate%20Style.avif',
    //     srcSet:
    //       'https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a759713b_Confident%20Individual%20with%20Intricate%20Style.avif 500w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a759713b_Confident%20Individual%20with%20Intricate%20Style.avif 800w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a759713b_Confident%20Individual%20with%20Intricate%20Style.avif 1080w, https://cdn.prod.website-files.com/6808a2f718788c10a75970a2/6808a2f718788c10a759713b_Confident%20Individual%20with%20Intricate%20Style.avif 1808w',
    //     alt: 'Everett Preston',
    //   },
    // },
    
  ];

  return (
    <>
    <section id="speakers" className="bg-black text-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
        {/* Keynote Speakers Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent" style={{}}>Our Senior Developers</h2>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-16"></div>
        {/* Keynote Speakers Card */}
        <div className="relative bg-black p-6 sm:p-8 rounded-lg shadow-lg">
          {/* Keynote Speakers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {keynoteSpeakers.map((speaker, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Speaker Image */}
                <div className="relative w-full">
                  <img
                    src={speaker.image.src}
                    srcSet={speaker.image.srcSet}
                    sizes="(max-width: 767px) 100vw, 33vw"
                    alt={speaker.image.alt}
                    loading="lazy"
                    className="w-full h-64 sm:h-80 object-cover rounded-md"
                  />
                  <div className="absolute inset-0 text-gray-300">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 450 450"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 3.49691e-06H72L0 72V3.49691e-06Z" fill="currentColor" />
                      <path d="M0 450H72L0 378V450Z" fill="currentColor" />
                      <path d="M450 3.49691e-06V72L378 0L450 3.49691e-06Z" fill="currentColor" />
                      <path d="M450 450V378L378 450H450Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8"></div>
                {/* Speaker Details */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">{speaker.name}</h3>
                <div className="mt-2"></div>
                <div className="text-gray-500 flex items-center gap-1 text-sm sm:text-base">
                  <span>[</span>
                  <span>{speaker.title}</span>
                  <span>]</span>
                </div>
                <div className="mt-4"></div>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed" style={{textShadow:'0 0 2px'}}>
                  {speaker.description}
                </p>
              </div>
            ))}
          </div>
          {/* Card Corner Cuts */}
          <div className="absolute inset-0 text-blue-300">
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

        <div className="mt-12 sm:mt-16 lg:mt-20"></div>

        {/* Session Leaders Heading */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Team Members</h2>
        </div>
        <div className="mt-6 sm:mt-8 lg:mt-12"></div>

        {/* Session Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {sessionLeaders.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Speaker Image */}
              <div className="relative w-full">
                {/* <img
                  src={speaker.image.src}
                  srcSet={speaker.image.srcSet}
                  sizes="(max-width: 767px) 100vw, 33vw"
                  alt={speaker.image.alt}
                  loading="lazy"
                  className="w-full h-48 sm:h-64 object-cover rounded-md"
                /> */}
                <div className="absolute inset-0 text-blue-300">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 450 450"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 3.49691e-06H72L0 72V3.49691e-06Z" fill="currentColor" />
                    <path d="M0 450H72L0 378V450Z" fill="currentColor" />
                    <path d="M450 3.49691e-06V72L378 0L450 3.49691e-06Z" fill="currentColor" />
                    <path d="M450 450V378L378 450H450Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 sm:mt-6"></div>
              {/* Speaker Details */}
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold">{speaker.name}</h3>
              <div className="mt-2"></div>
              <div className="text-gray-500 flex items-center gap-1 text-xs sm:text-sm">
                <span>[</span>
                <span>{speaker.title}</span>
                <span>]</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
      className="w-full h-1 sm:h-1.5 lg:h-5 my-4 sm:my-6 lg:my-8 bg-gradient-to-r from-purple-500 via-red-500 via-yellow-500 to-green-500 mt-10"
    ></div>
    </section>

    </>
  );
}

export default SpeakersSection;