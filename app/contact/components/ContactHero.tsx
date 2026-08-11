import { Check } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-32 lg:px-8 lg:pt-40">

      <div className="mx-auto max-w-3xl text-center">

        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#C7D2FE] bg-[#EEF2FF] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#4338CA]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />
          Early access
        </p>

        <h1 className="mt-6 text-4xl font-semibold text-[#191919] sm:text-5xl lg:text-6xl">
          Make your business data
          <span className="block text-[#4F46E5]">work harder.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg">
          Dsenda is building a simpler way for teams to turn scattered data
          into timely, confident decisions. Join the waitlist to be first in line.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-[#4B5563]">
          {['Early product updates', 'Priority onboarding', 'No spam'].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-[#4F46E5]" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>

      </div>

    </section>
  );
}
