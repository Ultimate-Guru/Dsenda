import React from 'react'
import IndustryHero from './comppnents/IndustryHero'
import IndustryGrid from './comppnents/IndustryGrid'
import CapabilitySection from './comppnents/CapabilitySection'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <main>
      <IndustryHero />
      <IndustryGrid />
      <CapabilitySection />
      <Banner />
      <Footer />
    </main>
  )
}

export default page