import type { Metadata } from 'next'
import QuoteHero from "./components/QuoteHero"
import QuoteForm from "./components/QuoteForm"
import ProcessSteps from "./components/ProcessSteps"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: 'Request a Quote | Dsenda',
  description: 'Start your Dsenda journey by requesting a customized analytics solution tailored to your goals, data, and industry.',
}

const page = () => {
  return (
    <main>
      <QuoteHero />
      <QuoteForm />
      <ProcessSteps />
      <Footer />
    </main>
  )
}

export default page