import Image from "next/image";

export default function ComprehensiveAnalytics() {
    return (
        <section className="px-6 py-20">
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-[#191919] md:text-4xl">
                Comprehensive Analytics, Tailored to Your{" "}
                <span className="text-[#4F46E5]">Business</span>
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Business Intelligence — tall card spanning both rows */}
                <div className="flex flex-col justify-between rounded-3xl bg-[#EDEDFC] p-8 md:row-span-2">
                    <div>
                        <h3 className="text-xl font-semibold text-[#191919]">
                            Business Intelligence
                        </h3>
                        <p className="mt-3 text-sm text-[#191919]/70">
                            Transform complex business data into meaningful insights that support confident, strategic decision-making across your organization.
                        </p>
                    </div>

                    <div className="relative mt-10 h-80 w-full">
                        <Image
                            src="/business.svg"
                            alt="Person analyzing a growth chart"
                            fill
                            className="object-contain object-bottom-right"
                        />
                    </div>
                </div>

                {/* Automated Reporting — wide card */}
                <div className="flex flex-col justify-between rounded-2xl bg-[#EDEDFC] p-8">
                    <div>
                        <h3 className="text-xl font-semibold text-[#191919]">
                            Automated Reporting
                        </h3>
                        <p className="mt-3 text-sm text-[#191919]/70">
                            Reduce manual reporting with automated reports that deliver accurate business information quickly and consistently.
                        </p>
                    </div>

                    <div className="relative mt-8 h-64 w-full">
                        <Image
                            src="/automated.svg"
                            alt="Person presenting a dashboard with charts"
                            fill
                            className="object-contain object-bottom-right"
                        />
                    </div>
                </div>

                {/* Strategic Insights + Data Preparation — split row */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col justify-between rounded-2xl bg-[#EDEDFC] p-8">
                        <div>
                            <h3 className="text-xl font-semibold text-[#191919]">
                                Strategic Insights
                            </h3>
                            <p className="mt-3 text-sm text-[#191919]/70">
                                Go beyond dashboards with expert recommendations that help you optimize operations and make informed business decisions.
                            </p>
                        </div>

                        <div className="relative mt-8 h-56 w-full">
                            <Image
                                src="/strategy.svg"
                                alt="Person reviewing insights with a magnifying glass"
                                fill
                                className="object-contain object-bottom-right"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between rounded-2xl bg-[#EDEDFC] p-8">
                        <div>
                            <h3 className="text-xl font-semibold text-[#191919]">
                                Data Preparation
                            </h3>
                            <p className="mt-3 text-sm text-[#191919]/70">
                                Ensure your data is clean, structured, and reliable before analysis, creating a strong foundation for accurate insights.
                            </p>
                        </div>

                        <div className="relative mt-8 h-48 w-full">
                            <Image
                                src="/preparation.svg"
                                alt="Team collaborating around a data dashboard"
                                fill
                                className="object-contain object-bottom-right"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}