import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react"

export default function AboutHero() {
    return (
        <section className="pt-50 relative overflow-hidden bg-[#EDEDFC] px-6 py-20 lg:px-10">
            <Image src="/top-right.png" alt="Hero Dots" width={150} height={50} className="absolute right-0 top-16" />

            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                    Empowering Businesses
                    <br />
                    Through Smarter{" "}
                    <span className="text-[#4F46E5]">Analytics</span>
                </h1>

                <p className="mx-auto mt-6 max-w-164 text-base leading-relaxed text-[#191919]">
                    Dsenda helps organizations transform complex business data into
                    meaningful insights, enabling confident decisions, improved
                    performance, and sustainable growth.
                </p>

                <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#4F46E5] px-3 py-3 text-sm font-semibold text-white shadow-[0_4px_0_#C8C6F7] transition-colors hover:bg-[#4338CA]" >
                    Get Started
                    <ArrowRight className="w-4 h-4 mb-1" />
                </Link>
            </div>

        </section>
    );
}