"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export default function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("done");
        setEmail("");
        return;
      }
      const data = await res.json().catch(() => ({}));
      setMessage(data.message ?? "Something went wrong. Try again.");
      setStatus("error");
    } catch {
      setMessage("Something went wrong. Try again.");
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl bg-[#EDEDFC] p-6">
      <h3 className="text-2xl font-medium text-[#191919]">Stay updated.</h3>
      <p className="mt-2 text-sm text-[#191919]/75">
        Weekly insights on creative AI, directly to your inbox. No fluff, just
        precision.
      </p>

      {status === "done" ? (
        <p role="status" className="mt-5 rounded-lg bg-white px-4 py-3 text-sm text-[#191919]">
          You&apos;re on the list. Thank you!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 space-y-3" noValidate>
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full rounded-lg border border-[#191919]/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-lg bg-[#4F46E5] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#4338CA] disabled:opacity-60 cursor-pointer"
          >
            {status === "sending" ? "Subscribing..." : "Subscribe"}
          </button>
          {status === "error" && (
            <p role="alert" className="text-sm text-red-600">{message}</p>
          )}
        </form>
      )}
    </div>
  );
}
