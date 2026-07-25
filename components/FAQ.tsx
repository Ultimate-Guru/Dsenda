'use client'

import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
    {
        question: "What is Dsenda?",
        answer:
            "Dsenda is a business intelligence and analytics platform that helps organizations transform raw data into actionable insights through interactive dashboards, automated reports, and strategic recommendations.",
    },
    {
        question: "What types of businesses do you work with?",
        answer:
            "We work with businesses across multiple industries, including retail, healthcare, finance, education, hospitality, manufacturing, construction and professional services. Our solutions are tailored to meet each organization's unique data needs.",
    },
    {
        question: "What data formats do you support?",
        answer:
            "We can work with data from spreadsheets (Excel and CSV), accounting systems, ERP platforms, CRM software, databases, and other business applications.",
    },
    {
        question: "Is my business data secure?",
        answer:
            "Yes. We prioritize data security and confidentiality by using secure processes and handling your infomation with the highest level of professional care.",
    },
    {
        question: "Do I need technical knowledge to use Dsenda?",
        answer:
            "Not at all. Our dashboards and reports are designed to be intruitive and easy to understand making it simple for business owners and teams to make informed decisions.",
    },
    {
        question: "How do I get started?",
        answer:
            "Simply contact our team. We'll discuss your business needs, review your data, and recommend the best analytics solution for your organization.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-6 lg:px-8 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-center text-foreground">
                Have Questions? We&apos;ve Got <span className="text-[#4F46E5]">Answers.</span>
            </h2>
            <p className="body text-muted-foreground text-center mt-4  mx-auto">
                Find answers to the most common questions about our analytics
                solutions, data security, pricing, and onboarding process.
            </p>

            <div className="mt-12">
                {faqs.map((faq, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div key={faq.question}>
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
                            >
                                <span className="text-foreground text-sm lg:text-base">
                                    {faq.question}
                                </span>
                                <span className="w-7 h-7 rounded-full bg-black flex items-center justify-center shrink-0 ml-4">
                                    {isOpen ? (
                                        <X className="w-3.5 h-3.5 text-white" />
                                    ) : (
                                        <Plus className="w-3.5 h-3.5 text-white" />
                                    )}
                                </span>
                            </button>
                            <div
                                className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                                    }`}
                                style={{ display: "grid" }}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-sm text-muted-foreground pr-10">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FAQ;