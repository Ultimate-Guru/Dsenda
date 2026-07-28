import PricingCard, { PricingPlan } from "./PricingCard";

const PLANS: PricingPlan[] = [
    {
        name: "Starter",
        description: "Small businesses and startups.",
        price: "\u20A610,000",
        features: [
            "Business Dashboard",
            "KPI Tracking",
            "Monthly Reports",
            "Data Visualization",
            "Email Support",
        ],
    },
    {
        name: "Premium",
        description: "Small businesses and startups.",
        price: "\u20A635,000",
        highlighted: true,
        badge: "Most popular",
        features: [
            "Business Dashboard",
            "KPI Tracking",
            "Monthly Reports",
            "Data Visualization",
            "Email Support",
        ],
    },
    {
        name: "Extra",
        description: "Small businesses and startups.",
        price: "\u20A6120,000",
        features: [
            "Business Dashboard",
            "KPI Tracking",
            "Monthly Reports",
            "Data Visualization",
            "Email Support",
        ],
    },
];

export default function PricingCards() {
    return (
        <section className="mx-auto max-w-6xl px-6 pt-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-center lg:gap-9">
                {PLANS.map((plan) => (
                    <div
                        key={plan.name}
                        className={plan.highlighted ? "lg:-translate-y-3 lg:scale-105" : ""}>
                        <PricingCard plan={plan} />
                    </div>
                ))}
            </div>
        </section>
    );
}
