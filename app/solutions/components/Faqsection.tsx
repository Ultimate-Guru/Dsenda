'use client'
import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
    {
        question: "Can dashboards be customized?",
        answer:
            "Absolutely. Every Dsenda solution is tailored to your business goals, industry requirements, and key performance indicatros (KPIs),ensuring you receive insights that are relevant and actionable.",
    },
    {
        question: "What data sources do you support?",
        answer:
            "We work with data from spreadsheets, accounting software, ERP systems, CRM platforms, databases, and other business applications. If your business generates data, we can help you turn it into meaningful insights.",
    },
    {
        question: "How long does implementation take?",
        answer:
            "Implementation timelines vary depending on the scope and complexity of your project. After understanding your requirements, we'll provide a clear project timeline and keep you informed throughout the process.",
    },
    {
        question: "Is my business data secure?",
        answer:
            "Yes. We prioritize the security and confidentiality of your data by following secure handling practices and implementing appropriate safeguards throughout the analytics process.",
    },
    {
        question: "Can I scale my solution later?",
        answer:
            "Yes. Our solutions are designed to scale with your business, allowing you to add new dashboards, reports, departments, or analytics capabilities as your needs evolve.",
    },
];

const Faqsection = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="px-6 py-20">
            <h2 className="text-center text-3xl font-bold text-[#191919] md:text-4xl">
                FAQ
            </h2>

            <div className="mx-auto mt-12 max-w-2xl">
                {FAQS.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={faq.question} className="py-5">
                            <button
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="flex w-full items-center justify-between text-left"
                                aria-expanded={isOpen}>
                                <span className="text-base font-medium text-[#191919]">
                                    {faq.question}
                                </span>
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#191919] text-white cursor-pointer">
                                    <Plus className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} />
                                </span>
                            </button>

                            {isOpen && (
                                <p className="mt-3 pr-10 text-sm text-[#191919]/80">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Faqsection