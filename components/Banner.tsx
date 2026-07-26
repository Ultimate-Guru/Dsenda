import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Banner = () => {
    return (
        <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-20">
            <div className="bg-[#EDEDFC] rounded-3xl overflow-hidden grid md:grid-cols-2 items-center">
                <div className="p-10 lg:p-14">
                    <h2 className="text-2xl lg:text-3xl font-display font-semibold text-[#191919] leading-tight">
                        Turn Your Data Into Your Greatest Business{" "}
                        <span className="text-[#4F46E5]">Asset</span>
                    </h2>
                    <p className="body text-muted-foreground mt-4 max-w-sm">
                        Let&apos;s build an analytics solution tailored to your industry and
                        business goals.
                    </p>
                    <button className="body flex items-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-lg px-3 h-11 text-sm mt-6 transition-colors">
                        Contact Our Team
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="h-64 md:h-full">
                    <Image
                        src="/banner.png"
                        alt="Two people exchanging a shopping bag"
                        width={600}
                        height={400}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
