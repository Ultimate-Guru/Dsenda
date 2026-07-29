import QuoteHero from "./components/QuoteHero"
import QuoteForm from "./components/QuoteForm"
import ProcessSteps from "./components/ProcessSteps"
import Footer from "@/components/Footer"

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