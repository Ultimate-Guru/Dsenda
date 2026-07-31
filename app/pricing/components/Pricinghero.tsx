import { ArrowRight } from "lucide-react";
import Link from "next/link"

export default function PricingHero() {
    return (
        <section className="mx-auto max-w-4xl px-6 pb-16 pt-32 text-center">

            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                Flexible Analytics Solutions for Every{" "}
                <span className="text-[#4F46E5]">Business</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base text-[#191919]">
                Whether you&apos;re a startup, a growing business, or a large
                enterprise, Dsenda offers flexible analytics solutions tailored to
                your goals and requirements.
            </p>

            <div className="mt-8 flex justify-center">
                <Link
                    href="/request-quote"
                    className="flex items-center gap-2 rounded-lg bg-[#4F46E5] px-3 py-3 text-sm font-medium text-white shadow-[0_4px_0_#C8C6F7] transition-colors hover:bg-[#4338CA]">
                    Request A Quote
                    <ArrowRight size={16} />
                </Link>
            </div>

        </section>
    );
}