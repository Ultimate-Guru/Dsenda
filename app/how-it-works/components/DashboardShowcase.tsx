import Image from "next/image"

interface Stat {
    label: string;
    value: string;
    hasBars?: boolean;
    hasBar?: boolean;
}

const STATS: Stat[] = [
    { label: "TOTAL GROWTH", value: "+24.5%", hasBar: true },
    { label: "ACTIVE USERS", value: "1.2M", hasBars: true },
    { label: "RETENTION RATE", value: "94%", hasBar: true },
];

const DashboardShowcase = () => {
    return (
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-gray-100 bg-white px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="mx-auto text-xs font-medium text-gray-400">Analytics Dashboard - Q4 Overview</span>
            </div>

            <div className="p-6 sm:p-8">
                {/* stat row */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                    {STATS.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-xs font-medium tracking-wide text-gray-400">{stat.label}</p>
                            <p className="mt-2 text-2xl font-bold text-gray-900">{stat.value}</p>
                            {stat.hasBar && <div className="mt-3 h-1.5 w-full max-w-35 rounded-full bg-gray-900" />}
                            {stat.hasBars && (
                                <div className="mt-3 flex items-end gap-1">
                                    {[6, 10, 14, 9, 16].map((h, i) => (
                                        <span key={i} className="w-1.5 rounded-sm bg-gray-900" style={{ height: `${h}px` }} />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* image tiles */}
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <Image src="/laptop.svg" alt="" width={350} height={200} loading="lazy" />
                        <Image src="/graph.svg" alt="" width={350} height={200} loading="lazy" />
                </div>
            </div>
        </div>
    )
}

export default DashboardShowcase