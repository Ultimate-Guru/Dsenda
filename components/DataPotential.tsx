import Image from "next/image";
import { ArrowRight } from "lucide-react";

const DataPotential = () => {
    return (
        <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-center text-foreground">
                Your Data Has More Potential
                <br />
                Than You <span className="text-[#4F46E5]">Think</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-14">
                <div className="">
                    <Image
                        src="/Vector_1.svg"
                        alt="Two friends laughing while looking at a phone"
                        width={600}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col items-start justify-start gap-12 leading-7 mb-4">
                    <p className="text-[#191919]">
                        Every business generates valuable data every day. From sales and finances to customers and operations. Yet, much of that information remains scattered across spreadsheets, disconnected systems, and manual reports. Without clear visibility, making confident decisions becomes difficult
                    </p>
                    <p className="text-[#191919]">
                        Dsenda transforms complex business data into meaningful insights through intelligent analytics, interactive dashboards, and actionable reports. So instead of guessing what&apos;s happening in your business, you&apos;ll know exactly where you stand and what to do next.
                    </p>

                    <button className="flex items-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-lg px-3 h-11 text-sm transition-colors cursor-pointer">
                        Contact Our Team
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>

    )
}

export default DataPotential