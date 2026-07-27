import React from 'react'
import IndustryHero from './components/IndustryHero'
import IndustryGrid from './components/IndustryGrid'
import CapabilitySection from './components/CapabilitySection'
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