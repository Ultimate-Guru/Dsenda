"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Check, LockKeyhole } from "lucide-react";

type Status = "idle" | "sending" | "done" | "error";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setEmail("");
        setStatus("done");
        return;
      }

      const data = await res.json().catch(() => ({}));
      setMessage(data.message ?? "Something went wrong. Try again.");
      setStatus("error");
    } catch {
      setMessage("Something went wrong. Check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section className="px-6 pb-28 pt-3 lg:px-8">
      <form
        id="waitlist-form"
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto w-full max-w-xl rounded-3xl border border-[#C7D2FE] bg-white p-6 shadow-[0_16px_50px_rgba(79,70,229,0.10)] sm:p-8"
      >
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

        {status === "done" ? (
          <div
            role="status"
            className="mt-7 flex items-center gap-3 rounded-xl bg-[#EEF2FF] px-4 py-4 text-sm font-medium text-[#191919]"
          >
            <Check className="h-5 w-5 shrink-0 text-[#4F46E5]" aria-hidden="true" />
            You&apos;re on the list. We&apos;ll be in touch with launch updates.
          </div>
        ) : (
          <>
            <label htmlFor="email" className="sr-only">
              Work email address
            </label>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={status === "error"}
                placeholder="Enter your work email"
                className="h-12 min-h-10 w-full flex-1 rounded-xl border border-[#D1D5DB] bg-white px-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#4F46E5] focus:ring-2 focus:ring-[#C7D2FE]/60"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-12 w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-5 text-sm font-semibold text-white shadow-[0_4px_0_#C8C6F7] transition-colors hover:bg-[#4338CA] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Joining..." : "Join waitlist"}
                {status !== "sending" && (
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>

            {status === "error" && (
              <p role="alert" className="mt-3 text-sm text-red-600">
                {message}
              </p>
            )}
          </>
        )}

        <p className="mt-5 text-center text-xs leading-5 text-[#6B7280]">
          We&apos;ll only use your email for Dsenda launch updates and early access.
        </p>
      </form>
    </section>
  );
}