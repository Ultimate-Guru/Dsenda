import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { IndustryCard } from "./Content";
import Image from "next/image";

export default function IndustryTile({ industry }: { industry: IndustryCard }) {
    return (
        <div className="relative flex h-full min-h-64 flex-col justify-between overflow-hidden rounded-2xl bg-[#EDEDFC] p-8">
            {industry.illustration && (
                <div className="pointer-events-none absolute top-0 right-0 hidden w-[46%] max-w-64 lg:block">
                    <Image
                        src="/preparation.svg"
                        alt="Preparation"
                        width={230}
                        height={200}
                        loading="lazy"
                        sizes="(min-width: 1024px) 18rem, 0px"
                        className="h-auto w-full object-top-right"
                    />
                </div>
            )}
            <div className={industry.illustration ? "relative z-10 lg:max-w-[58%]" : undefined}>
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F9FAF9] text-gray-900 shadow-sm">
                    {industry.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{industry.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#6B7280]">
                    {industry.description}
                </p>
            </div>

            <div className="relative z-10 mt-6 flex items-end justify-between gap-4">
                <div>
                    {industry.link && (
                        <Link
                            href={industry.link.href}
                            className="text-sm font-medium text-gray-900 underline underline-offset-4"
                        >
                            {industry.link.label}
                        </Link>
                    )}
                    {industry.cta && (
                        <Link
                            href={industry.cta.href}
                            className="inline-flex items-center gap-2 rounded-lg bg-[#4F46E5] px-3 py-2.5 text-sm font-medium text-white shadow-[0_4px_0_#C8C6F7] transition-colors hover:bg-[#4338CA]"
                        >
                            {industry.cta.label}
                            <ArrowRight className="h-4 w-4 mb-1" />
                        </Link>
                    )}
                </div>

            </div>
        </div>
    );
}
