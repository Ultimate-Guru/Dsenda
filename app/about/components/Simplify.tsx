import Image from "next/image";
import Link from "next/link";

export default function Simplify() {
    return (
        <section className="px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-12 text-center text-3xl font-bold leading-tight text-[#191919] sm:text-4xl">
                    Built to Simplify
                    <br />
                    Business <span className="text-[#4F46E5]">Intelligence</span>
                </h2>

                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="text-base leading-relaxed text-[#191919]">
                            Businesses today generate more data than ever before, yet many struggle to transform that information into meaningful decisions. Dsenda was created to bridge that gap by making business intelligence accessible, practical, and tailored to the unique needs of every organization. <br />
                            From collecting and preparing data to delivering insightful dashboards and strategic recommendations, our focus is on helping businesses gain clarity and unlock new opportunities for growth.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#4F46E5] px-3 py-3 text-sm font-semibold text-white shadow-[0_4px_0_#C8C6F7] transition-colors hover:bg-[#4338CA]">
                            Contact Our Team
                            <span aria-hidden>&rarr;</span>
                        </Link>
                    </div>

                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl">
                        <Image
                            src="/abt_hero.png"
                            alt="Two colleagues collaborating in a shop"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}