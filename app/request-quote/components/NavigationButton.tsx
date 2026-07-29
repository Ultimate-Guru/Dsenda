import { ArrowRight } from "lucide-react"

type NavigationButtonProps = {
    label: string
    onClick?: () => void
    type?: "button" | "submit"
    isValid: boolean
}

const NavigationButton = ({ label, onClick, type = "button", isValid }: NavigationButtonProps) => (
    <button
        type={type}
        onClick={onClick}
        className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-white shadow-[0_4px_0_#C8C6F7] transition-colors ${
            isValid
                ? "bg-[#4F46E5] hover:bg-[#4338CA]"
                : "bg-[#4F46E5]/50 cursor-not-allowed shadow-none"
        }`}
    >
        {label}
        <ArrowRight className="h-4 w-4" />
    </button>
)

export default NavigationButton