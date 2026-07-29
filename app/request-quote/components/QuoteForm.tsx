"use client"

import { FormEvent, useState } from "react"
import StepIndicator from "./StepIndicator"
import TrustBadge from "./TrustBadge"
import NavigationButton from "./NavigationButton"
import CompanyDetailsStep from "./steps/CompanyDetailsStep"
import ServicesStep from "./steps/ServicesStep"
import DataSourcesStep from "./steps/DataSourcesStep"
import { STEPS } from "./lib/quote/quoteConfig"
import { FormData } from "./lib/quote/types"

const INITIAL_FORM_DATA: FormData = {
    companyName: "",
    industry: "Healthcare",
    companySize: "",
    services: [],
    dataSources: [],
}

const isStepValid = (index: number, formData: FormData) => {
    switch (index) {
        case 0:
            return (
                formData.companyName.trim().length > 0 &&
                formData.industry.trim().length > 0 &&
                formData.companySize.trim().length > 0
            )
        case 1:
            return formData.services.length > 0
        case 2:
            return formData.dataSources.length > 0
        default:
            return true
    }
}

const QuoteForm = () => {
    const [step, setStep] = useState(0)
    const [attemptedNext, setAttemptedNext] = useState(false)
    const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA)

    const toggleValue = (key: "services" | "dataSources", value: string) => {
        setFormData((prev) => {
            const current = prev[key]
            const next = current.includes(value)
                ? current.filter((item) => item !== value)
                : [...current, value]
            return { ...prev, [key]: next }
        })
    }

    const currentStepValid = isStepValid(step, formData)

    const goToStep = (index: number) => {
        if (index <= step) {
            setStep(index)
            setAttemptedNext(false)
        }
    }

    const handleNext = () => {
        if (!currentStepValid) {
            setAttemptedNext(true)
            return
        }
        if (step < STEPS.length - 1) {
            setStep(step + 1)
            setAttemptedNext(false)
        }
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!currentStepValid) {
            setAttemptedNext(true)
            return
        }

        // TODO: replace with real API call
        console.log("Submitting quote request:", formData)
        alert("Quote request submitted!")

        setFormData(INITIAL_FORM_DATA)
        setStep(0)
        setAttemptedNext(false)
    }

    const isLastStep = step === STEPS.length - 1

    return (
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 py-20 lg:grid-cols-[280px_1fr] lg:px-8">
            <div className="lg:sticky lg:top-24 lg:self-start">
                <StepIndicator currentStep={step} onStepClick={goToStep} />
                <TrustBadge />
            </div>

            <form
                className="rounded-3xl border border-[#191919] p-8"
                onSubmit={handleSubmit}
            >
                {step === 0 && (
                    <CompanyDetailsStep
                        formData={formData}
                        setFormData={setFormData}
                        showErrors={attemptedNext}
                    />
                )}
                {step === 1 && (
                    <ServicesStep
                        formData={formData}
                        onToggle={(value) => toggleValue("services", value)}
                        showErrors={attemptedNext}
                    />
                )}
                {step === 2 && (
                    <DataSourcesStep
                        formData={formData}
                        onToggle={(value) => toggleValue("dataSources", value)}
                        showErrors={attemptedNext}
                    />
                )}

                <div className="mt-10 flex justify-end">
                    <NavigationButton
                        label={isLastStep ? "Request Quote" : "Continue"}
                        onClick={isLastStep ? undefined : handleNext}
                        type={isLastStep ? "submit" : "button"}
                        isValid={currentStepValid}
                    />
                </div>
            </form>
        </section>
    )
}

export default QuoteForm