import type { ProcessStep } from "../data/process-steps";

interface CenteredStepHeaderProps {
    step: ProcessStep;
}

const CenteredStepHeader = ({ step }: CenteredStepHeaderProps) => {
    const Icon = step.icon;

    return (
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 py-10 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4F46E5] text-white">
                <Icon className="h-5 w-5" />
            </span>
            <h3 className="text-2xl font-bold text-[#191919] sm:text-3xl">{step.title}</h3>
            <p className="text-sm leading-relaxed text-[#191919]/80 sm:text-base">{step.description}</p>
        </div>
    )
}

export default CenteredStepHeader