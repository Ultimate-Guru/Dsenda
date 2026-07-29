import { COMPANY_SIZES, INDUSTRIES } from "../lib/quote/quoteConfig"
import { FormData } from "../lib/quote/types"

type CompanyDetailsStepProps = {
    formData: FormData
    setFormData: (data: FormData) => void
    showErrors: boolean
}

const CompanyDetailsStep = ({ formData, setFormData, showErrors }: CompanyDetailsStepProps) => (
    <div>
        <h2 className="text-2xl font-semibold">Tell us about your organization</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
                <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Company Name
                </label>
                <input
                    type="text"
                    placeholder="e.g. Acme Studio"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className={`mt-2 w-full border-b pb-2 text-sm outline-none focus:border-[#4F46E5] ${showErrors && formData.companyName.trim().length === 0
                            ? "border-red-400"
                            : "border-gray-300"
                        }`}
                />
            </div>

            <div>
                <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Industry
                </label>
                <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="mt-2 w-full border-b border-gray-300 pb-2 text-sm outline-none focus:border-[#4F46E5]"
                >
                    {INDUSTRIES.map((industry) => (
                        <option key={industry} value={industry}>
                            {industry}
                        </option>
                    ))}
                </select>
            </div>
        </div>

        <div className="mt-6">
            <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Company Size
            </label>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {COMPANY_SIZES.map((size) => (
                    <button
                        key={size}
                        type="button"
                        onClick={() => setFormData({ ...formData, companySize: size })}
                        className={`rounded-lg border py-3 text-sm font-medium transition-colors ${formData.companySize === size
                                ? "border-[#4F46E5] bg-[#EDEDFC] text-[#4F46E5]"
                                : showErrors && formData.companySize === ""
                                    ? "border-red-400 text-gray-700"
                                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                            }`}
                    >
                        {size}
                    </button>
                ))}
            </div>
            {showErrors && formData.companySize === "" && (
                <p className="mt-2 text-xs text-red-500">Please select a company size.</p>
            )}
        </div>
    </div>
)

export default CompanyDetailsStep