import { ArrowUpRight, Check, CheckCircle2 } from "lucide-react";
import Link from "next/link"

export interface PricingPlan {
    name: string;
    description: string;
    price: string;
    features: string[];
    highlighted?: boolean;
    badge?: string;
}

interface PricingCardProps {
    plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
    const { name, description, price, features, highlighted, badge } = plan;

    return (
        <div
            className={`relative flex h-full w-full flex-col rounded-xl border border-[#EDEDFC] p-6 shadow-xl sm:p-8 ${highlighted ? "bg-[#4F46E5]" : "bg-white"}`}>

            {/* "Most popular" badge */}
            {badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#4F46E5] shadow-sm">
                    {badge}
                </span>
            )}

            {/* Header */}
            <h3
                className={`text-xl font-semibold ${highlighted ? "text-white" : "text-gray-900"
                    }`}
            >
                {name}
            </h3>
            <p
                className={`mt-1 text-sm ${highlighted ? "text-white/70" : "text-[#191919]"
                    }`}
            >
                {description}
            </p>

            {/* Divider */}
            <div
                className={`my-6 border-t ${highlighted ? "border-white/20" : "border-gray-100"
                    }`}
            />

            {/* Price */}
            <div className="flex items-baseline gap-1">
                <span
                    className={`text-4xl font-bold ${highlighted ? "text-white" : "text-gray-900"
                        }`}
                >
                    {price}
                </span>
                <span
                    className={`text-sm ${highlighted ? "text-white/70" : "text-[#191919]"
                        }`}
                >
                    /month
                </span>
            </div>

            {/* CTA */}
            <Link
                href="/request-quote"
                className={`mt-6 flex items-center justify-center gap-2 rounded-lg px-2 py-3 text-sm font-medium transition-colors ${highlighted
                    ? "bg-[#F9FAF9] text-[#4F46E5]"
                    : "bg-[#4F46E5] text-white"
                    }`}
            >
                Request a Quote
                <ArrowUpRight size={16} />
            </Link>

            {/* Features */}
            <ul className="mt-8 flex flex-col gap-3">
                {features.map((feature) => (
                    <li
                        key={feature}
                        className={`flex items-center gap-2 text-sm ${highlighted ? "text-white" : "text-gray-700"
                            }`}
                    >
                        {highlighted ? (
                            <CheckCircle2 size={16} className="shrink-0 text-white" />
                        ) : (
                            <Check size={16} className="shrink-0 text-[#4F46E5]" />
                        )}
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}
