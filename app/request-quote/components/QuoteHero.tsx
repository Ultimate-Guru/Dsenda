import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const QuoteHero = () => {
    return (
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-40 pb-20 lg:grid-cols-2 lg:px-8">

            <div>
                <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                    Let&apos;s Build the Right Analytics Solution for Your{" "}
                    <span className="text-[#4F46E5]">Business</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed">
                    Tell us about your business, your goals, and your data needs. We&apos;ll review your requirements and provide a customized solution and quotation tailored to your organization.
                </p>
                <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-white bg-[#4F46E5] shadow-[0_4px_0_#C8C6F7] transition-colors hover:bg-[#4338CA]">
                    Schedule A Consultation
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            <div className="relative aspect-square w-full max-w-md justify-self-center rounded-4xl rounded-br-[200px] bg-[#EDEDFC] lg:justify-self-end overflow-hidden">
                <Image
                    src="/people.svg"
                    alt="Business professionals shaking hands"
                    fill
                    className="object-contain object-bottom-right p-8 mt-20"
                    priority
                />
            </div>

        </section>
    )
}

export default QuoteHero