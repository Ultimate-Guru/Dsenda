import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const IndustryHero = () => {
  return (
    <section className="pt-40 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

      <div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Analytics Solutions Tailored to Every{" "}
          <span className="text-[#4F46E5]">Industry</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed">
          No two industries operate the same way. That&apos;s why Dsenda delivers customized business intelligence solutions designed to address the unique challenges, goals, and data needs of every organization.
        </p>
        <Link
          href="/solutions"
          className="mt-8 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-white bg-[#4F46E5] transition-colors hover:bg-[#3c39b4]">
          Explore Solutions
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>

      <div className="aspect-4/3 w-full">
        <Image src="/industry.svg" alt="Industry Depiction" loading="lazy" width={600} height={400} />
      </div>

    </section>
  )
}

export default IndustryHero