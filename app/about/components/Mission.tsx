import Image from "next/image";

export default function Mission() {
    return (
        <section className="bg-white px-6 py-20 lg:px-10">
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div className="relative mx-auto aspect-3/4 w-full max-w-sm overflow-hidden rounded-3xl lg:mx-0">
                    <Image
                        src="/mission.png"
                        alt="Dsenda team member"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="space-y-10">
                    <div>
                        <div className="mb-3 flex items-center gap-3">
                            <Image src="/star.png" alt="Star" width={24} height={24} />
                            <h3 className="text-3xl font-semibold text-[#191919]">
                                Our Mission
                            </h3>
                        </div>
                        <p className="text-base leading-relaxed text-[#191919]">
                            To give every business owner the knowledge, clarity, and insight they need for their business to prosper and not perish, by enlightening their eyes through their data and helping them make better decisions for growth, profitability, and expansion.
                        </p>
                    </div>

                    <div>
                        <div className="mb-3 flex items-center gap-3">
                            <Image src="/star.png" alt="Star" width={24} height={24} />
                            <h2 className="text-3xl font-semibold text-[#191919]">
                                Our Vision
                            </h2>
                        </div>
                        <p className="text-base leading-relaxed text-[#191919]">
                            We want to see every business owner capable of sustaining their family, creating opportunities in society, and impacting their world through the inflows, growth, and profitability of their business.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}