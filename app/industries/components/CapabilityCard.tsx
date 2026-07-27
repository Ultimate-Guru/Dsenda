import type { Capability } from "./Content";
import Image from "next/image";

export default function CapabilityCard({ title, description }: Capability) {
    return (
        <div className="flex h-full min-h-88 flex-col rounded-3xl border border-[#191919] p-6">
            <h4 className="text-lg text-[#191919]">{title}</h4>

            <div className="relative mt-auto h-64 w-full overflow-hidden sm:h-60 lg:h-56">
                <div className="absolute inset-x-0 bottom-16 top-0">
                    <Image
                        src="/business.png"
                        alt="Capability illustration"
                        fill
                        loading="lazy"
                        sizes="(min-width: 1024px) 16rem, (min-width: 640px) 20rem, 100vw"
                        className="object-contain object-bottom-right mt-14"
                    />
                </div>

                <p className="absolute bottom-0 left-2/4 w-[95%] -translate-x-1/2 rounded-xl bg-[#EDEDFC] p-2.5 text-sm text-[#191919]">
                    {description}
                </p>
            </div>
        </div>
    );
}
