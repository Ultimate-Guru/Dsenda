import type { Metadata } from 'next'
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import Footer from "@/components/Footer";
import FasterAnswer from './components/FasterAnswer';

export const metadata: Metadata = {
  title: 'Join the Waitlist | Dsenda',
  description: 'Join the Dsenda waitlist for early access to clearer, more useful business data.',
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
