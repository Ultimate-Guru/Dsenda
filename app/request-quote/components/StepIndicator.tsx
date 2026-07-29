import { JSX } from "react/jsx-runtime"
import { STEPS } from "./lib/quote/quoteConfig"

interface StepItem {
    number: string | number
    label: string
}

interface StepIndicatorProps {
    currentStep: number
    onStepClick: (index: number) => void
}

const StepIndicator = ({ currentStep, onStepClick }: StepIndicatorProps): JSX.Element => (
    <div className="flex flex-col gap-3">
        {STEPS.map((s: StepItem, index: number) => (
            <button
                key={s.number}
                type="button"
                onClick={() => onStepClick(index)}
                className={`flex items-center gap-3 text-left text-sm font-medium transition-colors ${
                    index === currentStep
                        ? "text-black"
                        : index < currentStep
                        ? "text-[#4F46E5]"
                        : "text-gray-400"
                }`}
            >
                <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs ${
                        index === currentStep
                            ? "border-black text-black"
                            : index < currentStep
                            ? "border-[#4F46E5] bg-[#4F46E5] text-white"
                            : "border-gray-300 text-gray-400"
                    }`}
                >
                    {index < currentStep ? "✓" : s.number}
                </span>
                {s.label}
            </button>
        ))}
    </div>
)

export default StepIndicator