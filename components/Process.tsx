const steps = [
    {
        number: "01",
        title: "Upload Your Data",
        description:
            "Submit your business data through our secure platform. Whether it's spreadsheets, reports, or data exported from your existing systems, we ensure every file is handled with confidentiality and care.",
    },
    {
        number: "02",
        title: "Data Preparation & Analysis",
        description:
            "Our team validates, cleans, and structures your data before applying advanced analytics to uncover patterns, trends, and key performance indicators that matter to your business.",
    },
    {
        number: "03",
        title: "Actionable Insights",
        description:
            "Receive intuitive dashboards, automated reports, and clear insights that simplify complex data, making it easy to monitor performance and identify opportunities.",
    },
    {
        number: "04",
        title: "Better Decisions",
        description:
            "Use data-driven recommendations to improve operations, optimize performance, and make strategic decisions that support long-term business growth.",
    },
];

// Alternate small rotation angles for the fanned-card look
const rotations = ["rotate-15", "-rotate-15", "rotate-15", "-rotate-15"];

const Process = () => {
    return (
        <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center">
                From Raw Data to
                <br />
                Business <span className="text-[#4F46E5]">Growth</span>
            </h2>
            <p className="text-center mt-4 max-w-md mx-auto">
                A simple four-step process designed to turn your business data into
                meaningful insights.
            </p>

            {/* "group" here lets every card listen for a hover anywhere in this row */}
            <div className="group flex flex-wrap justify-center gap-0 mt-16">
                {steps.map((step, i) => (
                    <div
                        key={step.number}
                        className={`w-64 -ml-6 first:ml-0 bg-white border border-[#4F46E5] rounded-2xl p-6 shadow-md
                            transition-transform duration-300 ease-out
                            ${rotations[i]} group-hover:rotate-0
                            hover:-translate-y-2 hover:z-10`}
                    >
                        <p className="text-sm font-semibold text-[#4F46E5]">
                            {step.number}
                        </p>
                        <h3 className="body font-semibold mt-2">
                            {step.title}
                        </h3>
                        <p className="text-xs mt-20 leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;