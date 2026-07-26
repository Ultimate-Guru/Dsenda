import Solutionshero from "./components/Solutionshero"
import Analytics from "@/app/solutions/components/Analytics"
import WhyChooseUs from "./components/Whychooseus"
import Faqsection from "./components/Faqsection"
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"

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