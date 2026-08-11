import { ArrowRight, LockKeyhole } from "lucide-react";

const formEndpoint =
  process.env.NEXT_PUBLIC_FORMINIT_ENDPOINT || "https://forminit.com/f/YOUR_FORM_ID";

export default function ContactForm() {
  return (
    <section className="px-6 pb-28 pt-3 lg:px-8">
      <form
        id="waitlist-form"
        action={formEndpoint}
        method="POST"
        className="mx-auto w-full max-w-xl rounded-3xl border border-[#C7D2FE] bg-white p-6 shadow-[0_16px_50px_rgba(79,70,229,0.10)] sm:p-8"
      >
        <input type="hidden" name="fi-text-type" value="Dsenda waitlist signup" />

        <div className="flex items-start gap-4">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#EEF2FF] text-[#4F46E5]">
            <LockKeyhole className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#191919]">
              Reserve your spot
            </h2>
            <p className="mt-1 text-sm leading-6 text-[#6B7280]">
              Be among the first to know when Dsenda is ready for your team.
            </p>
          </div>
        </div>

        <label htmlFor="email" className="sr-only">
          Work email address
        </label>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <input
            id="email"
            name="fi-sender-email"
            type="email"
            required
            autoComplete="email"
            placeholder="Enter your work email"
            className="h-12 min-w-0 flex-1 rounded-xl border border-[#D1D5DB] bg-white px-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#4F46E5] focus:ring-2 focus:ring-[#C7D2FE]/60"
          />
          <button
            type="submit"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-3 text-sm font-semibold text-white shadow-[0_4px_0_#C8C6F7] transition-colors hover:bg-[#4338CA] cursor-pointer"
          >
            Join waitlist
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-[#6B7280]">
          We&apos;ll only use your email for Dsenda launch updates and early access.
        </p>
      </form>
    </section>
  );
}
