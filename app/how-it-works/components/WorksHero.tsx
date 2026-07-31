import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SolutionsHero() {
    return (
        <section className="pt-36 px-6 py-20 text-center">
            <h1 className="mx-auto max-w-3xl text-4xl font-semibold text-[#191919] md:text-5xl">
                A Simple Process for Smarter Business {" "}
                <span className="text-[#4F46E5]">Decisions</span>
            </h1>

            <p className="mx-auto mt-6 max-w-186 text-base text-[#191919]/80">
                From securely collecting your data to delivering actionable insights, our streamlined process is designed to help you understand your business better and make confident, data-driven decisions.
            </p>

            <Link
                href="/request-quote"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#4F46E5] px-3 py-3 text-sm font-medium text-white shadow-[0_4px_0_#C8C6F7] transition-colors hover:bg-[#4338CA]">
                Request A Quote
                <ArrowRight className="h-4 w-4 mb-1" />
            </Link>

            <div className="relative mx-auto mt-16 h-88.25 w-82.25 max-w-md overflow-hidden rounded-4xl bg-[#EDEDFC] rounded-bl-4xl rounded-br-[200px]">
                <Image
                    src="/man.svg"
                    alt="Business professional celebrating with a laptop"
                    fill
                    className="object-scale-down"
                    priority
                />
            </div>
        </section>
    );
}