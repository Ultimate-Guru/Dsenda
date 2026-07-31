import type { Metadata } from 'next'
import React from 'react'
import IndustryHero from './components/IndustryHero'
import IndustryGrid from './components/IndustryGrid'
import CapabilitySection from './components/CapabilitySection'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Industries We Serve | Dsenda',
  description: 'Explore how Dsenda delivers tailored analytics and data solutions for healthcare, finance, retail, education, and more.',
}

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