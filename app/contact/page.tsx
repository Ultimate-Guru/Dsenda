import type { Metadata } from 'next'
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import FasterAnswer from "./components/FasterAnswer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Contact | Dsenda',
  description: 'Get in touch with Dsenda to discuss your data challenges, analytics goals, and business solutions.',
}

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <ContactHero />
      <ContactForm />
      <FasterAnswer />
      <Footer />
    </main>
  );
}
