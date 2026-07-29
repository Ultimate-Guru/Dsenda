import ProcessStepCard from "./lib/quote/ProcessStepCard"
import { PROCESS_STEPS } from "./lib/quote/quoteConfig"

const ProcessSteps = () => (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="text-center text-4xl font-bold leading-tight sm:text-5xl">
            Here&apos;s What Happens
            <br />
            After You <span className="text-[#4F46E5]">Submit</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
                <ProcessStepCard
                    key={step.number}
                    number={step.number}
                    title={step.title}
                    description={step.description}
                />
            ))}
        </div>
    </section>
)

export default ProcessSteps