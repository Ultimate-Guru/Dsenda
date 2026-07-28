interface FeatureRow {
    capability: string;
    starter: string;
    professional: string;
    enterprise: string;
}

const ROWS: FeatureRow[] = [
    {
        capability: "Active Projects",
        starter: "3",
        professional: "Unlimited",
        enterprise: "Unlimited",
    },
    {
        capability: "AI Model Precision",
        starter: "Standard",
        professional: "High-Fidelity",
        enterprise: "Custom-Tuned",
    },
    {
        capability: "Generative Credits",
        starter: "100 / mo",
        professional: "1,000 / mo",
        enterprise: "Infinite",
    },
    {
        capability: "Export Formats",
        starter: "PNG, SVG",
        professional: "All + Code",
        enterprise: "Full Ecosystem",
    },
    {
        capability: "Component Library",
        starter: "Basic",
        professional: "Advanced",
        enterprise: "Centralized Admin",
    },
    {
        capability: "Support",
        starter: "Community",
        professional: "Priority Email",
        enterprise: "24/7 Dedicated",
    },
    {
        capability: "Security (SSO)",
        starter: "\u2014",
        professional: "\u2014",
        enterprise: "Included",
    },
];

export default function CompareFeatures() {
    return (
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-20">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#191919]">
                Compare features
            </h2>

            <div className="grid gap-4 md:hidden">
                {ROWS.map((row) => (
                    <div
                        key={row.capability}
                        className="rounded-lg border border-[#EDEDFC] bg-white p-5 shadow-sm"
                    >
                        <h3 className="text-sm font-semibold text-gray-900">
                            {row.capability}
                        </h3>
                        <dl className="mt-4 grid gap-3 text-sm">
                            <div className="flex items-center justify-between gap-4">
                                <dt className="font-medium text-gray-500">Starter</dt>
                                <dd className="text-right text-gray-900">{row.starter}</dd>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <dt className="font-medium text-gray-500">Professional</dt>
                                <dd className="text-right text-gray-900">{row.professional}</dd>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <dt className="font-medium text-gray-500">Enterprise</dt>
                                <dd className="text-right text-gray-900">{row.enterprise}</dd>
                            </div>
                        </dl>
                    </div>
                ))}
            </div>

            <div className="hidden overflow-x-auto md:block">
                <table className="w-full min-w-180 border-collapse text-left">
                    <thead>
                        <tr className="border-b border-[#191919]">
                            {["Capabilities", "Starter", "Professional", "Enterprise"].map(
                                (heading) => (
                                    <th
                                        key={heading}
                                        className="pb-4 pr-5 text-xs font-semibold uppercase tracking-wide text-gray-600 last:pr-0"
                                    >
                                        {heading}
                                    </th>
                                )
                            )}
                        </tr>   
                    </thead>
                    <tbody>
                        {ROWS.map((row) => (
                            <tr key={row.capability} className="border-b border-gray-100 last:border-b-0">
                                <td className="py-5 pr-5 text-sm font-semibold text-gray-900">
                                    {row.capability}
                                </td>
                                <td className="py-5 pr-5 text-sm text-gray-700">
                                    {row.starter}
                                </td>
                                <td className="py-5 pr-5 text-sm text-gray-700">
                                    {row.professional}
                                </td>
                                <td className="py-5 pr-0 text-sm text-gray-700">
                                    {row.enterprise}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
