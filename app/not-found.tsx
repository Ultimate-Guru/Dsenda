import { ArrowRight, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F9FAF9] px-6 pb-16 pt-30 lg:px-8 lg:pt-24">
      <section className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
              <span className="h-px w-8 bg-[#4F46E5]" aria-hidden="true" />
              Error 404
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-[#191919] sm:text-5xl lg:text-6xl">
              This page got lost in the data.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#525252] sm:text-lg">
              The page you are looking for does not exist or may have moved. Let&apos;s get you back to clearer insights.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-5 text-sm font-medium text-white shadow-[0_4px_0_#C8C6F7] transition-colors hover:bg-[#4338CA]"
              >
                <Home className="h-4 w-4" aria-hidden="true" />
                Back to home
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#C8C6F7] px-5 text-sm font-medium text-[#191919] transition-colors hover:border-[#4F46E5] hover:text-[#4F46E5]"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
            <div className="relative aspect-square overflow-hidden rounded-4xl border border-[#EDEDFC] bg-white p-6 shadow-[0_20px_60px_rgba(79,70,229,0.08)] sm:p-10">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-[#C8C6F7] bg-[#F9FAF9] p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="h-3 w-3 rounded-full bg-[#4F46E5]" />
                  <span className="h-2 w-20 rounded-full bg-[#EDEDFC]" />
                </div>
                <div>
                  <p className="text-[clamp(5rem,18vw,9rem)] font-semibold leading-none tracking-[-0.08em] text-[#4F46E5]">
                    404
                  </p>
                  <div className="mt-5 h-2 w-3/4 rounded-full bg-[#C8C6F7]" />
                  <div className="mt-3 h-2 w-1/2 rounded-full bg-[#EDEDFC]" />
                </div>
                <div className="flex justify-end">
                  <span className="h-10 w-10 rounded-full border-4 border-[#4F46E5] border-t-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}