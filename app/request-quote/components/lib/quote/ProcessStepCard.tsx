type ProcessStepCardProps = {
    number: string
    title: string
    description: string
}

const ProcessStepCard = ({ number, title, description }: ProcessStepCardProps) => (
    <div className="flex h-full min-h-94.75 flex-col rounded-3xl border border-[#191919] p-6">
        <p className="text-lg text-[#191919]">{number}</p>
        <h3 className="mt-1 text-xl font-semibold leading-snug">{title}</h3>

        <div className="rounded-xl bg-[#EDEDFC] p-2.5 text-sm mt-auto">
            <p className="text-sm leading-relaxed">{description}</p>
        </div>
    </div>
)

export default ProcessStepCard