import { ArrowRight } from "lucide-react";
import Link from "next/link"

export default function FasterAnswer() {
  return (
    <section className="px-6 pb-36 pt-8 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold leading-tight text-[#191919] sm:text-5xl">
          Need a faster answer?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#191919]/35">
          Our help center is packed with documentation, video tutorials, and
          guides to get you started with Dsenda in minutes.
        </p>

        <Link
          href="/request-quote"
          className="mt-9 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-4 text-sm font-medium text-white shadow-[0_4px_0_#C8C6F7] transition-colors hover:bg-[#4338CA]"
        >
          Schedule A Consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
