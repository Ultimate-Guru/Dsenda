import type { Metadata } from 'next'
import Banner from '@/components/Banner'
import CompareFeatures from './components/CompareFeatures'
import CustomSolution from './components/CustomSolution'
import PricingCards from './components/PricingCards'
import PricingHero from './components/Pricinghero'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pricing | Dsenda',
  description: 'Discover flexible data solutions from Dsenda, with pricing options designed to fit your business needs.',
}

const page = () => {
  return (
    <main>
      <PricingHero />
      <PricingCards />
      <CustomSolution />
      <CompareFeatures />
      <Banner />
      <Footer />
    </main>
  )
}

export default page