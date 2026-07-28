import Banner from '@/components/Banner'
import CompareFeatures from './components/CompareFeatures'
import CustomSolution from './components/CustomSolution'
import PricingCards from './components/PricingCards'
import PricingHero from './components/Pricinghero'
import Footer from '@/components/Footer'

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