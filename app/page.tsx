// import Image from "next/image";  

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DataPotential from "@/components/DataPotential";
import Features from "@/components/Features";
import ChooseUs from "@/components/ChooseUs";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Banner from "@/components/Banner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <DataPotential />
      <Features />
      <ChooseUs />
      <Process />
      <FAQ />
      <Banner />
      <Footer />
    </main>
  );
}
