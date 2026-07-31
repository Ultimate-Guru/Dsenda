import type { Metadata } from 'next'
import Solutionshero from "./components/Solutionshero"
import Analytics from "@/app/solutions/components/Analytics"
import WhyChooseUs from "./components/Whychooseus"
import Faqsection from "./components/Faqsection"
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: 'Solutions | Dsenda',
  description: 'See how Dsenda turns data into smarter decisions with analytics, reporting, and custom business intelligence solutions.',
}

const page = () => {
  return (
    <main>
      <Solutionshero />
      <Analytics />
      <WhyChooseUs />
      <Faqsection />
      <Banner />
      <Footer />
    </main>
  )
}

export default page