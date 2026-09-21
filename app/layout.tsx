import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dsenda",
  description: "Dsenda helps businesses transform complex data into clear, actionable insights through analytics, dashboards, and tailored data solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${sora.variable}`}>
      <body className="min-h-full flex flex-col font-sora bg-[#F9FAF9] scroll-smooth scrollbar-gutter-stable">
        {children}
      </body>
    </html>
  );
}
