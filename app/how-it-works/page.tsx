import type { Metadata } from "next" 
import WorksHero from "./components/WorksHero";
import ProcessSection from "./components/ProcessSection";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works | Dsenda",
  description:
    "From securely collecting your data to delivering actionable insights, see the Dsenda process for turning your business data into smarter decisions.",
};

const page = () => {
  return (
    <main>
      <WorksHero />
      <ProcessSection />
      <Banner />
      <Footer />
    </main>
  )
}

export default page