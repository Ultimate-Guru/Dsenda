import Image from "next/image";

interface IllustrationCard {
    id: string;
    alt: string;
    src: string;
}

const ILLUSTRATIONS: IllustrationCard[] = [
    { id: "presenting", alt: "A lady presenting data on a tablet", src: "/lady.png" },
    { id: "handshake", alt: "Two colleagues shaking hands", src: "/people.svg" },
    { id: "success", alt: "A man celebrating a win with a laptop", src: "/man.svg" },
];

export default function Transform() {
    return (
        <section className="px-6 py-20 lg:px-10">

            <div className="mx-auto max-w-6xl">

                <div className="grid place-items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                        Transforming Data Into Business{" "}
                        <span className="text-[#4F46E5]">Confidence</span>
                    </h2>

                    <p className="text-base leading-relaxed text-[#191919]">
                        At Dsenda, we believe every business has valuable data waiting to be unlocked. Our mission is to help organizations turn raw information into clear, actionable insights through intelligent analytics, interactive dashboards, and automated reporting. By simplifying complex data, we empower leaders to make informed decisions with confidence.
                    </p>
                </div>

                <div className="mt-14 grid gap-7.25 sm:grid-cols-3">
                    {ILLUSTRATIONS.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-baseline-last justify-center aspect-square rounded-4xl bg-[#EDEDFC] max-w-82.25"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={160}
                                height={160}
                                className="h-2/3 w-2/3 object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}