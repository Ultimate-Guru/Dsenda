import { ArrowRight } from "lucide-react";
import Link from "next/link"

export default function ContactHero() {
  return (
    <section className="px-6 pb-10 pt-36 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold leading-tight text-[#191919] sm:text-5xl">
          Let&apos;s Talk About Your
          <span className="block">
            Business <span className="text-[#4F46E5]">Data</span>
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#191919]">
          Whether you&apos;re looking for a custom analytics solution, have
          questions about our services, or need expert guidance, our team is
          here to help.
        </p>

        <Link
          href="/request-quote"
          className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-3 text-sm font-medium text-white shadow-[0_4px_0_#C8C6F7] transition-colors hover:bg-[#4338CA]">
          Schedule A Consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
