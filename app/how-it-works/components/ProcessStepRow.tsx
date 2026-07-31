import type { ProcessStep } from "../data/process-steps";
import UploadPlaceholder from "./UploadPlaceholder";

interface ProcessStepRowProps {
  step: ProcessStep;
}

const ProcessStepRow = ({ step }: ProcessStepRowProps) => {

    const Icon = step.icon;

    const textBlock = (
        <div className="flex flex-1 flex-col justify-center gap-4 py-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4F46E5] text-white">
                <Icon className="h-5 w-5" />
            </span>
            <h3 className="text-2xl font-bold text-[#191919]">{step.title}</h3>
            <p className="max-w-md text-sm leading-relaxed text-[#191919]/80">{step.description}</p>
        </div>
    );

    const placeholderBlock = step.showPlaceholder ? (
        <div className="flex-1">
            <UploadPlaceholder />
        </div>
    ) : (
        <div className="flex-1" />
    );

    return (
        <div className="grid grid-cols-1 items-center gap-10 py-10 md:grid-cols-2 md:gap-14 lg:gap-48">
            {step.align === "left" ? (
                <>
                    {textBlock}
                    {placeholderBlock}
                </>
            ) : (
                <>
                    <div className="order-2 md:order-1">{placeholderBlock}</div>
                    <div className="order-1 md:order-2">{textBlock}</div>
                </>
            )}
        </div>
    )

}

export default ProcessStepRow