import CheckboxOption from "../CheckboxOption"
import { SERVICES } from "../lib/quote/quoteConfig"
import { FormData } from "../lib/quote/types"

type ServicesStepProps = {
    formData: FormData
    onToggle: (value: string) => void
    showErrors: boolean
}

const ServicesStep = ({ formData, onToggle, showErrors }: ServicesStepProps) => (
    <div>
        <h2 className="text-2xl font-semibold">Services you&apos;re interested in</h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SERVICES.map((service) => (
                <CheckboxOption
                    key={service}
                    label={service}
                    checked={formData.services.includes(service)}
                    onChange={() => onToggle(service)}
                />
            ))}
        </div>

        {showErrors && formData.services.length === 0 && (
            <p className="mt-4 text-xs text-red-500">Please select at least one service.</p>
        )}
    </div>
)

export default ServicesStep