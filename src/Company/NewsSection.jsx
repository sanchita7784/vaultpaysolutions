import React from 'react';
import logo from '../assets/logo.png'
const NewsSection = () => {
  return (
    <section className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col bg-gradient-to-b from-stone-950 to-black py-8 sm:py-12 min-h-screen">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-7xl space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-32">
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-6 sm:space-y-8">
              <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Latest news
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-end lg:gap-12">
              <div>
                <a
                  href="/news"
                  className="relative isolate inline-flex items-center justify-center border text-xs sm:text-sm md:text-base uppercase font-mono tracking-widest shrink-0 focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:opacity-50 [&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:shrink-0 [&>svg]:sm:my-1 px-3 sm:px-4 py-1.5 sm:py-2 [&>svg]:size-4 sm:[&>svg]:size-5 gap-x-2 bg-transparent border-orange-500/40 text-orange-500 hover:bg-orange-900/20 rounded-full transition-all duration-200"
                >
                  <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 hidden [@media(pointer:fine)]:inline-block" aria-hidden="true" />
                  View all
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* News Card 1: Grok 3 */}
          <div className="flex flex-col relative group">
            <div className="w-full aspect-square">
              <div
                className="flex duration-150 items-center whitespace-pre-wrap break-words w-full bg-[#0C0C0B] aspect-square text-2xl sm:text-3xl tracking-tight leading-tight"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=600")',
                  backgroundSize: 'auto 100%',
                  backgroundPosition: 'right center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="flex items-center justify-center w-full h-full">
                  {/* <div className="flex bg-gray-950 px-2 sm:px-3 py-1 sm:py-2 w-auto max-w-[50%]">
                    <h2 className="uppercase text-balance bg-gray-950 text-orange-500 text-xl sm:text-2xl md:text-3xl">
                      Grok 3
                    </h2>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="grow block mt-4 sm:mt-6 pb-8 sm:pb-12">
              <a href="/news/grok-3">
                <div className="absolute inset-0" />
                <h4 className="text-base sm:text-lg text-white">VSPL App Development — The Age of Developement Revolution</h4>
              </a>
              <p className="mt-1 sm:mt-2 leading-5 sm:leading-6 text-gray-400 text-sm sm:text-base line-clamp-3">
                We are thrilled to unveil an early preview of VSPL CRM, our most advanced Application Of MyRidez yet, blending superior functionalities with extensive pretraining Advantages.
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 sm:gap-3">
              <div>
                <span className="font-mono text-xs text-gray-500">February 19, 2025</span>
              </div>
              <div>
                <button
                  type="button"
                  className="relative isolate inline-flex items-center justify-center border text-xs sm:text-sm uppercase font-mono tracking-widest shrink-0 focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:opacity-50 [&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:shrink-0 [&>svg]:sm:my-1 px-2 sm:px-3.5 py-1 sm:py-1.5 [&>svg]:size-3 sm:[&>svg]:size-4 gap-x-1 sm:gap-x-2 bg-transparent border-orange-500/40 text-orange-500 hover:bg-orange-900/20 group-hover:bg-orange-900/20 rounded-full transition-all duration-200"
                >
                  <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 hidden [@media(pointer:fine)]:inline-block" aria-hidden="true" />
                  READ
                </button>
              </div>
            </div>
          </div>

          {/* News Card 2: Series C */}
          <div className="flex flex-col relative group">
            <div className="w-full aspect-square">
              <div
                className="flex duration-150 items-center whitespace-pre-wrap break-words w-full bg-[#0C0C0B] aspect-square text-2xl sm:text-3xl tracking-tight leading-tight"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600")',
                  backgroundSize: 'auto 100%',
                  backgroundPosition: 'right center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="flex items-center justify-center w-full h-full">
                  {/* <div className="flex bg-gray-950 px-2 sm:px-3 py-1 sm:py-2 w-auto max-w-[50%]">
                    <h2 className="uppercase text-balance bg-gray-950 text-orange-500 text-xl sm:text-2xl md:text-3xl">
                      Series C
                    </h2>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="grow block mt-4 sm:mt-6 pb-8 sm:pb-12">
              <a href="/news/series-c">
                <div className="absolute inset-0" />
                <h4 className="text-base sm:text-lg text-white">AI Models</h4>
              </a>
              <p className="mt-1 sm:mt-2 leading-5 sm:leading-6 text-gray-400 text-sm sm:text-base line-clamp-3">
                We are partnering with My Ridez, Aladdin Alsarees, Fidelity Management & Research Company, Kingdom Holdings, Lightspeed, MGX, Morgan Stanley, OIA, QIA, Sequoia Capital, Valor Equity Partners and Vy Capital, amongst others.
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 sm:gap-3">
              <div>
                <span className="font-mono text-xs text-gray-500">December 23, 2024</span>
              </div>
              <div>
                <button
                  type="button"
                  className="relative isolate inline-flex items-center justify-center border text-xs sm:text-sm uppercase font-mono tracking-widest shrink-0 focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:opacity-50 [&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:shrink-0 [&>svg]:sm:my-1 px-2 sm:px-3.5 py-1 sm:py-1.5 [&>svg]:size-3 sm:[&>svg]:size-4 gap-x-1 sm:gap-x-2 bg-transparent border-orange-500/40 text-orange-500 hover:bg-orange-900/20 group-hover:bg-orange-900/20 rounded-full transition-all duration-200"
                >
                  <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 hidden [@media(pointer:fine)]:inline-block" aria-hidden="true" />
                  READ
                </button>
              </div>
            </div>
          </div>

          {/* News Card 3: Grok for all */}
          <div className="flex flex-col relative group">
            <div className="w-full aspect-square">
              <div
                className="flex duration-150 items-center whitespace-pre-wrap break-words w-full bg-[#0C0C0B] aspect-square text-2xl sm:text-3xl tracking-tight leading-tight"
                style={{
                  backgroundImage: 'url("https://media.istockphoto.com/id/1443245439/photo/business-meeting-businesswoman-woman-office-portrait-job-career-happy-businessman-teamwork.jpg?s=612x612&w=0&k=20&c=1ZR02c1UKfGdBCNWzzKlrwrVZuEiOqnAKcKF4V_t038=")',
                  backgroundSize: 'auto 100%',
                  backgroundPosition: 'right center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="flex items-center justify-center w-full h-full">
                  {/* <div className="flex bg-gray-950 px-2 sm:px-3 py-1 sm:py-2 w-auto max-w-[50%]">
                    <h2 className="uppercase text-balance bg-gray-950 text-orange-500 text-xl sm:text-2xl md:text-3xl">
                       Grok for all 
                    </h2>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="grow block mt-4 sm:mt-6 pb-8 sm:pb-12">
              <a href="/news/grok-1212">
                <div className="absolute inset-0" />
                <h4 className="text-base sm:text-lg text-white">Bringing VSPL to Everyone</h4>
              </a>
              <p className="mt-1 sm:mt-2 leading-5 sm:leading-6 text-gray-400 text-sm sm:text-base line-clamp-3">
                VSPL is now trying to be faster, sharper, and has improved multilingual support. It is available to everyone on the payment platform.
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 sm:gap-3">
              <div>
                <span className="font-mono text-xs text-gray-500">December 12, 2024</span>
              </div>
              <div>
                <button
                  type="button"
                  className="relative isolate inline-flex items-center justify-center border text-xs sm:text-sm uppercase font-mono tracking-widest shrink-0 focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:opacity-50 [&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:shrink-0 [&>svg]:sm:my-1 px-2 sm:px-3.5 py-1 sm:py-1.5 [&>svg]:size-3 sm:[&>svg]:size-4 gap-x-1 sm:gap-x-2 bg-transparent border-orange-500/40 text-orange-500 hover:bg-orange-900/20 group-hover:bg-orange-900/20 rounded-full transition-all duration-200"
                >
                  <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 hidden [@media(pointer:fine)]:inline-block" aria-hidden="true" />
                  READ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;