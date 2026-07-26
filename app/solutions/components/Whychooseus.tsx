import Image from "next/image";

const REASONS = [
    {
        title: "Faster Decisions",
        description: "Access the insights you need when you need them.",
    },
    {
        title: "Greater Visibility",
        description: "Monitor performance across every part of your business.",
    },
    {
        title: "Better Efficiency",
        description: "Streamline operations with automated reporting and dashboards.",
    },
    {
        title: "Increased Growth",
        description: "Identify opportunities through meaningful analytics.",
    },
    {
        title: "Secure Data",
        description: "Protect sensitive business information with confidence.",
    },
    {
        title: "Greater Visibility",
        description: "Every dashboard and report is built around your goals.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="px-6 py-20">
            <h2 className="text-center text-3xl font-bold leading-tight text-[#191919] md:text-4xl">
                Why Businesses Choose Our{" "}
                <span className="text-[#4F46E5]">Solutions</span>
            </h2>

            <div className="mt-12 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                <div className="relative h-80 w-full overflow-hidden md:h-105">
                    <Image
                        src="/solution.png"
                        alt="Small business owner reviewing orders on a laptop"
                        fill
                        className="object-contain"
                    />
                </div>

                <ul className="space-y-6">
                    {REASONS.map((reason, key) => (
                        <li key={key} className="flex gap-3">
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#191919]" />
                            <div>
                                <p className="text-lg font-bold text-[#191919]">
                                    {reason.title}
                                </p>
                                <p className="text-lg text-[#191919]/70">
                                    {reason.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}