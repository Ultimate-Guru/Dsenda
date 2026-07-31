import type { LucideIcon } from "lucide-react";
import { UploadCloud, SlidersHorizontal, LayoutDashboard, Lightbulb } from "lucide-react";

export interface ProcessStep {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    /** Which side the text content sits on at desktop width */
    align: "left" | "right";
    /** Whether this step shows the dashed "upload" placeholder on the opposite side */
    showPlaceholder: boolean;
}

export const processSteps: ProcessStep[] = [
    {
        id: "upload",
        icon: UploadCloud,
        title: "Upload your data",
        description:
            "Securely share your business data through spreadsheets, databases, accounting software, CRM platforms, ERP systems, or other business applications. We ensure your information is handled with confidentiality from the very beginning.",
        align: "left",
        showPlaceholder: true,
    },
    {
        id: "analyze",
        icon: SlidersHorizontal,
        title: "Prepare & Analyze",
        description:
            "Before generating insights, we clean, validate, and organize your data to ensure accuracy. Our analytics process identifies trends, performance indicators, opportunities, and areas for improvement.",
        align: "right",
        showPlaceholder: true,
    },
    {
        id: "dashboards",
        icon: LayoutDashboard,
        title: "Build Dashboards & Reports",
        description:
            "Once your data has been analyzed, we transform it into intuitive dashboards and professional reports that provide a clear picture of your business performance.",
        align: "left",
        showPlaceholder: false,
    },
    {
        id: "decisions",
        icon: Lightbulb,
        title: "Make Smarter Decisions",
        description:
            "With meaningful insights at your fingertips, you can monitor performance, identify opportunities, and make strategic decisions that drive business growth.",
        align: "left",
        showPlaceholder: true,
    },
];