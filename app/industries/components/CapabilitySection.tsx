import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { capabilities } from "./Content";
import CapabilityCard from "./CapabilityCard";

export default function CapabilitiesSection() {
    return (
        <section className="pt-16 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        One Platform. Multiple Industries.
                        <span className="block text-[#4F46E5]">Endless Possibilities.</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-[#6B7280]">
                       Our flexible analytics solutions are designed to adapt to your organization&apos;s unique goals, helping you make informed decisions regardless of your industry.
                    </p>
                </div>
                <Link
                    href="/solutions"
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#4F46E5] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3a30c0]"
                >
                    Explore Solutions
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {capabilities.map((c) => (
                    <CapabilityCard key={c.title} {...c} />
                ))}
            </div>
        </section>
    );
}