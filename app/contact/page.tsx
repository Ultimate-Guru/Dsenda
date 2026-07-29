import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import FasterAnswer from "./components/FasterAnswer";
import Footer from "@/components/Footer";

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
