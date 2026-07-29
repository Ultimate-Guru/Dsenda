import CheckboxOption from "../CheckboxOption"
import { DATA_SOURCES } from "../lib/quote/quoteConfig"
import { FormData } from "../lib/quote/types"

type DataSourcesStepProps = {
    formData: FormData
    onToggle: (value: string) => void
    showErrors: boolean
}

const DataSourcesStep = ({ formData, onToggle, showErrors }: DataSourcesStepProps) => (
    <div>
        <h2 className="text-2xl font-semibold">Data Sources</h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {DATA_SOURCES.map((source) => (
                <CheckboxOption
                    key={source}
                    label={source}
                    checked={formData.dataSources.includes(source)}
                    onChange={() => onToggle(source)}
                />
            ))}
        </div>

        {showErrors && formData.dataSources.length === 0 && (
            <p className="mt-4 text-xs text-red-500">Please select at least one data source.</p>
        )}
    </div>
)

export default DataSourcesStep