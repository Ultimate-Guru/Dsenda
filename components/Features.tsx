import Image from "next/image";

const features = [
    {
        title: "Business Intelligence",
        description: "Turn complex data into clear insights for smarter business decisions.",
        image: "/business.svg",
    },
    {
        title: "Automated Reporting",
        description: "Simplify reporting with automated workflows.",
        image: "/automated.svg",
    },
    {
        title: "Strategic Insights",
        description: "Make informed decisions with confidence.",
        image: "/strategy.svg",
    },
];

const Features = () => {
    return (
        <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#191919]">
                Everything You Need to Make
                <br />
                Better Business <span className="text-[#4F46E5]">Decisions</span>
            </h2>
            <p className=" text-muted-foreground mt-4 max-w-xl">
                From data preparation to executive dashboards, Dsenda delivers end-to-end analytics solutions tailored to your business.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="rounded-2xl bg-[#EDEDFC] border border-[#4F46E5]/10 p-6 flex flex-col"
                    >
                        <h3 className="font-semibold text-[#191919]">
                            {feature.title}
                        </h3>
                        <p className=" text-sm text-muted-foreground mt-2">
                            {feature.description}
                        </p>
                        <div className="flex items-end justify-end mt-10 overflow-hidden aspect-video">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                width={200}
                                height={300}
                                className="object-bottom-right"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;