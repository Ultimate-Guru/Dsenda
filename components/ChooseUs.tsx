import { TrendingUp } from "lucide-react";
import Image from "next/image";

const points = [
    {
        title: "Data-Driven Insights",
        description: "Transform complex data into meaningful insights that support smarter, evidence-based business decisions.",
    },
    {
        title: "Tailored Solutions",
        description: "Every solution is customized to your industry, goals, and operational needs for maximum impact.",
    },
    {
        title: "Fast & Actionable Results",
        description: "Receive clear dashboards and reports that help you identify opportunities and respond quickly.",
    },
    {
        title: "Secure & Confidential",
        description: "Your data is protected through secure processes and handled with the highest level of confidentiality.",
    },
];

const ChooseUs = () => {
    return (
        <section className="relative py-30 px-6 lg:px-8 max-w-7xl mx-auto">
            <Image src="/top-right.png" alt="Hero Dots" width={120} height={50} className="absolute right-0 top-10" />
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-center text-[#191919]">
                More Than Analytics
                <br />
                It Is A Partner in Smarter{" "}
                <span className="text-[#4F46E5]">Decision-Making</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 mt-14 max-w-[1,018.56px] mx-auto">
                {points.map((point) => (
                    <div key={point.title} className="flex gap-4">
                        <div className="w-9 h-9 rounded-lg bg-[#4F46E5] flex items-center justify-center shrink-0">
                            <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h3 className="body font-semibold text-[#191919]">
                                {point.title}
                            </h3>
                            <p className="text-sm text-[#191919] mt-1">
                                {point.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChooseUs;