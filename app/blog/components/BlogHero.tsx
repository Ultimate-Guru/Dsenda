import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogHero({ href = "/request-quote" }: { href?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-40 pb-10">
      <h1 className="max-w-xl text-3xl font-semibold leading-tight text-[#191919] md:text-4xl">
        Let&apos;s Build the Right Analytics Solution for Your{" "}
        <span className="text-[#4F46E5]">Business</span>
      </h1>
      <p className="mt-3 max-w-lg text-sm text-[#191919]/80">
        Tell us about your business, your goals, and your data needs. We&apos;ll
        review your requirements and provide a customized solution and
        quotation tailored to your organization.
      </p>
      <Link
        href={href}
        className="mt-9 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-3 text-sm font-medium text-white shadow-[0_4px_0_#C8C6F7] transition-colors hover:bg-[#4338CA]">
        Schedule a consultation
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
