import type { ReactNode } from "react";
import {
    Terminal,
    HeartPulse,
    Landmark,
    Sparkles,
    LayoutDashboard,
    BarChart3,
    ShieldCheck,
    TrendingUp,
} from "lucide-react";

export type IndustryCard = {
    icon: ReactNode;
    title: string;
    description: string;
    link?: { label: string; href: string };
    cta?: { label: string; href: string };
    illustration?: boolean;
};

export type Capability = {
    icon: ReactNode;
    title: string;
    description: string;
};

export const industries: IndustryCard[] = [
    {
        icon: <Terminal className="h-5 w-5" />,
        title: "Tech & Infrastructure",
        description:
            "Optimize sales, inventory, and customer insights to maximize business performance.",
    },
    {
        icon: <HeartPulse className="h-5 w-5" />,
        title: "Healthcare",
        description:
            "Improve operational efficiency and reporting with data-driven healthcare analytics.",
        link: { label: "Learn more", href: "/industries/healthcare" },
    },
    {
        icon: <Landmark className="h-5 w-5" />,
        title: "Finance",
        description:
            "Monitor financial performance, budgeting, profitability, and business trends with confidence.",
        link: { label: "Case studies", href: "/industries/finance" },
    },
    {
        icon: <Sparkles className="h-5 w-5" />,
        title: "Manufacturing",
        description: "Improve production efficiency, quality control, and operational visibility.",
        cta: { label: "View Agency Kit", href: "/industries/manufacturing" },
        illustration: true,
    },
];

export const capabilities: Capability[] = [
    {
        icon: <LayoutDashboard className="h-6 w-6" />,
        title: "Tailored Dashboards",
        description: "Built around your KPIs and reporting needs.",
    },
    {
        icon: <BarChart3 className="h-6 w-6" />,
        title: "Business Intelligence",
        description: "Turn data into actionable insights.",
    },
    {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: "Secure by Design",
        description: "Protect your data with confidence.",
    },
    {
        icon: <TrendingUp className="h-6 w-6" />,
        title: "Scalable Solutions",
        description: "Grow your analytics as your business evolves.",
    },
];