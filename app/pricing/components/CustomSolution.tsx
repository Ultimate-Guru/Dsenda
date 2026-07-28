import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link"

export default function CustomSolution() {
    return (
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-20">

            <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-[#F9FAF9] shadow-2xl p-10 md:grid-cols-2 md:p-14">
               
               {/* Left Side */}
                <div>
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                        Need Something <br />
                        <span className="text-[#4F46E5]">Tailored?</span>
                    </h2>
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
                        Every organization has unique goals and data requirements. If our
                        packages don&apos;t perfectly match your needs, we&apos;ll design
                        a custom analytics solution built around your business.
                    </p>
                    <Link 
                        href="/request-quote" 
                        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#4F46E5] px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4338CA]">
                        Request A Quote
                        <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Right Side */}
                <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
                    <Image
                        src="/tailored.png"
                        alt="Analyst working at a desk in a modern office"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

        </section>
    );
}