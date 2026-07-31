import { processSteps } from "../data/process-steps";
import ProcessStepRow from "./ProcessStepRow";
import CenteredStepHeader from "./CenteredStepHeader";
import DashboardShowcase from "./DashboardShowcase";

const ProcessSection = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <h2 className="text-3xl font-bold text-[#191919] sm:text-4xl">
                The Dsenda <span className="text-[#4F46E5]">Process</span>
            </h2>

            <div className="mt-8 divide-y divide-[#EDEDFC]">
                {processSteps.map((step) => (
                    <div key={step.id}>
                        {step.id === "dashboards" ? (
                            <div className="py-4">
                                <CenteredStepHeader step={step} />
                                <DashboardShowcase />
                            </div>
                        ) : (
                            <ProcessStepRow step={step} />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProcessSection