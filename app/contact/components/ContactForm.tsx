import { ArrowRight } from "lucide-react";

const formEndpoint =
  process.env.NEXT_PUBLIC_FORMINIT_ENDPOINT || "https://forminit.com/f/YOUR_FORM_ID";

const fieldClassName =
  "mt-4 w-full border-0 bg-transparent p-0 text-sm text-[#191919] outline-none placeholder:text-transparent";

const labelClassName =
  "block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#191919]/25";

export default function ContactForm() {
  return (
    <section className="px-6 pb-40 pt-4 lg:px-8">
      <form
        id="contact-form"
        action={formEndpoint}
        method="POST"
        className="mx-auto min-h-[520px] w-full max-w-[560px] border border-[#B8B8B8] bg-[#F9FAF9] px-8 py-10 shadow-[3px_4px_0_rgba(25,25,25,0.18)] sm:px-10"
      >
        <h2 className="text-2xl font-semibold text-[#191919] sm:text-3xl">
          Send us a message
        </h2>

        <div className="mt-9 grid gap-x-16 gap-y-16 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClassName}>
              Full Name
            </label>
            <input
              id="name"
              name="fi-sender-name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={fieldClassName}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClassName}>
              Email Address
            </label>
            <input
              id="email"
              name="fi-sender-email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={fieldClassName}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="subject" className={labelClassName}>
              Subject
            </label>
            <input
              id="subject"
              name="fi-text-subject"
              type="text"
              defaultValue="Product Inquiry"
              className={`${fieldClassName} placeholder:text-[#191919]`}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClassName}>
              Message
            </label>
            <textarea
              id="message"
              name="fi-text-message"
              required
              rows={7}
              placeholder="Tell us about your data or reporting needs."
              className={`${fieldClassName} min-h-36 resize-none leading-6`}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-16 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-4 text-sm font-medium text-white shadow-[0_4px_0_#C8C6F7] transition-colors hover:bg-[#4338CA]"
        >
          Send Message
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </section>
  );
}
