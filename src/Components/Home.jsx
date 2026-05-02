import React from 'react'
import TechHero from './HeroSection'
import AboutSection from './AboutSection'
import SpeakersSection from './SpeakerSection'
import PartnersSection from './ScheduleSection'
import FAQSection from './FaqSection'
import FooterSection from './Footer'
import VaultPaySolutions from './Name'
import GrokAccessSection from '../Vspl/VsplSectionAccess'
import CompactERPDemo from './ERPSection'

function Home() {
  return (
    <div>
      
<VaultPaySolutions/>
<TechHero/>

<AboutSection/>
<GrokAccessSection/>
{/* <CompactERPDemo/> */}
<SpeakersSection/>
<PartnersSection/>
<FAQSection/>
<FooterSection/>
    </div>
  )
}

export default Home
