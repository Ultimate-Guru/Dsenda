type CheckboxOptionProps = {
    label: string
    checked: boolean
    onChange: () => void
}

const CheckboxOption = ({ label, checked, onChange }: CheckboxOptionProps) => (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="h-4 w-4 rounded border-gray-300 text-[#4F46E5] focus:ring-[#4F46E5]"
        />
        {label}
    </label>
)

export default CheckboxOption